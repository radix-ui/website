const DEFAULT_CSS_LIB = 'css';
const SUPPORTED_CSS_LIBS = [DEFAULT_CSS_LIB, 'stitches', 'tailwind'] as const;

type CssLib = typeof SUPPORTED_CSS_LIBS[number];

const CSS_LIB_NAMES: Record<CssLib, string> = {
  css: 'CSS',
  stitches: 'Stitches',
  tailwind: 'Tailwind CSS',
};

export { DEFAULT_CSS_LIB, SUPPORTED_CSS_LIBS, CSS_LIB_NAMES };
export type { CssLib };
