import { Box } from '@radix-ui/themes';

export const FancyBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box style={{ position: 'relative', zIndex: 0, paddingTop: 'var(--header-height)' }}>
      <Box
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'var(--gray-1)',
          zIndex: -1,
          overflow: 'hidden',
        }}
      >
        <Box
          style={{
            width: '100vw',
            minWidth: 1500,
            left: '50%',
            transform: 'translateX(-50%)',
            position: 'absolute',
            top: 0,
            bottom: 0,
            backgroundRepeat: 'no-repeat',
            backgroundImage: `
              radial-gradient(circle 800px at 700px 200px, var(--purple-2), transparent),
              radial-gradient(circle 600px at calc(100% - 300px) 300px, var(--blue-3), transparent),
              radial-gradient(circle 800px at right center, var(--sky-3), transparent),
              radial-gradient(circle 800px at right bottom, var(--sky-1), transparent),
              radial-gradient(circle 800px at calc(50% - 600px) calc(100% - 100px), var(--pink-3), var(--pink-1), transparent)
            `,
          }}
        />
      </Box>
      {children}
    </Box>
  );
};
