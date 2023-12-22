import * as RadixColors from '@radix-ui/colors';
import Color from 'colorjs.io';

type ArrayOf12<T> = [T, T, T, T, T, T, T, T, T, T, T, T];

// prettier-ignore
const grayScaleNames = ['gray', 'mauve', 'slate', 'sage', 'olive', 'sand'] as const;

// prettier-ignore
const scaleNames = [...grayScaleNames, 'tomato', 'red', 'ruby', 'crimson', 'pink',
'plum', 'purple', 'violet', 'iris', 'indigo', 'blue', 'cyan', 'teal', 'jade', 'green',
'grass', 'brown', 'orange', 'sky', 'mint', 'lime', 'yellow', 'amber'] as const;

const lightColors = Object.fromEntries(
  scaleNames.map((scaleName) => [
    scaleName,
    Object.values(RadixColors[`${scaleName}P3`]).map((str) => new Color(str).to('oklch')),
  ])
) as Record<typeof scaleNames[number], ArrayOf12<Color>>;

const darkColors = Object.fromEntries(
  scaleNames.map((scaleName) => [
    scaleName,
    Object.values(RadixColors[`${scaleName}DarkP3`]).map((str) => new Color(str).to('oklch')),
  ])
) as Record<typeof scaleNames[number], ArrayOf12<Color>>;

const lightGrayColors = Object.fromEntries(
  grayScaleNames.map((scaleName) => [
    scaleName,
    Object.values(RadixColors[`${scaleName}P3`]).map((str) => new Color(str).to('oklch')),
  ])
) as Record<typeof grayScaleNames[number], ArrayOf12<Color>>;

const darkGrayColors = Object.fromEntries(
  grayScaleNames.map((scaleName) => [
    scaleName,
    Object.values(RadixColors[`${scaleName}DarkP3`]).map((str) => new Color(str).to('oklch')),
  ])
) as Record<typeof grayScaleNames[number], ArrayOf12<Color>>;

export const generateRadixColors = ({
  appearance,
  ...args
}: {
  appearance: 'light' | 'dark';
  pageBackground: string;
  accentColorString: string;
  grayColorString: string;
}) => {
  const allScales = appearance === 'light' ? lightColors : darkColors;
  const grayScales = appearance === 'light' ? lightGrayColors : darkGrayColors;

  const pageBackgroundColor = new Color(args.pageBackground).to('oklch');
  const accentBaseColor = new Color(args.accentColorString).to('oklch');

  let accentScaleColors = getScaleFromColor(accentBaseColor, allScales);
  let grayBaseColor = new Color(args.grayColorString).to('oklch');

  const grayScaleColors =
    appearance === 'light'
      ? getScaleFromColor(grayBaseColor, grayScales)
      : getDarkModeGrayScale(pageBackgroundColor);

  const backdropColor =
    appearance === 'light' ? new Color('#FFFFFF').to('oklch') : grayScaleColors[0];

  const backdropHex = backdropColor.to('srgb').toString({ format: 'hex' });

  // Make sure we use the tint from the gray scale for when base is pure white or black
  const accentBaseHex = accentBaseColor.to('srgb').toString({ format: 'hex' });
  if (accentBaseHex === '#000' || accentBaseHex === '#fff') {
    accentScaleColors = grayScaleColors.map((color) => color.clone()) as ArrayOf12<Color>;
  }

  const [accent9Color, accent9ContrastColor] = getStep9Colors(
    accentScaleColors,
    accentBaseColor,
    pageBackgroundColor
  );

  accentScaleColors[8] = accent9Color;
  accentScaleColors[9] = getButtonHoverColor(accent9Color, [accentScaleColors]);

  // TODO FIND A BETTER WAY TO DO STEP 11 AND 12
  if (!isNaN(accent9Color.coords[2])) {
    accentScaleColors[10].coords[2] = accent9Color.coords[2];
  }

  const accentScaleHex = accentScaleColors.map((color) =>
    color.to('srgb').toString({ format: 'hex' })
  ) as ArrayOf12<string>;

  const accentScaleAlphaHex = accentScaleHex.map((color) =>
    getAlphaColorSrgb(color, backdropHex)
  ) as ArrayOf12<string>;

  const accentScaleAlphaWideGamutHex = accentScaleHex.map((color) =>
    getAlphaColorP3(color, backdropHex)
  ) as ArrayOf12<string>;

  const accent9ContrastColorHex = accent9ContrastColor.to('srgb').toString({ format: 'hex' });

  const grayScaleHex = grayScaleColors.map((color) =>
    color.to('srgb').toString({ format: 'hex' })
  ) as ArrayOf12<string>;

  const grayScaleAlphaHex = grayScaleHex.map((color) =>
    getAlphaColorSrgb(color, backdropHex)
  ) as ArrayOf12<string>;

  const grayScaleAlphaWideGamutHex = grayScaleHex.map((color) =>
    getAlphaColorP3(color, backdropHex)
  ) as ArrayOf12<string>;

  return {
    accentScale: accentScaleHex,
    accentScaleAlpha: accentScaleAlphaHex,
    accentScaleAlphaWideGamut: accentScaleAlphaWideGamutHex,
    accent9Contrast: accent9ContrastColorHex,

    grayScale: grayScaleHex,
    grayScaleAlpha: grayScaleAlphaHex,
    grayScaleAlphaWideGamut: grayScaleAlphaWideGamutHex,

    graySurface: appearance === 'light' ? '#ffffffcc' : 'rgba(0, 0, 0, 0.05)',

    // TODO rework this
    grayTranslucent: grayScaleHex[1],
    // TODO add accent translucent
  };
};

