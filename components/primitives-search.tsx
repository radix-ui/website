"use client";
import * as React from "react";
import MiniSearch, { type SearchResult } from "minisearch";
import { createAutocomplete } from "@algolia/autocomplete-core";
import { parseAlgoliaHitSnippet, SnippetedHit } from "@algolia/autocomplete-preset-algolia";
import { ExclamationTriangleIcon, CaretRightIcon } from "@radix-ui/react-icons";
import { Box, Tooltip, Text, Flex, Slot } from "@radix-ui/themes";
import { VisuallyHidden } from "radix-ui";
import styles from "./primitives-search.module.css";
import { Context } from "radix-ui/internal";

const [PrimitivesSearchProvider, usePrimitivesSearchContext] = Context.createContext<{
	autocomplete: InternalAutocompleteApi<
		SearchItem,
		React.BaseSyntheticEvent<object, any, any>,
		React.MouseEvent<Element, MouseEvent>,
		React.KeyboardEvent<Element>
	>;
	searchState: AutocompleteState;
}>("PrimitivesSearch");

import type {
	AutocompleteState as InternalAutocompleteState,
	AutocompleteApi as InternalAutocompleteApi,
} from "@algolia/autocomplete-core";

const SEARCH_INDEX_URL = "/search-index.json";

const SUPPORTED_LEVELS = ["lvl0", "lvl1", "lvl2", "lvl3", "lvl4"] as const;
type LevelContentType = (typeof SUPPORTED_LEVELS)[number];
type ContentType = LevelContentType | "content";
type SearchItem = SnippetedHit<{
	objectID: string;
	type: ContentType;
	url: string;
	title?: string;
	hierarchy?: {
		lvl0: string;
		lvl1: string;
		lvl2: string | null;
		lvl3: string | null;
		lvl4: string | null;
	};
	content: string | null;
}>;
type AutocompleteState = InternalAutocompleteState<SearchItem>;
type AutocompleteApi = InternalAutocompleteApi<
	SearchItem,
	React.BaseSyntheticEvent,
	React.MouseEvent,
	React.KeyboardEvent
>;

// A record as stored in the generated `search-index.json` – the same shape as
// `SearchItem` but without the `_snippetResult` we synthesize at query time.
interface SearchRecord {
	objectID: string;
	type: ContentType;
	url: string;
	title?: string;
	hierarchy?: {
		lvl0: string;
		lvl1: string;
		lvl2: string | null;
		lvl3: string | null;
		lvl4: string | null;
	};
	content: string | null;
}

const SEARCHABLE_FIELDS = ["lvl1", "lvl2", "lvl3", "lvl4", "content"] as const;
const HIGHLIGHT_PRE_TAG = "__aa-highlight__";
const HIGHLIGHT_POST_TAG = "__/aa-highlight__";

let searchIndexPromise: Promise<MiniSearch<SearchRecord>> | null = null;
const recordsById = new Map<string, SearchRecord>();

function loadSearchIndex(): Promise<MiniSearch<SearchRecord>> {
	if (!searchIndexPromise) {
		searchIndexPromise = fetch(SEARCH_INDEX_URL)
			.then((response) => {
				if (!response.ok) {
					throw new Error(`Failed to load search index (${response.status})`);
				}
				return response.json() as Promise<SearchRecord[]>;
			})
			.then((records) => {
				const miniSearch = new MiniSearch<SearchRecord>({
					idField: "objectID",
					fields: [...SEARCHABLE_FIELDS],
					extractField: (record, field) => {
						if (field === "objectID") return record.objectID;
						if (field === "content") return record.content ?? "";
						return record.hierarchy?.[field as LevelContentType] ?? "";
					},
					searchOptions: {
						prefix: true,
						fuzzy: 0.2,
						combineWith: "AND",
						boost: { lvl1: 8, lvl2: 6, lvl3: 4, lvl4: 3, content: 1 },
					},
				});
				for (const record of records) {
					recordsById.set(record.objectID, record);
				}
				miniSearch.addAll(records);
				return miniSearch;
			})
			.catch((error) => {
				searchIndexPromise = null;
				throw error;
			});
	}
	return searchIndexPromise;
}

function getQueryTokens(query: string): string[] {
	return query.toLowerCase().split(/\s+/).filter(Boolean);
}

