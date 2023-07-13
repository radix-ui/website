import * as React from 'react';
import styles from './ThemesHero.module.css';
import classNames from 'classnames';

interface ThemesHeroRootProps extends React.ComponentPropsWithoutRef<'div'> {
  color: 'blue' | 'green' | 'red';
}

const ThemesHeroRoot = ({ children, color, ...props }: ThemesHeroRootProps) => (
  <div className={classNames(styles.ThemesHeroRoot, styles[`color-${color}`])} {...props}>
    <div className={styles.ThemesHeroContent}>{children}</div>
  </div>
);

const ThemesHeroTagline = ({ children, ...props }: React.ComponentPropsWithoutRef<'div'>) => (
  <div className={styles.ThemesHeroTagline}>
    <div className={styles.ThemesHeroTaglineInner}>{children}</div>
  </div>
);

const ThemesHeroTitle = (props: React.ComponentPropsWithoutRef<'h1'>) => (
  <h1 className={styles.ThemesHeroTaglineTitle} {...props} />
);

const ThemesHeroText = (props: React.ComponentPropsWithoutRef<'p'>) => (
  <p className={styles.ThemesHeroTaglineText} {...props} />
);

const ThemesHeroActions = (props: React.ComponentPropsWithoutRef<'div'>) => (
  <div className={styles.ThemesHeroActions} {...props} />
);

interface ThemesHeroButtonProps extends React.ComponentPropsWithoutRef<'a'> {
  variant?: 'solid' | 'soft';
}

const ThemesHeroButton = ({ variant = 'solid', children, ...props }: ThemesHeroButtonProps) => (
  <a
    href="/docs/themes"
    className={classNames(styles.ThemesHeroButton, styles[`variant-${variant}`])}
    {...props}
  >
    {children}
  </a>
);

const ThemesHeroShowcase = ({ children }: React.ComponentPropsWithoutRef<'div'>) => {
  const heroShowcaseScrollRef = React.useRef<HTMLDivElement>(null);

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
    <div className={styles.ThemesHeroShowcase} aria-hidden>
      <div className={styles.ThemesHeroShowcaseInner} ref={heroShowcaseScrollRef}>
        {/* An extra div is needed to have padding working as expected within the scroll container */}
        <div>
          <div className={styles.ThemesHeroShowcaseInnerScaled}>{children}</div>
        </div>
      </div>
    </div>
  );
};

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;

export const ThemesHero = {
  Root: ThemesHeroRoot,
  Tagline: ThemesHeroTagline,
  Title: ThemesHeroTitle,
  Text: ThemesHeroText,
  Actions: ThemesHeroActions,
  Button: ThemesHeroButton,
  Showcase: ThemesHeroShowcase,
};
