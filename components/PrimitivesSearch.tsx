import * as React from "react";
import algoliasearch from "algoliasearch/lite";
import { createAutocomplete } from "@algolia/autocomplete-core";
import {
	parseAlgoliaHitSnippet,
	SnippetedHit,
} from "@algolia/autocomplete-preset-algolia";
import { ExclamationTriangleIcon, CaretRightIcon } from "@radix-ui/react-icons";
import { Box, Tooltip, Text, Flex, Slot } from "@radix-ui/themes";
import { VisuallyHidden } from "radix-ui";
import styles from "./PrimitivesSearch.module.css";
import { Context } from "radix-ui/internal";

const [PrimitivesSearchProvider, usePrimitivesSearchContext] =
	Context.createContext<{
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
import type { Hit, SearchResponse } from "@algolia/client-search";

const ALGOLIA_APP_ID = "VXVOLU3YVQ";
const ALGOLIA_PUBLIC_API_KEY = "9d44395c1b7b172ac84b7e5ab80bf8c5";

const searchClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_PUBLIC_API_KEY);

const SUPPORTED_LEVELS = ["lvl0", "lvl1", "lvl2", "lvl3", "lvl4"] as const;
type LevelContentType = (typeof SUPPORTED_LEVELS)[number];
type ContentType = LevelContentType | "content";
type SearchItem = SnippetedHit<{
	objectID: string;
	type: ContentType;
	url: string;
	hierarchy: {
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
				getSources: ({ query, setStatus, state }) => {
					if (!query) return [];
					return searchClient
						.search<SearchItem>([
							{
								indexName: process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME!,
								query,
								params: {
									hitsPerPage,
									attributesToRetrieve: [
										"type",
										"url",
										"hierarchy.lvl0",
										"hierarchy.lvl1",
										"hierarchy.lvl2",
										"hierarchy.lvl3",
										"hierarchy.lvl4",
										"content",
									],
									attributesToSnippet: [
										`hierarchy.lvl0:${snippetLength}`,
										`hierarchy.lvl1:${snippetLength}`,
										`hierarchy.lvl2:${snippetLength}`,
										`hierarchy.lvl3:${snippetLength}`,
										`hierarchy.lvl4:${snippetLength}`,
										`content:${snippetLength}`,
									],
									snippetEllipsisText: "…",
									highlightPreTag: "__aa-highlight__",
									highlightPostTag: "__/aa-highlight__",
								},
							},
						])
						.catch((error) => {
							// The Algolia `RetryError` happens when all the servers have
							// failed, meaning that there's no chance the response comes
							// back. This is the right time to display an error.
							// See https://github.com/algolia/algoliasearch-client-javascript/blob/2ffddf59bc765cd1b664ee0346b28f00229d6e12/packages/transporter/src/errors/createRetryError.ts#L5
							if (error.name === "RetryError") setStatus("error");
							throw error;
						})
						.then(({ results }) => {
							// we only have 1 query, so we  grab the hits from the first result
							const { hits } = results[0] as SearchResponse<SearchItem>;
							const sources = groupBy(hits, (hit) => hit.hierarchy.lvl0);
							return Object.entries(sources)
								.sort(sortSources)
								.map(([lvl0, items]) => ({
									onSelect: (params) => {
										params.setIsOpen(false);
									},
									sourceId: lvl0,
									getItemUrl: ({ item }) => item.url,
									getItems: () => items,
								}));
						});
				},
			}),
		[],
	);

	// Clean up the open state on unmount
	React.useEffect(() => {
		return () => autocomplete.setIsOpen(false);
	}, []);

	return (
		<PrimitivesSearchProvider
			autocomplete={{ ...autocomplete }}
			searchState={{ ...searchState }}
		>
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
	const { autocomplete, searchState } =
		usePrimitivesSearchContext("PrimitivesSearch");
	const [showPanel, setShowPanel] = React.useState(false);

	React.useEffect(() => {
		if (searchState.query.trim() === "") {
			setShowPanel(false);
		} else {
			setShowPanel((current) =>
				searchState.status !== "idle" ? current : true,
			);
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
	const { autocomplete, searchState } =
		usePrimitivesSearchContext("PrimitivesSearch");
	return (
		<SearchResults searchState={searchState} autocomplete={autocomplete} />
	);
}

function PrimitivesSearchClearButton({
	children,
}: {
	children: React.ReactNode;
}) {
	const { autocomplete, searchState } =
		usePrimitivesSearchContext("PrimitivesSearch");

	if (!searchState.query) {
		return null;
	}

	return (
		<Tooltip className="radix-themes-custom-fonts" content="Clear">
			<Slot
				onClick={(event) => {
					autocomplete.setQuery("");
					event.currentTarget
						.closest('[role="combobox"]')
						?.querySelector("input")
						?.focus();
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
				<form
					{...autocomplete.getFormProps({ inputElement: inputRef.current })}
				>
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
	({ searchState, autocomplete }: SearchResultsProps) => {
		const hasResults = searchState.collections.some(
			(collection) => collection.items.length > 0,
		);

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
						<Mark>Unable to fetch results.</Mark> You might want to check your
						network connection.
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
		return (
			nextProps.searchState.status === "loading" ||
			nextProps.searchState.status === "stalled"
		);
	},
);

function ItemLink({ item }: { item: SearchItem }) {
	return (
		<Box
			asChild
			display="block"
			p="3"
			style={{ textDecoration: "none", color: "inherit" }}
		>
			<a href={item.url}>
				<ItemTitle mb="1" mt="-1">
					<Highlight
						hit={item}
						attribute={
							item.type === "content" ? "content" : ["hierarchy", item.type]
						}
					/>
				</ItemTitle>
				{/* Adding a semi-colon to insert a break in the speech flow */}
				<VisuallyHidden.Root>; </VisuallyHidden.Root>
				<ItemBreadcrumb item={item} levels={SUPPORTED_LEVELS} />
			</a>
		</Box>
	);
}

type ItemTitleProps = Omit<
	Extract<React.ComponentPropsWithoutRef<typeof Text>, { as: "p" }>,
	"as"
>;

function ItemTitle(props: ItemTitleProps) {
	return <Text as="p" color="blue" size="3" truncate {...props} />;
}

function ItemBreadcrumb({
	item,
	levels,
}: {
	item: SearchItem;
	levels: typeof SUPPORTED_LEVELS;
}) {
	const itemLevelIndex =
		item.type === "content" ? levels.length - 1 : levels.indexOf(item.type);
	const breadcrumbLevels = levels.slice(0, itemLevelIndex);

	return (
		<Text size="2" color="gray" as="p">
			{breadcrumbLevels.map((level, index) => {
				const heading = item.hierarchy[level];
				return heading ? (
					<React.Fragment key={index}>
						{index > 0 ? (
							<Box
								as="span"
								display="inline"
								style={{ color: "var(--gray-a11)" }}
							>
								<CaretRightIcon style={{ display: "inline-block" }} />
								{/* Adding a comma to insert a natural break in the speech flow */}
								<VisuallyHidden.Root>, </VisuallyHidden.Root>
							</Box>
						) : null}
						<Highlight hit={item} attribute={["hierarchy", level]} />
					</React.Fragment>
				) : null;
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
			{parseAlgoliaHitSnippet<THit>({ hit, attribute }).map(
				({ value, isHighlighted }, index) =>
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

function groupBy<TValue extends Record<string, unknown>>(
	values: TValue[],
	predicate: (value: TValue) => string,
): Record<string, TValue[]> {
	return values.reduce<Record<string, TValue[]>>((acc, item) => {
		const key = predicate(item);
		if (!acc.hasOwnProperty(key)) acc[key] = [];
		acc[key].push(item);
		return acc;
	}, {});
}

const SOURCES_ORDER = ["Overview", "Components", "Utilities"];
type SourceEntry = [string, SearchItem[]];
function sortSources([lvl0_a]: SourceEntry, [lvl0_b]: SourceEntry) {
	return SOURCES_ORDER.indexOf(lvl0_b) < SOURCES_ORDER.indexOf(lvl0_a) ? 1 : -1;
}
