import { Box } from "@radix-ui/themes";

export const FancyBackground = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<Box
			style={{
				position: "relative",
				zIndex: 0,
				paddingTop: "var(--header-height)",
			}}
		>
			<Box
				position="absolute"
				overflow="hidden"
				inset="0"
				style={{
					backgroundColor: "var(--gray-1)",
					zIndex: -1,
				}}
			>
				<Box
					width="100vw"
					minWidth="1500px"
					position="absolute"
					top="0"
					bottom="0"
					style={{
						left: "50%",
						transform: "translateX(-50%)",
						backgroundRepeat: "no-repeat",
						backgroundImage: `
							radial-gradient(circle 800px at 700px 200px, var(--purple-2), transparent),
							radial-gradient(circle 600px at calc(100% - 300px) 300px, var(--blue-3), transparent),
							radial-gradient(circle 800px at right center, var(--sky-3), transparent),
							radial-gradient(circle 800px at right bottom, var(--sky-1), transparent),
							radial-gradient(circle 800px at calc(50% - 600px) calc(100% - 100px), var(--pink-3), var(--pink-1), transparent)`,
					}}
				/>
			</Box>
			{children}
		</Box>
	);
};
