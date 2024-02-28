import bezier from 'bezier-easing';
import { ColorsHeader } from '@components/ColorsHeader';
import { ColorsMobileMenu } from '@components/ColorsMobileMenu';
import { MobileMenuProvider } from '@components/MobileMenu';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import {
  Section,
  Container,
  Heading,
  Grid,
  Text,
  Flex,
  Box,
  Theme,
  Button,
} from '@radix-ui/themes';
import Head from 'next/head';
import Color from 'colorjs.io';
import * as RadixColors from '@radix-ui/colors';
import { useTheme } from 'next-themes';
import React from 'react';
import { Preview } from './create';

const arrayOf12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const baseGrays = {
  light: RadixColors.gray,
  dark: RadixColors.grayDark,
};

const baseGrayCurve = {
  light: [0.13, -0.035, 0.93, 0.675] as const,
  dark: [0.37, 0.36, 0.81, 0.44] as const,
} as const;

const baseBackground = {
  light: '#FFFFFF',
  dark: RadixColors.grayDark.gray1,
};

const baseGrayStep1 = {
  light: RadixColors.gray.gray1,
  dark: RadixColors.grayDark.gray1,
};

const baseGrayStep8 = {
  light: RadixColors.gray.gray8,
  dark: RadixColors.grayDark.gray8,
};

const baseGrayStep9 = {
  light: RadixColors.gray.gray9,
  dark: RadixColors.grayDark.gray9,
};

const baseGrayStep10 = {
  light: RadixColors.gray.gray10,
  dark: RadixColors.grayDark.gray10,
};

const baseGrayStep11 = {
  light: RadixColors.gray.gray11,
  dark: RadixColors.grayDark.gray11,
};

const baseGrayStep12 = {
  light: RadixColors.gray.gray12,
  dark: RadixColors.grayDark.gray12,
};

