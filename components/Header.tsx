"use client";
import * as React from "react";
import {
	AccessibleIcon,
	Flex,
	IconButton,
	Link,
	Theme,
	Tooltip,
} from "@radix-ui/themes";
import styles from "./Header.module.css";
import { BoxLink } from "./BoxLink";
import { ThemeToggle } from "./ThemeToggle";
import { GitHubLogoIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useMobileMenuContext } from "./MobileMenu";
import { classNames } from "@utils/classNames";
import { RadixLogo, RadixLogoIcon } from "./RadixLogo";
import { RemoveScroll } from "react-remove-scroll";

export interface HeaderProps {
	children?: React.ReactNode;
	gitHubLink?: string;
	ghost?: boolean;
}

type ScrollState = "at-top" | "scrolling-up" | "scrolling-down";

export const Header = ({ children, gitHubLink, ghost }: HeaderProps) => {
	const mobileMenu = useMobileMenuContext();
	const router = useRouter();

	const [scrollState, setScrollState] = React.useState<ScrollState>("at-top");

	React.useEffect(() => {
		let previousScrollY = window.scrollY;

		const handleScroll = () => {
			const direction =
				previousScrollY < window.scrollY ? "scrolling-down" : "scrolling-up";
			const state = window.scrollY < 30 ? "at-top" : direction;
			previousScrollY = window.scrollY;
			setScrollState(state);
		};

		if (ghost) {
			addEventListener("scroll", handleScroll, { passive: true });
		} else {
			removeEventListener("scroll", handleScroll);
		}

		handleScroll();
		return () => removeEventListener("scroll", handleScroll);
	}, [ghost]);

	return (
		<Theme asChild className="radix-themes-custom-fonts">
			<div
				data-scroll-state={scrollState}
				data-mobile-menu-open={mobileMenu.open}
				className={classNames(styles.HeaderRoot, ghost ? styles.ghost : "")}
			>
				<div className={styles.HeaderInner}>
					{/* Components that hide the scrollbar (like Dialog) add padding to
          account for the scrollbar gap to avoid layout jank. This does not
          work for position: fixed elements. Since we use react-remove-scroll
          under the hood for those primitives, we can add this helper class
          provided by that lib to deal with that for the Header.
          https://github.com/radix-ui/website/issues/64
          https://github.com/theKashey/react-remove-scroll#positionfixed-elements */}
					<div
						className={RemoveScroll.classNames.fullWidth}
						style={{
							position: "absolute",
							height: "inherit",
							top: 0,
							left: 0,
							right: 0,
						}}
					>
						<Flex
							display={{ sm: "none" }}
							align="center"
							position="absolute"
							top="0"
							bottom="0"
							left="0"
							pl="4"
						>
							{mobileMenu.open ? (
								<NextLink href="/" passHref legacyBehavior>
									<BoxLink>
										<AccessibleIcon label="Radix Homepage">
											<RadixLogoIcon />
										</AccessibleIcon>
									</BoxLink>
								</NextLink>
							) : (
								<RadixByWorkOSLogoLink />
							)}
						</Flex>

						<Flex
							display={{ initial: "none", sm: "flex" }}
							align="center"
							position="absolute"
							top="0"
							bottom="0"
							left="0"
							pl="4"
						>
							<RadixByWorkOSLogoLink />
						</Flex>

						<div className={styles.HeaderProductLinksContainer}>
							<HeaderProductLink
								href="/"
								active={
									router.pathname === "/" ||
									router.pathname.startsWith("/themes")
								}
							>
								Themes
							</HeaderProductLink>
							<HeaderProductLink
								href="/primitives"
								active={router.pathname.startsWith("/primitives")}
							>
								Primitives
							</HeaderProductLink>
							<HeaderProductLink
								href="/icons"
								active={router.pathname.startsWith("/icons")}
							>
								Icons
							</HeaderProductLink>
							<HeaderProductLink
								href="/colors"
								active={router.pathname.startsWith("/colors")}
							>
								Colors
							</HeaderProductLink>
						</div>

						<Flex
							display={{ initial: "none", md: "flex" }}
							align="center"
							gap="5"
							position="absolute"
							top="0"
							bottom="0"
							right="0"
							pr="4"
						>
							{children}

							<Link
								size="2"
								color="gray"
								href="/blog"
								highContrast={router.pathname.includes("/blog")}
							>
								Blog
							</Link>

							{gitHubLink && (
								<Tooltip
									className="radix-themes-custom-fonts"
									content="View GitHub"
								>
									<IconButton asChild size="3" variant="ghost" color="gray">
										<a
											href={gitHubLink}
											target="_blank"
											aria-label="View GitHub"
										>
											<GitHubLogoIcon width="16" height="16" />
										</a>
									</IconButton>
								</Tooltip>
							)}

							<ThemeToggle />
						</Flex>

						<Flex
							display={{ md: "none" }}
							align="center"
							gap="4"
							position="absolute"
							top="0"
							bottom="0"
							right="0"
							pr="4"
						>
							<div className={styles.HeaderThemeToggleContainer}>
								<ThemeToggle />
							</div>

							<Tooltip
								className="radix-themes-custom-fonts"
								content="Navigation"
							>
								<IconButton
									size="3"
									variant="ghost"
									color="gray"
									data-state={mobileMenu.open ? "open" : "closed"}
									onClick={() => mobileMenu.setOpen((open) => !open)}
									className={styles.MobileMenuButton}
								>
									<HamburgerMenuIcon width="16" height="16" />
								</IconButton>
							</Tooltip>
						</Flex>
					</div>
				</div>
			</div>
		</Theme>
	);
};

