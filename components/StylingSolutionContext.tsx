import * as React from 'react';
import { useLayoutEffect } from '@radix-ui/react-use-layout-effect';
import { DEFAULT_STYLING_SOLUTION, SUPPORTED_STYLING_SOLUTIONS } from '@lib/constants';
import type { StylingSolution } from '@lib/constants';

const LOCAL_STORAGE_KEY = '@radix-ui/styling-solution';

type StylingSolutionContextValue = {
  preferredStylingSolution: StylingSolution;
  setPreferredStylingSolution: (stylingSolution: StylingSolution) => void;
};

const StylingSolutionContext = React.createContext<StylingSolutionContextValue | null>(null);

const StylingSolutionProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [preferredStylingSolution, setPreferredStylingSolution] = React.useState<StylingSolution>(
    DEFAULT_STYLING_SOLUTION
  );

  const savePreferredStylingSolution = React.useCallback((stylingSolution: unknown) => {
    if (isValidStylingSolution(stylingSolution)) {
      setPreferredStylingSolution(stylingSolution);
      setLocalStorageStylingSolution(stylingSolution);
    } else {
      setPreferredStylingSolution(DEFAULT_STYLING_SOLUTION);
      setLocalStorageStylingSolution(DEFAULT_STYLING_SOLUTION);
    }
  }, []);

  useLayoutEffect(() => {
    const localStorageStylingSolution = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    savePreferredStylingSolution(localStorageStylingSolution);
  }, [savePreferredStylingSolution]);

  const stylingSolutionContextValue = React.useMemo(
    () => ({ preferredStylingSolution, setPreferredStylingSolution: savePreferredStylingSolution }),
    [preferredStylingSolution, savePreferredStylingSolution]
  );

  return (
    <StylingSolutionContext.Provider value={stylingSolutionContextValue}>
      {children}
    </StylingSolutionContext.Provider>
  );
};

const useStylingSolution = () => {
  const stylingSolutionContext = React.useContext(StylingSolutionContext);
  if (!stylingSolutionContext) {
    throw new TypeError(
      '`useStylingSolution` must be called from within a `StylingSolutionProvider`.'
    );
  }
  const { preferredStylingSolution, setPreferredStylingSolution } = stylingSolutionContext;
  return [preferredStylingSolution, setPreferredStylingSolution] as const;
};

function setLocalStorageStylingSolution(stylingSolution: StylingSolution) {
  window.localStorage.setItem(LOCAL_STORAGE_KEY, stylingSolution);
}

const isValidStylingSolution = (stylingSolution: unknown): stylingSolution is StylingSolution =>
  SUPPORTED_STYLING_SOLUTIONS.includes(stylingSolution as StylingSolution);

export { StylingSolutionProvider, useStylingSolution, isValidStylingSolution };

export type { StylingSolution };