function stripPunctuation(token: string): string {
	return token.replace(/[^\p{L}\p{N}]/gu, "");
}

function isTokenMatch(token: string, queryTokens: string[], matchedTerms: string[]): boolean {
	const lower = token.toLowerCase();
	if (!lower) return false;
	return (
		queryTokens.some((queryToken) => lower.startsWith(queryToken)) ||
		matchedTerms.some((term) => lower === term || lower.startsWith(term))
	);
}

/**
 * Wraps matched words in the same markers Algolia used, so the existing
 * `parseAlgoliaHitSnippet` render path keeps working unchanged.
 */
function highlightText(text: string, queryTokens: string[], matchedTerms: string[]): string {
	return text
		.split(/(\s+)/)
		.map((part) => {
			if (part === "" || /^\s+$/.test(part)) return part;
			const segments = part.match(/^([^\p{L}\p{N}]*)(.*?)([^\p{L}\p{N}]*)$/u);
			if (!segments) return part;
			const [, pre, core, post] = segments;
			if (core && isTokenMatch(core, queryTokens, matchedTerms)) {
				return `${pre}${HIGHLIGHT_PRE_TAG}${core}${HIGHLIGHT_POST_TAG}${post}`;
			}
			return part;
		})
		.join("");
}

/**
 * Produces a snippet window of roughly `snippetLength` words centered on the
 * first match, mirroring Algolia's `attributesToSnippet` behavior.
 */
function snippetText(
	text: string,
	queryTokens: string[],
	matchedTerms: string[],
	snippetLength: number,
): string {
	const words = text.split(/\s+/).filter(Boolean);
	if (words.length <= snippetLength) {
		return highlightText(text, queryTokens, matchedTerms);
	}
	const matchIndex = words.findIndex((word) =>
		isTokenMatch(stripPunctuation(word), queryTokens, matchedTerms),
	);
	const center = matchIndex === -1 ? 0 : matchIndex;
	const start = Math.max(0, center - Math.floor(snippetLength / 2));
	const end = Math.min(words.length, start + snippetLength);
	const slice = words.slice(start, end).join(" ");
	return `${start > 0 ? "…" : ""}${highlightText(
		slice,
		queryTokens,
		matchedTerms,
	)}${end < words.length ? "…" : ""}`;
}

function toSearchItem(
	record: SearchRecord,
	queryTokens: string[],
	matchedTerms: string[],
	snippetLength: number,
): SearchItem {
	const hierarchySnippet: Record<string, { value: string; matchLevel: "none" }> = {};
	if (record.hierarchy) {
		for (const level of SUPPORTED_LEVELS) {
			const value = record.hierarchy[level];
			if (value != null) {
				hierarchySnippet[level] = {
					value: highlightText(value, queryTokens, matchedTerms),
					matchLevel: "none",
				};
			}
		}
	}
	return {
		...record,
		_snippetResult: {
			...(record.hierarchy ? { hierarchy: hierarchySnippet } : {}),
			content: {
				value:
					record.content != null
						? snippetText(record.content, queryTokens, matchedTerms, snippetLength)
						: "",
				matchLevel: "none",
			},
		},
	} as unknown as SearchItem;
}

/**
 * Scores how strongly a query matches a page's title. Only the canonical page
 * row (`type: "lvl1"`) is eligible, so a component's title match is promoted
 * above its own sections and above content hits on other pages. Higher is
 * better; 0 means "not a title match".
 */
function titleMatchTier(
	record: SearchRecord,
	normalizedQuery: string,
	queryTokens: string[],
): number {
	if (record.type !== "lvl1") return 0;
	const title = (record.hierarchy?.lvl1 ?? "").toLowerCase();
	if (!title) return 0;
	if (title === normalizedQuery) return 4; // exact title ("accordion")
	if (title.startsWith(normalizedQuery)) return 3; // title prefix ("accord")
	if (normalizedQuery.startsWith(title)) return 2; // "accordion item"
	const titleWords = title.split(/\s+/);
	const wordPrefix = titleWords.some((word) => queryTokens.some((token) => word.startsWith(token)));
	return wordPrefix ? 1 : 0; // e.g. "menu" → "Dropdown Menu"
}

type PrimitivesSearchProps = {
	children?: React.ReactNode;
	snippetLength?: number;
	hitsPerPage?: number;
};

