import * as React from 'react';

export function useMatchMedia(query: string, defaultState = false) {
  let [state, setState] = React.useState(defaultState);

  React.useEffect(() => {
    let current = true;
    let mql = window.matchMedia(query);
    mql.addEventListener('change', handleChange);
    setState(mql.matches);

    function handleChange() {
      if (current) {
        setState(mql.matches);
      }
    }

    return () => {
      current = false;
      mql.removeEventListener('change', handleChange);
    };
  }, [query]);

  return state;
}
