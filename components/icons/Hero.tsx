import React from 'react';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import { Box, Heading, Text } from '@radix-ui/themes';

import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <Box className={styles.HeroContainer}>
      <Box className={styles.HeroHeader}>
        <Heading
          as="h1"
          style={{
            fontSize: '1.4em',
            fontWeight: 500,
            lineHeight: '0.835',
            letterSpacing: '-0.08em',
          }}
        >
          <Box>Radix</Box>
          <Box className={styles.HeroTitleIcons}>Icons</Box>
        </Heading>
      </Box>

      <Box className={styles.HeroBoxLines}>
        <Line color="var(--pink-5)" angle="0deg" offset="0, 0.467em" />
        <Line color="var(--pink-5)" angle="0deg" offset="0, 0.533em" />

        <Line color="var(--pink-5)" angle="45deg" offset="-0.288em, 0" />
        <Line color="var(--pink-5)" angle="45deg" offset="-0.288em, 0.090em" />

        <Line color="var(--pink-5)" angle="-45deg" offset="0.622em, 0" />
        <Line color="var(--pink-5)" angle="-45deg" offset="0.622em, 0.090em" />

        <Line color="var(--pink-5)" angle="45deg" offset="0.242em, 0" />
        <Line color="var(--pink-5)" angle="-45deg" offset="0.242em, 1em" />

        <Line color="var(--mint-5)" angle="0deg" offset="0, 0" />
        <Line color="var(--mint-5)" angle="0deg" offset="0, 1em" />

        <Line color="var(--mint-5)" angle="90deg" offset="0, 0" />
        <Line color="var(--mint-5)" angle="90deg" offset="1em, 0" />

        <ArrowLeftIcon style={{ position: 'relative', width: '1em', height: '1em' }} />
      </Box>

      <Text as="p" size={{ initial: '6', sm: '7' }} className={styles.HeroParagraph}>
        A crisp set of 15×15 icons designed by the WorkOS team.
      </Text>
    </Box>
  );
};

type LineProps = {
  angle?: string;
  offset?: string;
  color?: string;
};

const Line = ({ angle = '0deg', offset = '0px, 0px', color }: LineProps) => {
  return (
    <Box
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: 'calc(200vw + 200vh)',
        height: '1px',
        transform: `translate(${offset}) rotate(${angle}) translate(-50%, -50%)`,
        transformOrigin: 'top left',
        backgroundColor: color,
      }}
    />
  );
};
