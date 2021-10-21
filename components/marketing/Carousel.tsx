import { Box } from '@modulz/design-system';
import { useComposedRefs } from '@radix-ui/react-compose-refs';
import { createContext } from '@radix-ui/react-context';
import { useCallbackRef } from '@radix-ui/react-use-callback-ref';
import debounce from 'lodash.debounce';
import { useCallback, useEffect, useRef, useState } from 'react';

const [CarouselProvider, useCarouselContext] = createContext<{
  _: any;
  slideListRef: React.RefObject<HTMLElement>;
  onNextClick(): void;
  onPrevClick(): void;
}>('Carousel');

export const Carousel = (props) => {
  const ref = useRef<React.ElementRef<typeof Box>>(null);
  const { children, ...carouselProps } = props;
  const slideListRef = useRef<HTMLElement>(null);
  const [_, force] = useState({});

  const getSlideInDirection = useCallbackRef((direction) => {
    const slides = ref.current?.querySelectorAll('[data-slide-intersected]');
    if (slides) {
      return Array.from(slides.values()).find((slide: HTMLElement, index) => {
        const slideBefore = slides.item(index - direction) as HTMLElement;
        return (
          slide.dataset.slideIntersected === 'false' &&
          slideBefore?.dataset.slideIntersected === 'true'
        );
      });
    }
  });

  const handleNextClick = useCallback(() => {
    const nextSlide = getSlideInDirection(1);
    if (nextSlide) {
      nextSlide.scrollIntoView({
        inline: 'start',
        block: 'nearest',
        behavior: 'smooth',
      });
    }
  }, [getSlideInDirection]);

  const handlePrevClick = useCallback(() => {
    const prevSlide = getSlideInDirection(-1);
    if (prevSlide) {
      prevSlide.scrollIntoView({
        inline: 'end',
        block: 'nearest',
        behavior: 'smooth',
      });
    }
  }, [getSlideInDirection]);

  useEffect(() => {
    const slidesList = slideListRef.current;
    if (slidesList) {
      const handleScrollStartAndEnd = debounce(() => force({}), 100, {
        leading: true,
        trailing: true,
      });
      slidesList.addEventListener('scroll', handleScrollStartAndEnd);
      force({});
      return () => slidesList.removeEventListener('scroll', handleScrollStartAndEnd);
    }
  }, [slideListRef]);

  return (
    <CarouselProvider
      _={_}
      slideListRef={slideListRef}
      onNextClick={handleNextClick}
      onPrevClick={handlePrevClick}
    >
      <Box {...carouselProps} ref={ref}>
        {children}
      </Box>
    </CarouselProvider>
  );
};

export const CarouselSlideList = (props) => {
  const context = useCarouselContext('CarouselSlideList');
  const ref = useRef<React.ElementRef<typeof Box>>(null);
  const composedRefs = useComposedRefs(ref, context.slideListRef);

  return <Box {...props} ref={composedRefs} />;
};

export const CarouselSlide = (props) => {
  const { as: Comp = Box, ...slideProps } = props;
  const context = useCarouselContext('CarouselSlide');
  const ref = useRef<React.ElementRef<typeof Box>>(null);
  const [isIntersected, setIsIntersected] = useState(false);

  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver(
        ([entry]) => setIsIntersected(entry.isIntersecting),
        {
          root: context.slideListRef.current,
          threshold: 1.0,
        }
      );
      observer.observe(ref.current);
      return () => observer.disconnect();
    }
  }, [context.slideListRef]);

  return (
    <Comp
      {...slideProps}
      ref={ref}
      css={{ scrollSnapAlign: 'start' }}
      data-slide-intersected={isIntersected}
    />
  );
};

export const CarouselNext = (props) => {
  const { as: Comp = 'button', ...nextProps } = props;
  const context = useCarouselContext('CarouselNext');
  const slideList = (context.slideListRef.current || {}) as HTMLElement;
  const { scrollWidth, scrollLeft, clientWidth } = slideList;
  const remainder = scrollWidth - scrollLeft - clientWidth;
  const disabled = remainder <= 0;
  return (
    <Comp {...nextProps} tabIndex={-1} onClick={() => context.onNextClick()} disabled={disabled} />
  );
};

export const CarouselPrevious = (props) => {
  const { as: Comp = 'button', ...prevProps } = props;
  const context = useCarouselContext('CarouselPrevious');
  const slideList = (context.slideListRef.current || {}) as HTMLElement;
  const disabled = slideList?.scrollLeft <= 0;
  return (
    <Comp {...prevProps} tabIndex={-1} onClick={() => context.onPrevClick()} disabled={disabled} />
  );
};