export default function Page() {
  const { resolvedTheme } = useTheme();
  const theme = resolvedTheme === 'dark' ? 'dark' : 'light';

  const [activeGrays, setActiveGrays] = React.useState<GeneratedColor[]>(null);

  // Don't render on the server because of the potential runtime theme flash
  const [rendered, setRendered] = React.useState(false);
  React.useEffect(() => setRendered(true), []);
  if (!rendered) return null;

  /* * * * * * * * * * * * * * * * * * * */
  /*                                     */
  /*     Ideal vs. generated colors      */
  /*                                     */
  /* * * * * * * * * * * * * * * * * * * */

  const graysTest1 = generateColors({
    steps: 8,
    start: baseGrayStep1[theme],
    end: baseGrayStep8[theme],
    curve: baseGrayCurve[theme],
  });

  graysTest1.push({ value: baseGrayStep9[theme], valueP3: toP3(baseGrayStep9[theme]) });
  graysTest1.push({ value: baseGrayStep10[theme], valueP3: toP3(baseGrayStep10[theme]) });
  graysTest1.push({ value: baseGrayStep11[theme], valueP3: toP3(baseGrayStep11[theme]) });
  graysTest1.push({ value: baseGrayStep12[theme], valueP3: toP3(baseGrayStep12[theme]) });

  /* * * * * * * * * * * * * * * * * * * */
  /*                                     */
  /*           Pure background           */
  /*                                     */
  /* * * * * * * * * * * * * * * * * * * */

  const grayTest2Step1 = {
    light: getLightModeGray1('#FFFFFF'),
    dark: '#000000',
  };

  const graysTest2 = generateColors({
    steps: 8,
    start: grayTest2Step1[theme],
    end: baseGrayStep8[theme],
    curve: baseGrayCurve[theme],
  });

  graysTest2.push({ value: baseGrayStep9[theme], valueP3: toP3(baseGrayStep9[theme]) });
  graysTest2.push({ value: baseGrayStep10[theme], valueP3: toP3(baseGrayStep10[theme]) });
  graysTest2.push({ value: baseGrayStep11[theme], valueP3: toP3(baseGrayStep11[theme]) });
  graysTest2.push({ value: baseGrayStep12[theme], valueP3: toP3(baseGrayStep12[theme]) });

  return (
    <MobileMenuProvider>
      <ColorsHeader ghost />
      <ColorsMobileMenu />

      <TitleAndMetaTags
        title="Create your Radix palette – Radix Colors"
        description="An open-source color system for designing beautiful, accessible websites and apps."
        image="colors.png"
      />

      <Head>
        <style>
          {`
            .radix-themes {
              ${activeGrays?.map((color, i) => `--gray-${i + 1}: ${color.value};`).join('\n')}
            }
          `}
        </style>
      </Head>

      <Section px={{ initial: '5', xs: '6', sm: '7', md: '9' }} size={{ initial: '2', md: '3' }}>
        <Container position="relative">
          <Heading as="h1" align="center" size="8" mb="8">
            Internal color tools
          </Heading>

          <Text as="div" size="1" color="gray">
            <Grid columns="13" rows="40px">
              <span />
              {arrayOf12.map((i) => (
                <Flex key={i} asChild align="center" justify="center">
                  <Text>{i}</Text>
                </Flex>
              ))}
            </Grid>

            <Grid columns="13" rows="40px">
              <Flex asChild align="center">
                <Text>Radix Colors</Text>
              </Flex>
              {arrayOf12.map((i) => (
                <Box key={i} style={{ backgroundColor: baseGrays[theme][`gray${i}`] }} />
              ))}
            </Grid>

            <Grid columns="13" rows="40px">
              <Flex asChild align="center">
                <Box>
                  <Button
                    variant="ghost"
                    size="1"
                    onClick={() =>
                      setActiveGrays((activeGrays) =>
                        scalesAreEqual(activeGrays, graysTest1) ? null : graysTest1
                      )
                    }
                  >
                    Test 1
                  </Button>
                </Box>
              </Flex>
              {graysTest1.map((color, i) => (
                <Box key={i} style={{ backgroundColor: color.value }} />
              ))}
            </Grid>

            <Grid columns="13" rows="40px">
              <Flex asChild align="center">
                <Box>
                  <Button
                    variant="ghost"
                    size="1"
                    onClick={() =>
                      setActiveGrays((activeGrays) =>
                        scalesAreEqual(activeGrays, graysTest2) ? null : graysTest2
                      )
                    }
                  >
                    Test 2
                  </Button>
                </Box>
              </Flex>
              {graysTest2.map((color, i) => (
                <Box key={i} style={{ backgroundColor: color.value }} />
              ))}
            </Grid>
          </Text>

          <Theme
            accentColor="gray"
            grayColor="gray"
            hasBackground={false}
            className="radix-themes-default-fonts"
            panelBackground="solid"
          >
            <Preview my="9" />
          </Theme>
        </Container>
      </Section>
    </MobileMenuProvider>
  );
}

function scalesAreEqual(scale1: GeneratedColor[], scale2: GeneratedColor[]) {
  if (scale1 === scale2) {
    return true;
  }

  if (!scale1 || !scale2) {
    return false;
  }

  return scale1.every((color, i) => color.value === scale2[i].value);
}

function getLightModeGray1(backgroundColor: string) {
  const color = new Color(backgroundColor).to('oklch');
  let [L, C, H] = color.lch;
  // L is ~100 for pure white, but >1 for off-whites
  L = Math.min(L, 1);
  L = L - 0.01;
  return toHex(new Color('oklch', [L, C, H]));
}

type Curve = readonly [number, number, number, number];

type GenerateColorsArgs<N extends number> = {
  steps: N;
  start: string;
  end: string;
  curve: Curve;
  accelerationL?: number;
  accelerationC?: number;
  accelerationH?: number;
};

type GeneratedColor = {
  value: string;
  valueP3: string;
};

type TupleOf<N extends number, T = any, R extends any[] = []> = R['length'] extends N
  ? R
  : TupleOf<N, T, [T, ...R]>;

type ArrayOf<N extends number, T = any> = TupleOf<N, T>;