function getStep9Colors(
  scale: ArrayOf12<Color>,
  accentBaseColor: Color,
  pageBackgroundColor: Color
): [Color, Color] {
  const distance = accentBaseColor.deltaEOK(pageBackgroundColor) * 100;

  // If the accent base color is close to the page background color, it's likely
  // white on white or black on black, so we want to return something that makes sense instead
  if (distance < 20) {
    return [scale[8], getTextColor(scale[8])];
  }

  return [accentBaseColor, getTextColor(accentBaseColor)];
}

function getButtonHoverColor(source: Color, scales: ArrayOf12<Color>[]) {
  const [L, C, H] = source.coords;
  const newL = L > 0.4 ? L - 0.03 / (L + 0.1) : L + 0.03 / (L + 0.1);
  const newC = L > 0.4 && !isNaN(H) ? C * 0.93 + 0 : C;
  const buttonHoverColor = new Color('oklch', [newL, newC, H]);

  // Find closest in-scale color to donate the chroma and hue.
  // Especially useful when the source color is pure white or black,
  // but the gray scale is tinted.
  let closestColor = buttonHoverColor;
  let minDistance = Infinity;

  scales.forEach((scale) => {
    for (const color of scale) {
      const distance = buttonHoverColor.deltaEOK(color);
      if (distance < minDistance) {
        minDistance = distance;
        closestColor = color;
      }
    }
  });

  buttonHoverColor.coords[1] = closestColor.coords[1];
  buttonHoverColor.coords[2] = closestColor.coords[2];
  return buttonHoverColor;
}

// TODO #E68EB9 step 11 and 12 too saturated
// TODO #001F85 step 11 and 12 too saturated
function getScaleFromColor(source: Color, scales: Record<string, ArrayOf12<Color>>) {
  let baseScale: ArrayOf12<Color> | undefined;
  let closestColor = source;
  let minDistance = Infinity;

  Object.values(scales).forEach((scale) => {
    for (const color of scale) {
      const distance = source.deltaEOK(color);
      if (distance < minDistance) {
        minDistance = distance;
        closestColor = color;
        baseScale = scale;
      }
    }
  });

  if (!baseScale) {
    throw Error('Could not find base scale');
  }

  const ratioC = Math.min(4, source.coords[1] / closestColor.coords[1]);
  const scale = baseScale.map((color) => {
    const scaleColor = color.clone();
    scaleColor.coords[1] = color.coords[1] * ratioC;
    scaleColor.coords[2] = source.coords[2];
    return scaleColor.toGamut({ space: 'p3' });
  }) as ArrayOf12<Color>;

  console.log({
    hsl: scale.map((color) =>
      color
        .to('hsl')
        .coords.map((c) => c.toFixed(5))
        .join(' ')
    ),
    oklch: scale.map((color) => color.coords.map((c) => c.toFixed(5)).join(' ')),
  });

  return scale;
}

