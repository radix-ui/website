import React from 'react';
import {
  Box,
  Grid,
  Text,
  Container,
  Flex,
  Heading,
  Paragraph,
  Section,
  Separator,
  darkTheme,
} from '@modulz/design-system';
import { MarketingCaption } from './MarketingCaption';

export const StatsSection = () => {
  return (
    <Section
      css={{
        pb: '$7',
        position: 'relative',
        $$transparent: '#FFFFFF00',
        $$chartTipColor: '$colors$slate7',
        $$chartLineStartColor: '$colors$teal5',
        $$chartLineEndColor: '$colors$slate7',
        $$chartTopColor: '#FFFFFF00',
        $$chartBottomColor: '$colors$slate2',
        [`.${darkTheme} &`]: {
          $$transparent: '#16161800',
          $$chartTopColor: '#16161800',
        },
      }}
    >
      <Box
        css={{
          pointerEvents: 'none',
          position: 'absolute',
          bottom: -200,
          left: -200,
          right: -200,
          height: 700,
          backgroundImage:
            'radial-gradient(ellipse 75% 700px at 35% calc(100% + 100px), $teal8 20%, $cyan3, $$transparent)',
          transform: 'rotate(-10deg)',
        }}
      />
      <FancyBackgroundChart />
      <Container size="3" css={{ position: 'relative' }}>
        <Grid
          align="stretch"
          justify="start"
          flow={{ '@initial': 'row', '@bp1': 'column' }}
          gap={{ '@initial': 4, '@bp1': 5, '@bp2': 6 }}
          css={{ whiteSpace: 'nowrap' }}
        >
          <Box>
            <Text
              css={{
                fontSize: '$9',
                '@bp1': { fontSize: '$8' },
                '@bp2': { fontSize: '$9' },
                fontWeight: 500,
                fontVariantNumeric: 'proportional-nums',
                letterSpacing: '-.031em',
                mb: '$2',
              }}
            >
              20M+
            </Text>
            <Text variant="gray" size={{ '@initial': 3, '@bp2': 4 }}>
              Monthly downloads
            </Text>
          </Box>
          <Box css={{ backgroundColor: '$slateA5', width: 1 }} />
          <Box>
            <Text
              css={{
                fontSize: '$9',
                '@bp1': { fontSize: '$8' },
                '@bp2': { fontSize: '$9' },
                fontWeight: 500,
                fontVariantNumeric: 'proportional-nums',
                letterSpacing: '-.031em',
                display: 'flex',
                alignItems: 'center',
                mb: '$2',
              }}
            >
              4000
              <Box as="span" css={{ fontSize: '75%', ml: '0.25em' }}>
                +
              </Box>
            </Text>
            <Text variant="gray" size={{ '@initial': 3, '@bp2': 4 }}>
              Discord members
            </Text>
          </Box>
          <Box css={{ backgroundColor: '$slateA5', width: 1 }} />
          <Box>
            <Text
              css={{
                fontSize: '$9',
                '@bp1': { fontSize: '$8' },
                '@bp2': { fontSize: '$9' },
                fontWeight: 500,
                fontVariantNumeric: 'proportional-nums',
                letterSpacing: '-.031em',
                display: 'flex',
                alignItems: 'center',
                mb: '$2',
              }}
            >
              10k
              <Box as="span" css={{ fontSize: '75%', ml: '0.25em' }}>
                +
              </Box>
            </Text>
            <Text variant="gray" size={{ '@initial': 3, '@bp2': 4 }}>
              GitHub stars
            </Text>
          </Box>
        </Grid>
      </Container>
    </Section>
  );
};

const FancyBackgroundChart = () => {
  return (
    <Flex align="end" css={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}>
      <Box
        css={{
          // This is the left-hand line that connects to the chart
          height: 1,
          background: 'linear-gradient(to right, $$transparent, $$chartLineStartColor)',
          flex: '0 0 auto',
          maxWidth: 1400,
          '@bp2': {
            flexGrow: 1,
          },
          '@media (min-width: 1500px)': {
            flexGrow: 100,
          },
        }}
      />
      <Box
        css={{
          // This is the chart wrapper
          flex: 'none',
          width: '100vw',
          height: 250,
          mr: '-20%',
          '@bp1': {
            height: 150,
          },
          '@bp2': {
            mr: -20,
            width: '55vw',
            height: 'calc(150px + 2vw)',
          },
          '@media (min-width: 1500px)': {
            mr: 0,
            width: 960,
            height: 320,
          },
          svg: {
            overflow: 'visible',
            width: '100%',
            height: '100%',
          },
        }}
      >
        <Chart />
      </Box>
      <Box
        css={{
          // This is free space to the right
          height: 310,
          position: 'relative',
          flex: '0 1 auto',
          flexGrow: 0,

          '@bp1': {
            height: 150,
          },
          '@bp2': {
            height: 'calc(150px + 2vw)',
          },
          '@media (min-width: 1300px)': {
            flexGrow: 0,
          },
          '@media (min-width: 1500px)': {
            height: 320,
            flexGrow: 1,
          },
          '@bp4': {
            flexGrow: 20,
          },
        }}
      >
        <svg
          preserveAspectRatio="none"
          width="320"
          viewBox="0 0 320 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: 'absolute', width: '100%', height: '100%' }}
        >
          <rect y="10" width="320" height="310" fill="url(#gradient-fill-space)" />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="gradient-fill-space"
              x1="0"
              y1="10"
              x2="0"
              y2="100%"
            >
              <stop offset="0" stopColor="var(---chartTopColor)" />
              <stop offset="0.7" stopColor="var(---chartBottomColor)" />
            </linearGradient>
          </defs>
        </svg>
      </Box>
    </Flex>
  );
};