function generateColors<N extends number>({
  steps,
  start,
  end,
  curve,
  accelerationL = 1,
  accelerationC = 1,
  accelerationH = 1,
}: GenerateColorsArgs<N>): ArrayOf<N, GeneratedColor> {
  function generateNumberOfSteps(curve: Curve) {
    const array: number[] = [];
    for (const key in Array.from(Array(steps).keys())) {
      const step = parseInt(key);
      const easingFunction = bezier(...curve);
      const value = easingFunction(step / (steps - 1));
      array.push(value);
    }
    array.reverse();
    return array;
  }

  const [x1, y1, x2, y2] = curve;
  const curveH: Curve = [x1, y1 * accelerationH, x2, y2];
  const curveC: Curve = [x1, y1 * accelerationC, x2, y2];
  const curveL: Curve = [1 - x2, (1 - y2) * accelerationL, 1 - x1, 1 - y1];

  const startColor = new Color(start);
  const endColor = new Color(end);

  const [lumStart, chrStart, lchHueStart] = startColor.lch;
  const [lumEnd, chrEnd, lchHueEnd] = endColor.lch;

  let arrayL = generateNumberOfSteps(curveL);
  let arrayC = generateNumberOfSteps(curveC);
  let arrayH = generateNumberOfSteps(curveH);
  let distributedL: number[] = [];
  let distributedC: number[] = [];
  let distributedH: number[] = [];

  for (const index in arrayL) {
    const step = arrayL[index];
    distributedL.push(distribute(step, [0, 1], [lumEnd, lumStart]));
  }

  for (const index in arrayC) {
    const step = arrayC[index];
    const chrStep = distribute(step, [0, 1], [chrStart, chrEnd]);
    distributedC.push(chrStep);
  }

  for (const index in arrayH) {
    const step = arrayH[index];
    distributedH.push(distributeHue(step, [0, 1], [lchHueStart, lchHueEnd]));
  }

  distributedC.reverse();
  distributedH.reverse();

  arrayL = distributedL;
  arrayC = distributedC;
  arrayH = distributedH;

  const colorMap: GeneratedColor[] = [];

  for (const key in arrayL) {
    const index = parseInt(key);
    const color = new Color('lch', [arrayL[index], arrayC[index], arrayH[index]]);
    colorMap.push({
      value: toHex(color),
      valueP3: toP3(color),
    });
  }

  return colorMap as ArrayOf<N, GeneratedColor>;
}

function distribute(value: number, rangeA: number[], rangeB: number[]) {
  const [fromLow, fromHigh] = Array.from(rangeA);
  const [toLow, toHigh] = Array.from(rangeB);

  const result = toLow + ((value - fromLow) / (fromHigh - fromLow)) * (toHigh - toLow);

  if (toLow < toHigh) {
    if (result < toLow) {
      return toLow;
    }
    if (result > toHigh) {
      return toHigh;
    }
  } else {
    if (result > toLow) {
      return toLow;
    }
    if (result < toHigh) {
      return toHigh;
    }
  }

  return result;
}

function distributeHue(value: number, rangeA: number[], rangeB: number[]) {
  let [toLow, toHigh] = Array.from(rangeB);

  const hueDistanceA = toLow - toHigh;
  const hueDistanceB = 360 - Math.max(toLow, toHigh) + Math.min(toLow, toHigh);
  const shouldRotateDirection = Math.abs(hueDistanceA) > Math.abs(hueDistanceB);

  if (shouldRotateDirection) {
    toLow = toLow > toHigh ? toLow : toHigh + hueDistanceB;
    toHigh = toLow > toHigh ? toLow + hueDistanceB : toHigh;
  }

  return distribute(value, rangeA, [toLow, toHigh]);
}

function toHex(color: Color | string) {
  if (color instanceof Color) {
    return formatHex(color.to('srgb').toString({ format: 'hex' }));
  }

  return formatHex(new Color(color).to('srgb').toString({ format: 'hex' }));
}

function toP3(color: Color | string) {
  if (color instanceof Color) {
    return color.to('p3').toString({ precision: 4 });
  }

  return new Color(color).to('p3').toString({ precision: 4 });
}

// Formats shortform hex to longform
function formatHex(str: string) {
  if (!str.startsWith('#')) {
    return str;
  }

  if (str.length === 4) {
    const [hash, r, g, b] = str;
    return hash + r + r + g + g + b + b;
  }

  if (str.length === 5) {
    const [hash, r, g, b, a] = str;
    return hash + r + r + g + g + b + b + a + a;
  }

  return str;
}