function PrimitivesSearchRoot({
	children,
	snippetLength = 15,
	hitsPerPage = 50,
}: PrimitivesSearchProps) {
	const [searchState, setSearchState] = React.useState<AutocompleteState>({
		collections: [],
		completion: null,
		context: {},
		isOpen: false,
		query: "",
		activeItemId: null,
		status: "idle",
	});

	const autocomplete = React.useMemo(
		() =>
			createAutocomplete<
				SearchItem,
				React.BaseSyntheticEvent,
				React.MouseEvent,
				React.KeyboardEvent
			>({
				// Provide deterministic id to prevent client / server mismatch warning
				id: "radix-autocomplete",
				// Always highlight the first result
				defaultActiveItemId: 0,
				placeholder: "Search docs",
				openOnFocus: false,
				debug: false,
				shouldPanelOpen: ({ state }) => Boolean(state.query),
				onStateChange: ({ state }) => {
					setSearchState(state);
				},
				getSources: async ({ query, setStatus }) => {
					const trimmedQuery = query.trim();
					if (!trimmedQuery) {
						return [];
					}

					let miniSearch: MiniSearch<SearchRecord>;
					try {
						miniSearch = await loadSearchIndex();
					} catch {
						setStatus("error");
						return [];
					}

					const queryTokens = getQueryTokens(trimmedQuery);
					const normalizedQuery = trimmedQuery.toLowerCase();
					const results: SearchResult[] = miniSearch.search(trimmedQuery);

					// Re-rank so an exact/prefix component-title match (the `lvl1`
					// page row) wins over its own deeper sections and over content
					// matches elsewhere. MiniSearch sums per-field scores, so a
					// sub-row matching both the page title and its body would
					// otherwise outrank the page row itself. Crucially, this sort
					// runs over the *full* result set before truncating: component
					// page rows all share an identical title score, so MiniSearch
					// scatters them deep among content hits — slicing first would
					// drop most of them before the tier could surface them.
					const ranked = results
						.flatMap((result) => {
							const record = recordsById.get(result.id as string);
							if (!record) return [];
							return [
								{
									record,
									terms: result.terms,
									titleTier: titleMatchTier(record, normalizedQuery, queryTokens),
									score: result.score,
								},
							];
						})
						.sort((a, b) => b.titleTier - a.titleTier || b.score - a.score)
						.slice(0, hitsPerPage)
						.map((entry) => ({
							item: toSearchItem(entry.record, queryTokens, entry.terms, snippetLength),
							titleTier: entry.titleTier,
							score: entry.score,
						}));

					const groups = new Map<string, typeof ranked>();
					for (const entry of ranked) {
						const key = entry.item.hierarchy?.lvl0 || "Uncategorized";
						const group = groups.get(key);
						if (group) group.push(entry);
						else groups.set(key, [entry]);
					}

					// Order groups by their best hit (the first entry, since the list
					// is already globally sorted), falling back to the editorial
					// section order for ties.
					return [...groups.entries()]
						.sort(([lvlA, a], [lvlB, b]) => {
							const byBestHit = b[0].titleTier - a[0].titleTier || b[0].score - a[0].score;
							if (byBestHit !== 0) return byBestHit;
							return SOURCES_ORDER.indexOf(lvlA) - SOURCES_ORDER.indexOf(lvlB);
						})
						.map(([lvl0, entries]) => ({
							onSelect: (params) => {
								params.setIsOpen(false);
							},
							sourceId: lvl0,
							getItemUrl: ({ item }) => item.url,
							getItems: () => entries.map((entry) => entry.item),
						}));
				},
			}),
		[hitsPerPage, snippetLength],
	);

	const setIsOpen = autocomplete.setIsOpen;
	// Clean up the open state on unmount
	React.useEffect(() => {
		return () => setIsOpen(false);
	}, [setIsOpen]);

	return (
		<PrimitivesSearchProvider autocomplete={autocomplete} searchState={searchState}>
			<Box {...autocomplete.getRootProps({})} position="relative">
				{children}
			</Box>
		</PrimitivesSearchProvider>
	);
}

interface PrimitivesSearchResultsPanelProps {
	children: React.ReactNode;
	onSearchShow?: () => void;
	onSearchHide?: () => void;
}

