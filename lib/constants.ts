const DEFAULT_STYLING_SOLUTION = 'css';
const SUPPORTED_STYLING_SOLUTIONS = [DEFAULT_STYLING_SOLUTION, 'stitches'] as const;

type StylingSolution = typeof SUPPORTED_STYLING_SOLUTIONS[number];

const STYLING_SOLUTION_NAMES: Record<StylingSolution, string> = {
  css: 'CSS',
  stitches: 'Stitches',
};

export { DEFAULT_STYLING_SOLUTION, SUPPORTED_STYLING_SOLUTIONS, STYLING_SOLUTION_NAMES };
export type { StylingSolution };
