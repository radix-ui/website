import * as React from 'react';
import styles from './ThemesHeroLayout.module.css';

const ThemesHeroLayoutRoot = ({ children, ...props }: React.ComponentPropsWithoutRef<'div'>) => (
  <div className={styles.ThemesHeroLayoutRoot} {...props}>
    <div className={styles.ThemesHeroLayoutContent}>{children}</div>
  </div>
);

const ThemesHeroLayoutBackground = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div className={styles.ThemesHeroLayoutBackground} {...props} />
);

const ThemesHeroLayoutMain = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div className={styles.ThemesHeroLayoutMain} {...props} />
);

const ThemesHeroLayoutShowcase = ({ children }: React.ComponentPropsWithoutRef<'div'>) => {
  const heroShowcaseScrollRef = React.useRef<HTMLDivElement>(null);

  const useIsomorphicLayoutEffect =
    typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

  useIsomorphicLayoutEffect(() => {
    let currentWidth = 0;

    const centerDemoScroll = () => {
      const newWidth = window.innerWidth;
      const container = heroShowcaseScrollRef.current;

      if (getComputedStyle(container).overflowX !== 'scroll') {
        container.scrollLeft = 0;
        currentWidth = 0;
        return;
      }

      if (newWidth !== currentWidth && container) {
        container.scrollLeft = container.scrollWidth / 2 - container.clientWidth / 2;
        currentWidth = newWidth;
      }
    };

    centerDemoScroll();
    addEventListener('resize', centerDemoScroll);

    return () => {
      removeEventListener('resize', centerDemoScroll);
    };
  }, []);

  return (
    <div className={styles.ThemesHeroLayoutShowcase} aria-hidden>
      <div className={styles.ThemesHeroLayoutShowcaseInner} ref={heroShowcaseScrollRef}>
        {/* An extra div is needed to have padding working as expected within the scroll container */}
        <div>
          <div className={styles.ThemesHeroLayoutShowcaseInnerScaled}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export const ThemesHeroLayout = {
  Root: ThemesHeroLayoutRoot,
  Background: ThemesHeroLayoutBackground,
  Main: ThemesHeroLayoutMain,
  Showcase: ThemesHeroLayoutShowcase,
};