function PrimitivesSearchResultsPanel({
	children,
	onSearchShow,
	onSearchHide,
}: PrimitivesSearchResultsPanelProps) {
	const { autocomplete, searchState } = usePrimitivesSearchContext("PrimitivesSearch");
	const [showPanel, setShowPanel] = React.useState(false);

	React.useEffect(() => {
		if (searchState.query.trim() === "") {
			setShowPanel(false);
		} else {
			setShowPanel((current) => (searchState.status !== "idle" ? current : true));
		}
	}, [searchState]);

	React.useEffect(() => {
		if (showPanel) {
			onSearchShow?.();
		} else {
			onSearchHide?.();
		}

		return () => onSearchHide?.();
	}, [showPanel, onSearchShow, onSearchHide]);

	if (!showPanel) {
		return null;
	}

	return <Slot {...autocomplete.getPanelProps({})}>{children}</Slot>;
}

function PrimitivesSearchResults() {
	const { autocomplete, searchState } = usePrimitivesSearchContext("PrimitivesSearch");
	return <SearchResults searchState={searchState} autocomplete={autocomplete} />;
}

function PrimitivesSearchClearButton({ children }: { children: React.ReactNode }) {
	const { autocomplete, searchState } = usePrimitivesSearchContext("PrimitivesSearch");

	if (!searchState.query) {
		return null;
	}

	return (
		<Tooltip className="radix-themes-custom-fonts" content="Clear">
			<Slot
				onClick={(event) => {
					autocomplete.setQuery("");
					event.currentTarget.closest('[role="combobox"]')?.querySelector("input")?.focus();
				}}
			>
				{children}
			</Slot>
		</Tooltip>
	);
}

function PrimitivesSearchInput({ children }: { children: React.ReactNode }) {
	const inputRef = React.useRef<HTMLInputElement>(null);
	const { autocomplete } = usePrimitivesSearchContext("PrimitivesSearch");
	const { onFocus, ...inputProps } = autocomplete.getInputProps({
		inputElement: inputRef.current,
	});
	return (
		<Box>
			<Flex asChild position="relative" align="center">
				<form {...autocomplete.getFormProps({ inputElement: inputRef.current })}>
					<Slot
						{...inputProps}
						className={styles.PrimitivesSearchInput}
						ref={inputRef}
						onFocus={(event: React.FocusEvent<HTMLInputElement>) => {
							// `onFocus` from the input props prevents the dialog's auto focus when it is opened
							// by pressing "Enter" on the trigger button. This is the workaround – the provided
							// `onFocus` function does nothing when the value is empty anyway.
							if (inputProps.value) {
								onFocus(event);
							}
						}}
					>
						{children}
					</Slot>
				</form>
			</Flex>
		</Box>
	);
}

export const PrimitivesSearch = {
	Root: PrimitivesSearchRoot,
	Input: PrimitivesSearchInput,
	ClearButton: PrimitivesSearchClearButton,
	Results: PrimitivesSearchResults,
	ResultsPanel: PrimitivesSearchResultsPanel,
};

type SearchResultsProps = {
	searchState: AutocompleteState;
	autocomplete: AutocompleteApi;
};

const SearchResults = React.memo(
	function SearchResults({ searchState, autocomplete }: SearchResultsProps) {
		const hasResults = searchState.collections.some((collection) => collection.items.length > 0);

		if (searchState.status === "error") {
			return (
				<Box py="2">
					<ItemTitle size={{ initial: "3", md: "2" }} color="gray">
						<Box
							asChild
							display="inline-block"
							style={{
								marginLeft: "var(--space-2)",
								marginRight: "var(--space-2)",
								marginTop: -1,
							}}
						>
							<ExclamationTriangleIcon />
						</Box>
						<Mark>Unable to fetch results.</Mark> You might want to check your network connection.
					</ItemTitle>
				</Box>
			);
		}

		if (!hasResults) {
			return (
				<Box p="3">
					<ItemTitle size="3" color="gray" highContrast>
						No results for <Mark>“{searchState.query}”</Mark>
					</ItemTitle>
				</Box>
			);
		}

		return (
			<>
				{searchState.collections.map((collection, index) => (
					<React.Fragment key={collection.source.sourceId}>
						{index > 0 && (
							<Box
								asChild
								my="2"
								mx="3"
								style={{
									border: "none",
									height: 1,
									backgroundColor: "var(--gray-6)",
								}}
							>
								<hr />
							</Box>
						)}

						<section>
							{collection.items.length > 0 && (
								<Box
									asChild
									{...autocomplete.getListProps()}
									className={styles.PrimitivesSearchList}
								>
									<ul>
										{collection.items.map((item) => (
											<li
												key={item.objectID}
												{...autocomplete.getItemProps({
													item,
													source: collection.source,
												})}
												className={styles.PrimitivesSearchListItem}
											>
												<ItemLink item={item} />
											</li>
										))}
									</ul>
								</Box>
							)}
						</section>
					</React.Fragment>
				))}
			</>
		);
	},
	function areEqual(_prevProps, nextProps) {
		// We don't update the results when Autocomplete is loading or stalled to
		// avoid UI flashes:
		//  - Empty → Results
		//  - NoResults → NoResults with another query
		return nextProps.searchState.status === "loading" || nextProps.searchState.status === "stalled";
	},
);