const Chart = () => (
  <svg
    preserveAspectRatio="none"
    viewBox="0 0 960 320"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M178.507 305.111C131.659 323.63 100.966 315.481 66.2333 315.481C31.501 315.481 31 320 0 320H960V10H863.5C841.291 10 824.689 80.111 811.765 79.185C798.842 78.2591 793.995 63.658 785.918 64.3702C772.187 65.581 760.878 119.778 738.262 138.444C729.132 145.98 720.124 136.093 712.415 144C697.068 159.741 700.299 184.741 691.414 192.148C682.529 199.555 677.683 191.222 665.567 195.852C653.451 200.481 652.643 206.037 642.143 211.592C631.642 217.148 630.027 215.296 616.295 225.481C602.564 235.667 600.141 247.704 588.025 247.704C575.909 247.704 573.486 225.481 560.562 225.481C547.639 225.481 537.946 269.926 487.867 269.926C475.751 269.926 475.751 254.905 465.25 249.555C457.981 245.852 452.327 246.778 441.018 246.778C429.71 246.778 426.479 271.778 413.556 271.778C400.632 271.778 398.209 256.037 389.324 256.037C382.055 256.037 380.439 267.148 364.285 277.333C356.662 282.139 337.63 277.333 319.86 277.333C302.09 277.333 305.32 300.481 291.589 300.481C277.858 300.481 272.204 287.518 261.703 287.518C243.933 287.518 231.817 304.988 218.086 306.037C193.854 307.889 193.51 299.181 178.507 305.111Z"
      fill="url(#gradient-fill-chart)"
    />
    <path
      d="M0 319.5C31 319.5 44.5923 315.481 66.2333 315.481C100.966 315.481 131.659 323.63 178.507 305.111C193.51 299.181 193.854 307.889 218.086 306.037C231.817 304.988 243.933 287.518 261.703 287.518C272.204 287.518 277.858 300.481 291.589 300.481C305.32 300.481 302.09 277.333 319.86 277.333C337.63 277.333 356.662 282.139 364.285 277.333C380.439 267.148 382.055 256.037 389.324 256.037C398.209 256.037 400.632 271.778 413.556 271.778C426.48 271.778 429.71 246.778 441.018 246.778C452.327 246.778 457.981 245.852 465.25 249.555C475.751 254.905 475.751 269.926 487.867 269.926C537.946 269.926 547.639 225.481 560.562 225.481C573.486 225.481 575.909 247.704 588.025 247.704C600.141 247.704 602.564 235.667 616.295 225.481C630.027 215.296 631.642 217.148 642.143 211.592C652.643 206.037 653.451 200.481 665.567 195.852C677.683 191.222 682.529 199.555 691.414 192.148C700.299 184.741 697.068 159.741 712.415 144C720.124 136.093 729.132 145.98 738.262 138.444C760.878 119.778 772.187 65.581 785.918 64.3702C793.995 63.658 798.842 78.2591 811.765 79.185C824.689 80.111 841.291 10 863.5 10"
      stroke="url(#gradient-line)"
      vectorEffect="non-scaling-stroke"
      strokeWidth="1"
    />
    <line
      // This line is rather a circle that doesn't scale
      x1="862"
      y1="10"
      x2="862.01"
      y2="10"
      vectorEffect="non-scaling-stroke"
      stroke="var(---chartTipColor)"
      strokeLinecap="round"
      strokeWidth="8"
    />
    <defs>
      <linearGradient
        id="gradient-fill-chart"
        x1="960"
        y1="10"
        x2="960"
        y2="319"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="var(---chartTopColor)" />
        <stop offset="0.7" stopColor="var(---chartBottomColor)" />
      </linearGradient>
      <linearGradient
        id="gradient-line"
        x1="73"
        y1="320"
        x2="900"
        y2="359.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="var(---chartLineStartColor)" />
        <stop offset="1" stopColor="var(---chartLineEndColor)" />
      </linearGradient>
    </defs>
  </svg>
);