function getDarkModeGrayScale(source: Color) {
  const isPureGray = isNaN(source.coords[2]) || !!source.coords[1];
  const scales = darkGrayColors;
  const baseScale = isPureGray ? scales.gray : scales.slate;
  const ratioL = source.coords[0] / baseScale[0].coords[0];
  const ratioC = source.coords[1] / baseScale[0].coords[1];

  const scale = baseScale.map((color, i) => {
    const scaleColor = color.clone();
    const colorL = color.coords[0];
    const colorC = color.coords[1];

    // Compute target L based on the lightness ratio of the source color to the base scale,
    // while diminishing the strength of the lightness ratio as we get towards the end of the scale.
    const targetL = colorL * (i / 11) + colorL * ratioL * ((11 - i) / 11);

    // Cap min and max lightness, but allow pure black as the first step
    const step2L = baseScale[1].coords[0];
    const maxL = colorL * 2;
    const minL = i > 0 ? Math.max(step2L, colorL * 0.75) : 0;

    // Compute target C based on the chroma ratio of the source color to the base scale,
    // while diminishing the strength of the chroma ratio as we get towards the end of the scale.
    const targetC = colorC * (i / 11) + colorC * ratioC * ((11 - i) / 11);

    scaleColor.coords[0] = Math.max(Math.min(maxL, targetL), minL);
    scaleColor.coords[1] = Math.min(0.028, targetC);
    scaleColor.coords[2] = source.coords[2];
    return scaleColor;
  }) as ArrayOf12<Color>;

  return scale;
}

function getTextColor(background: Color) {
  const white = new Color('oklch', [1, 0, 0]);

  if (Math.abs(white.contrastAPCA(background)) < 35) {
    const [L, C, H] = background.coords;
    return new Color('oklch', [0.25, Math.max(0.08 * C, 0.04), H]);
  }

  return white;
}