const HeaderProductLink = ({
	active,
	children,
	href = "",
	...props
}: React.ComponentPropsWithoutRef<"a"> & { active?: boolean }) => (
	<NextLink href={href} passHref legacyBehavior>
		<a
			data-state={active ? "active" : "inactive"}
			className={styles.HeaderProductLink}
			{...props}
		>
			<span className={styles.HeaderProductLinkInner}>{children}</span>
			<span className={styles.HeaderProductLinkInnerHidden}>{children}</span>
		</a>
	</NextLink>
);

const RadixByWorkOSLogoLink = () => (
	<Flex align="center" gap="3">
		<NextLink href="/" passHref legacyBehavior>
			<BoxLink>
				<AccessibleIcon label="Radix Homepage">
					<RadixLogo />
				</AccessibleIcon>
			</BoxLink>
		</NextLink>

		<div
			style={{
				background: "currentcolor",
				opacity: 0.15,
				width: 1,
				height: 24,
			}}
		/>

		<BoxLink href="https://workos.com" target="_blank">
			<AccessibleIcon label="Made by WorkOS">
				<svg
					width="85"
					height="24"
					viewBox="0 0 85 24"
					fill="currentcolor"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M35.631 10.3501H33.6565L36.2104 19.9984H38.4739L39.8956 14.1564C40.1844 12.8878 40.2111 12.3196 40.2111 12.3196H40.2378C40.2378 12.3196 40.2644 12.8878 40.5806 14.1564L42.0937 19.9989H44.2918L46.7924 10.3507H44.8179L43.449 16.2319C43.1862 17.382 43.1601 18.0032 43.1601 18.0032H43.1204C43.1204 18.0032 43.0539 17.382 42.7775 16.2319L41.3433 10.3507H39.1055L37.7502 16.2319C37.4869 17.3558 37.395 18.0032 37.395 18.0032H37.3683C37.3683 18.0032 37.316 17.3421 37.0527 16.2319L35.631 10.3501ZM46.4627 16.4936C46.4627 14.2858 47.8844 12.8588 50.0303 12.8588C52.1625 12.8588 53.5836 14.2858 53.5836 16.4929C53.5836 18.7132 52.1619 20.1545 50.0303 20.1545C47.8849 20.154 46.4627 18.7138 46.4627 16.4936ZM51.7409 16.4936C51.7409 15.066 51.0564 14.2596 50.0303 14.2596C48.9246 14.2596 48.3054 15.1583 48.3054 16.4936C48.3054 17.9473 48.9899 18.7531 50.0303 18.7531C51.1358 18.7531 51.7409 17.8544 51.7409 16.4936ZM54.465 12.9665H56.2154V14.2624H56.2551C56.5582 13.5882 57.2813 12.914 58.5185 12.914C58.7285 12.914 58.8607 12.9408 58.9527 12.9665V14.724H58.9004C58.9004 14.724 58.7427 14.6716 58.3079 14.6716C56.9526 14.6716 56.2154 15.4774 56.2154 16.9842V19.9973H54.465V12.9665ZM59.7688 10.3501H61.5191V13.4429C61.5191 15.2666 61.4924 15.5971 61.4924 15.5971H61.5191L64.1252 12.967H66.3098L63.2575 16.0069L66.7984 19.9984H64.7309L62.1769 17.0902L61.5185 17.7376V19.9973H59.7682L59.7688 10.3501ZM66.8234 15.2095C66.8234 12.2359 68.6667 10.2538 71.4307 10.2538C74.1947 10.2538 76.0375 12.2359 76.0375 15.2095C76.0375 18.1833 74.1947 20.1653 71.4307 20.1653C68.6667 20.1653 66.8234 18.1833 66.8234 15.2095ZM74.1283 15.2095C74.1283 13.1876 73.0494 11.8255 71.4296 11.8255C69.8098 11.8255 68.7321 13.1876 68.7321 15.2095C68.7321 17.2316 69.8104 18.5936 71.4296 18.5936C73.0482 18.5936 74.1283 17.2316 74.1283 15.2095ZM76.7072 16.787H78.7084C78.7084 17.924 79.4853 18.5583 80.6698 18.5583C81.6697 18.5583 82.3552 18.0556 82.3552 17.3421C82.3552 16.5363 81.8289 16.3243 80.1562 15.9943C78.6295 15.69 77.0103 15.1742 77.0103 13.1654C77.0103 11.487 78.432 10.2184 80.6032 10.2184C82.8672 10.2184 84.263 11.4078 84.263 13.2047H82.2619C82.2619 12.3327 81.5907 11.7902 80.6032 11.7902C79.6034 11.7902 78.9848 12.2792 78.9848 12.9927C78.9848 13.7461 79.419 14.0362 80.7618 14.3137C82.7484 14.7371 84.381 14.9611 84.381 17.1814C84.381 18.9406 82.8541 20.13 80.6032 20.13C78.3134 20.13 76.7072 18.7953 76.7072 16.787Z" />
					<path d="M0.469655 11C0.469655 11.4821 0.595635 11.9644 0.84029 12.3796L5.27331 20.0879C5.72793 20.8744 6.41899 21.5179 7.27802 21.8056C8.06758 22.0768 8.92645 22.0639 9.70754 21.769C10.4886 21.4742 11.1433 20.9158 11.5595 20.1896L12.6294 18.3279L8.40727 11L12.8649 3.24041L13.9358 1.37959C14.2505 0.834441 14.6786 0.36388 15.191 0H8.31507C7.11004 0 5.99723 0.6435 5.39929 1.69216L0.84029 9.62134C0.596697 10.0396 0.468745 10.5155 0.469655 11ZM25.7496 11C25.7496 10.5178 25.6236 10.0347 25.3789 9.62041L20.8874 1.81041C20.4685 1.08695 19.8135 0.530974 19.0334 0.236502C18.2532 -0.05797 17.3958 -0.0728672 16.606 0.19433C15.7479 0.482163 15.0559 1.12475 14.6013 1.91216L13.5898 3.663L17.8119 11L13.3543 18.7586L12.2835 20.6204C11.9639 21.1704 11.5339 21.6361 11.0282 22H17.9041C19.1091 22 20.2219 21.3565 20.8199 20.3079L25.3789 12.3786C25.6236 11.9644 25.7496 11.4821 25.7496 11Z" />
					<path
						fillOpacity="0.8"
						d="M34.037 6.00916V0.26915H35.0633L36.8931 4.84763H36.9567L38.7865 0.26915H39.8128V6.00916H39.0013V1.79664H38.9416L37.2551 6.00916H36.5947L34.9121 1.79664H34.8485V6.00916H34.037ZM42.3387 6.08076C41.5153 6.08076 40.9067 5.57955 40.9067 4.79592V4.78796C40.9067 4.01626 41.4875 3.56677 42.5177 3.50312L43.6872 3.4355V3.05363C43.6872 2.58027 43.3889 2.31773 42.8041 2.31773C42.3268 2.31773 42.0125 2.49276 41.9091 2.79905L41.9051 2.81496H41.0738L41.0777 2.78711C41.1812 2.07906 41.8614 1.6057 42.8439 1.6057C43.9298 1.6057 44.5424 2.14668 44.5424 3.05363V6.00916H43.6872V5.39657H43.6196C43.365 5.83413 42.9115 6.08076 42.3387 6.08076ZM41.7659 4.76012C41.7659 5.1579 42.104 5.39259 42.5694 5.39259C43.2138 5.39259 43.6872 4.97094 43.6872 4.41405V4.04411L42.6331 4.11173C42.0364 4.14753 41.7659 4.36233 41.7659 4.75216V4.76012ZM47.3349 6.08076C46.2489 6.08076 45.5448 5.20961 45.5448 3.85317V3.84522C45.5448 2.47684 46.237 1.61366 47.3349 1.61366C47.9276 1.61366 48.4327 1.90801 48.6635 2.37342H48.7311V-0.00532025H49.5903V6.00916H48.7311V5.32895H48.6635C48.4129 5.80231 47.9395 6.08076 47.3349 6.08076ZM47.5815 5.34486C48.3015 5.34486 48.743 4.77603 48.743 3.85317V3.84522C48.743 2.92236 48.2975 2.35353 47.5815 2.35353C46.8575 2.35353 46.4239 2.91838 46.4239 3.84522V3.85317C46.4239 4.78001 46.8575 5.34486 47.5815 5.34486ZM52.689 6.09269C51.4241 6.09269 50.6603 5.2295 50.6603 3.86113V3.85715C50.6603 2.50867 51.44 1.6057 52.6453 1.6057C53.8505 1.6057 54.5904 2.47684 54.5904 3.77362V4.07593H51.5275C51.5434 4.90332 51.9969 5.38464 52.7089 5.38464C53.2618 5.38464 53.592 5.11017 53.6954 4.88741L53.7113 4.85559L54.5427 4.85161L54.5347 4.88741C54.3915 5.45624 53.7949 6.09269 52.689 6.09269ZM52.6492 2.31375C52.0605 2.31375 51.615 2.71551 51.5394 3.45937H53.7352C53.6676 2.68767 53.234 2.31375 52.6492 2.31375ZM59.5525 6.08076C58.9479 6.08076 58.4745 5.80231 58.2239 5.32895H58.1603V6.00916H57.2971V-0.00532025H58.1603V2.37342H58.2239C58.4547 1.90801 58.9598 1.61366 59.5525 1.61366C60.6504 1.61366 61.3426 2.47684 61.3426 3.84522V3.85317C61.3426 5.20961 60.6425 6.08076 59.5525 6.08076ZM59.3099 5.34486C60.0299 5.34486 60.4635 4.78001 60.4635 3.85317V3.84522C60.4635 2.91838 60.0299 2.35353 59.3099 2.35353C58.5899 2.35353 58.1444 2.92236 58.1444 3.84522V3.85317C58.1444 4.77603 58.5899 5.34486 59.3099 5.34486ZM62.6274 7.52869C62.52 7.52869 62.3927 7.52073 62.2813 7.5088V6.82859C62.3649 6.84052 62.4723 6.8445 62.5717 6.8445C62.9735 6.8445 63.2121 6.67345 63.3434 6.23589L63.4071 6.01313L61.8398 1.68923H62.7706L63.8526 5.14199H63.9281L65.0061 1.68923H65.9131L64.306 6.17622C63.9401 7.21046 63.5025 7.52869 62.6274 7.52869Z"
					/>
				</svg>
			</AccessibleIcon>
		</BoxLink>
	</Flex>
);
