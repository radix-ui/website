import * as React from 'react';
import styles from './MagicCurtain.module.css';
import { createContext } from '@radix-ui/react-context';

type Visibility = 'hidden' | 'visible-in-front' | 'visible-behind';

interface MagicCurtainItem {
  ref: React.RefObject<HTMLElement>;
  setVisibility: (visibility: Visibility) => void;
  setAnimationDirection: (direction: string) => void;
  setAnimationPlayState: (playState: string) => void;
}

const [MagicCurtainProvider, useMagicCurtainContext] = createContext<{
  itemsRef: React.RefObject<MagicCurtainItem[]>;
}>('MagicCurtain');

const MagicCurtainRoot = ({ children }: React.PropsWithChildren<{}>) => {
  const itemsRef = React.useRef<MagicCurtainItem[]>([]);
  const ref = React.useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
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
      itemsRef.current[thisIndex]?.setVisibility('hidden');
      itemsRef.current[nextIndex]?.setVisibility('visible-in-front');
      itemsRef.current[afterNextIndex]?.setVisibility('visible-behind');
    };

    itemsRef.current[0]?.setVisibility('visible-in-front');
    itemsRef.current[1]?.setVisibility('visible-behind');

    itemsRef.current.forEach((item, i) => {
      if (i % 2) {
        item.setAnimationDirection('reverse');
      }

      item.ref.current?.addEventListener('animationend', handleAnimationEnd);
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

const MagicCurtainItem = ({
  defaultVisibility = 'hidden',
  children,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & { defaultVisibility?: Visibility }) => {
  const context = useMagicCurtainContext('MagicCurtain');
  const ref = React.useRef<HTMLDivElement>(null);
  const [visibility, setVisibility] = React.useState<Visibility>(defaultVisibility);
  const [animationDirection, setAnimationDirection] = React.useState('normal');
  const [animationPlayState, setAnimationPlayState] = React.useState('running');
  const delayRef = React.useRef<ReturnType<typeof setTimeout>>();

  React.useEffect(() => {
    const handlePointerDown = () => {
      clearTimeout(delayRef.current);
      setAnimationPlayState('paused');
      addEventListener('pointerup', handlePointerUp, { once: true });

      // Release the pause state in case the pointer moves out of the document boundaries without pointerup event
      clearTimeout(delayRef.current);
      delayRef.current = setTimeout(() => {
        setAnimationPlayState('running');
      }, 3000);
    };

    const handlePointerUp = () => {
      clearTimeout(delayRef.current);
      delayRef.current = setTimeout(() => {
        setAnimationPlayState('running');
      }, 1500);
    };

    const handleScroll = () => {
      clearTimeout(delayRef.current);
      delayRef.current = setTimeout(() => {
        setAnimationPlayState('running');
      }, 500);
    };

    const handleKeyDown = () => {
      clearTimeout(delayRef.current);
      setAnimationPlayState('paused');

      delayRef.current = setTimeout(() => {
        setAnimationPlayState('running');
      }, 1500);
    };

    const handleAnimationStart = (event: Event) => {
      if (event.target === ref.current) {
        clearListeners();
      }
    };

    const clearListeners = () => {
      removeEventListener('pointerdown', handlePointerDown);
      removeEventListener('pointerup', handlePointerUp);
      removeEventListener('touchstart', handlePointerUp);
      removeEventListener('keydown', handleKeyDown);
      removeEventListener('scroll', handleScroll, { capture: true });
      ref.current?.removeEventListener('animationstart', handleAnimationStart);
      clearTimeout(delayRef.current);
    };

    if (visibility === 'visible-in-front') {
      addEventListener('pointerdown', handlePointerDown);
      addEventListener('keydown', handleKeyDown);
      addEventListener('scroll', handleScroll, { capture: true, passive: true });
      ref.current?.addEventListener('animationstart', handleAnimationStart, { once: true });
    } else {
      clearListeners();
    }

    return () => clearListeners();
  }, [visibility]);

  useIsomorphicLayoutEffect(() => {
    const item = { ref, setVisibility, setAnimationDirection, setAnimationPlayState };
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
      data-animation-play-state={animationPlayState}
      data-animation-direction={animationDirection}
      data-visibility={visibility}
      ref={ref}
      className={styles.MagicCurtainItem}
      {...props}
    >
      {visibility === 'hidden' ? null : children}
    </div>
  );
};

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

export const MagicCurtain = {
  Root: MagicCurtainRoot,
  Item: MagicCurtainItem,
};