// target = background * (1 - alpha) + foreground * alpha
// alpha = (target - background) / (foreground - background)
// Expects 0-1 numbers for the RGB channels
function getAlphaColor(
  targetRgb: number[],
  backgroundRgb: number[],
  rgbPrecision: number,
  alphaPrecision: number,
  targetAlpha?: number
) {
  const [tr, tg, tb] = targetRgb.map((c) => Math.round(c * rgbPrecision));
  const [br, bg, bb] = backgroundRgb.map((c) => Math.round(c * rgbPrecision));

  if (
    tr === undefined ||
    tg === undefined ||
    tb === undefined ||
    br === undefined ||
    bg === undefined ||
    bb === undefined
  ) {
    throw Error('Color is undefined');
  }

  // Is the background color lighter, RGB-wise, than target color?
  // Decide whether we want to add as little color or as much color as possible,
  // darkening or lightening the background respectively.
  // If at least one of the bits of the target RGB value
  // is lighter than the background, we want to lighten it.
  let desiredRgb = 0;
  if (tr > br) {
    desiredRgb = rgbPrecision;
  } else if (tg > bg) {
    desiredRgb = rgbPrecision;
  } else if (tb > bb) {
    desiredRgb = rgbPrecision;
  }

  const alphaR = (tr - br) / (desiredRgb - br);
  const alphaG = (tg - bg) / (desiredRgb - bg);
  const alphaB = (tb - bb) / (desiredRgb - bb);

  const isPureGray = [alphaR, alphaG, alphaB].every((alpha) => alpha === alphaR);

  // No need for precision gymnastics with pure grays, and we can get cleaner output
  if (!targetAlpha && isPureGray) {
    // Convert back to 0-1 values
    const V = desiredRgb / rgbPrecision;
    return [V, V, V, alphaR] as const;
  }

  const clampRgb = (n: number) => (isNaN(n) ? 0 : Math.min(rgbPrecision, Math.max(0, n)));
  const clampA = (n: number) => (isNaN(n) ? 0 : Math.min(alphaPrecision, Math.max(0, n)));
  const maxAlpha = targetAlpha ?? Math.max(alphaR, alphaG, alphaB);

  const A = clampA(Math.ceil(maxAlpha * alphaPrecision)) / alphaPrecision;
  let R = clampRgb(((br * (1 - A) - tr) / A) * -1);
  let G = clampRgb(((bg * (1 - A) - tg) / A) * -1);
  let B = clampRgb(((bb * (1 - A) - tb) / A) * -1);

  R = Math.ceil(R);
  G = Math.ceil(G);
  B = Math.ceil(B);

  const blendedR = blendAlpha(R, A, br);
  const blendedG = blendAlpha(G, A, bg);
  const blendedB = blendAlpha(B, A, bb);

  // Correct for rounding errors in light mode
  if (desiredRgb === 0) {
    if (tr <= br && tr !== blendedR) {
      R = tr > blendedR ? R + 1 : R - 1;
    }

    if (tg <= bg && tg !== blendedG) {
      G = tg > blendedG ? G + 1 : G - 1;
    }

    if (tb <= bb && tb !== blendedB) {
      B = tb > blendedB ? B + 1 : B - 1;
    }
  }

  // Correct for rounding errors in dark mode
  if (desiredRgb === rgbPrecision) {
    if (tr >= br && tr !== blendedR) {
      R = tr > blendedR ? R + 1 : R - 1;
    }

    if (tg >= bg && tg !== blendedG) {
      G = tg > blendedG ? G + 1 : G - 1;
    }

    if (tb >= bb && tb !== blendedB) {
      B = tb > blendedB ? B + 1 : B - 1;
    }
  }

  // Convert back to 0-1 values
  R = R / rgbPrecision;
  G = G / rgbPrecision;
  B = B / rgbPrecision;

  return [R, G, B, A] as const;
}

// Important – I empirically discovered that this rounding is how the browser actually overlays
// transparent RGB bits over each other. It does NOT round the whole result altogether.
function blendAlpha(foreground: number, alpha: number, background: number, round = true) {
  if (round) {
    return Math.round(background * (1 - alpha)) + Math.round(foreground * alpha);
  }

  return background * (1 - alpha) + foreground * alpha;
}

function getAlphaColorSrgb(targetColor: string, backgroundColor: string, targetAlpha?: number) {
  const [r, g, b, a] = getAlphaColor(
    new Color(targetColor).to('srgb').coords,
    new Color(backgroundColor).to('srgb').coords,
    255,
    255,
    targetAlpha
  );

  return formatHex(new Color('srgb', [r, g, b], a).toString({ format: 'hex' }));
}

function getAlphaColorP3(targetColor: string, backgroundColor: string, targetAlpha?: number) {
  const [r, g, b, a] = getAlphaColor(
    new Color(targetColor).to('p3').coords,
    new Color(backgroundColor).to('p3').coords,
    // Not sure why, but the resulting P3 alpha colors are blended in the browser most precisely when
    // rounded to 255 integers too. Is the browser using 0-255 rather than 0-1 under the hood for P3 too?
    255,
    1000,
    targetAlpha
  );

  return (
    new Color('p3', [r, g, b], a)
      .toString({ precision: 4 })
      // Important: in non-browser environments colorjs.io outputs a different format for some reason
      .replace('color(p3 ', 'color(display-p3 ')
  );
}

// Format shortform hex to longform
function formatHex(str: string) {
  if (!str.startsWith('#')) {
    return str;
  }

  if (str.length === 4) {
    const hash = str.charAt(0);
    const r = str.charAt(1);
    const g = str.charAt(2);
    const b = str.charAt(3);
    return hash + r + r + g + g + b + b;
  }

  if (str.length === 5) {
    const hash = str.charAt(0);
    const r = str.charAt(1);
    const g = str.charAt(2);
    const b = str.charAt(3);
    const a = str.charAt(4);
    return hash + r + r + g + g + b + b + a + a;
  }

  return str;
}
