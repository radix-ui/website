import { Text } from "@radix-ui/themes";

export const MarketingCaption = ({
	asChild: _,
	style,
	...props
}: React.ComponentPropsWithoutRef<typeof Text>) => (
	<Text
		as="div"
		size={{ initial: "3" }}
		weight="bold"
		style={{
			width: "max-content",
			color: "transparent",
			WebkitBackgroundClip: "text",
			filter: "saturate(0.5)",
			backgroundImage:
				"linear-gradient(to bottom left, var(--blue-11), var(--blue-12))",
			...style,
		}}
		{...props}
	/>
);