function getItemFallbackText(item: SearchItem) {
	return item.title || item.content || "No title available";
}

function hasHierarchy(item: SearchItem): item is SearchItem & {
	hierarchy: NonNullable<SearchItem["hierarchy"]>;
} {
	return !!item.hierarchy && typeof item.hierarchy === "object";
}

function ItemLink({ item }: { item: SearchItem }) {
	const useFallbackTitle = item.type !== "content" && !hasHierarchy(item);
	return (
		<Box asChild display="block" p="3" style={{ textDecoration: "none", color: "inherit" }}>
			<a href={item.url}>
				<ItemTitle mb="1" mt="-1">
					{useFallbackTitle ? (
						getItemFallbackText(item)
					) : (
						<Highlight
							hit={item}
							attribute={item.type === "content" ? "content" : ["hierarchy", item.type]}
						/>
					)}
				</ItemTitle>
				{/* Adding a semi-colon to insert a break in the speech flow */}
				<VisuallyHidden.Root>; </VisuallyHidden.Root>
				<ItemBreadcrumb item={item} levels={SUPPORTED_LEVELS} />
			</a>
		</Box>
	);
}

type ItemTitleProps = Omit<Extract<React.ComponentPropsWithoutRef<typeof Text>, { as: "p" }>, "as">;

function ItemTitle(props: ItemTitleProps) {
	return <Text as="p" color="blue" size="3" truncate {...props} />;
}

function ItemBreadcrumb({ item, levels }: { item: SearchItem; levels: typeof SUPPORTED_LEVELS }) {
	if (!hasHierarchy(item)) {
		return (
			<Text size="2" color="gray" as="p">
				{getItemFallbackText(item)}
			</Text>
		);
	}

	const itemLevelIndex = item.type === "content" ? levels.length - 1 : levels.indexOf(item.type);
	const breadcrumbLevels = levels.slice(0, itemLevelIndex);

	return (
		<Text size="2" color="gray" as="p">
			{breadcrumbLevels.map((level, index) => {
				const heading = item.hierarchy[level];
				if (!heading) return null;

				return (
					<React.Fragment key={index}>
						{index > 0 && (
							<Box as="span" display="inline" style={{ color: "var(--gray-a11)" }}>
								<CaretRightIcon style={{ display: "inline-block" }} />
								<VisuallyHidden.Root>, </VisuallyHidden.Root>
							</Box>
						)}
						<Highlight hit={item} attribute={["hierarchy", level]} />
					</React.Fragment>
				);
			})}
		</Text>
	);
}

function Highlight<THit extends SnippetedHit<unknown>>({
	hit,
	attribute,
}: {
	hit: THit;
	attribute: keyof THit | string[];
}) {
	return (
		<>
			{parseAlgoliaHitSnippet<THit>({ hit, attribute }).map(({ value, isHighlighted }, index) =>
				isHighlighted ? <Mark key={index}>{value}</Mark> : value,
			)}
		</>
	);
}

function Mark({ children }: { children: React.ReactNode }) {
	return (
		<Text asChild weight="bold" className={styles.PrimitivesSearchMark}>
			<mark>{children}</mark>
		</Text>
	);
}

const SOURCES_ORDER = ["Overview", "Components", "Utilities", "Guides"];
