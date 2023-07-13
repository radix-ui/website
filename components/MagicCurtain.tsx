import * as React from 'react';
import styles from './MagicCurtain.module.css';
import { createContext } from '@radix-ui/react-context';

type State = 'hidden' | 'hiding' | 'revealing';

interface MagicCurtainItem {
  ref: React.RefObject<HTMLElement>;
  setState: (state: State) => void;
  setAnimationDirection: (direction: string) => void;
}

const [MagicCurtainProvider, useMagicCurtainContext] = createContext<{
  itemsRef: React.RefObject<MagicCurtainItem[]>;
}>('MagicCurtain');

const MagicCurtainRoot = ({ children }: React.PropsWithChildren<{}>) => {
  const itemsRef = React.useRef<MagicCurtainItem[]>([]);
  const ref = React.useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    itemsRef.current[0]?.setState('hiding');
    itemsRef.current[1]?.setState('revealing');

    const handleAnimationEnd = (event: AnimationEvent) => {
      if (
        !(event.target instanceof HTMLElement) ||
        ![styles['magic-curtain'], styles['magic-curtain-reverse']].includes(event.animationName)
      ) {
        return;
      }

      const thisIndex = itemsRef.current.map((item) => item.ref.current).indexOf(event.target);
      const nextIndex = thisIndex + 1 === itemsRef.current.length ? 0 : thisIndex + 1;
      const afterNextIndex = nextIndex + 1 === itemsRef.current.length ? 0 : nextIndex + 1;
      itemsRef.current[thisIndex].setState('hidden');
      itemsRef.current[nextIndex].setState('hiding');
      itemsRef.current[afterNextIndex].setState('revealing');
    };

    itemsRef.current.forEach((item, i) => {
      if (i % 2) {
        item.setAnimationDirection('reverse');
      }

      item.ref.current.addEventListener('animationend', handleAnimationEnd);
    });

    return () => {
      itemsRef.current.forEach((item) => {
        item.ref.current?.removeEventListener('animationend', handleAnimationEnd);
      });
    };
  }, []);

  return (
    <MagicCurtainProvider itemsRef={itemsRef}>
      <div ref={ref} className={styles.MagicCurtainRoot}>
        {children}
      </div>
    </MagicCurtainProvider>
  );
};

const MagicCurtainItem = ({ children, ...props }: React.ComponentPropsWithoutRef<'div'>) => {
  const context = useMagicCurtainContext('MagicCurtain');
  const ref = React.useRef<HTMLDivElement>(null);
  const [state, setState] = React.useState<State>('hidden');
  const [animationDirection, setAnimationDirection] = React.useState('normal');

  useIsomorphicLayoutEffect(() => {
    const item = { ref, setState, setAnimationDirection };
    context.itemsRef.current.push(item);

    return () => {
      const index = context.itemsRef.current.indexOf(item);

      if (index > -1) {
        context.itemsRef.current.splice(index, 1);
      }
    };
  }, []);

  return (
    <div
      data-animation-direction={animationDirection}
      data-state={state}
      ref={ref}
      className={styles.MagicCurtainItem}
      {...props}
    >
      {state === 'hidden' ? null : children}
    </div>
  );
};

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

export const MagicCurtain = {
  Root: MagicCurtainRoot,
  Item: MagicCurtainItem,
};
