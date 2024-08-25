import React from 'react';
import * as Slider from '@radix-ui/react-slider';
import styles from './styles.module.css';

const SliderDemo = () => (
  <form>
    <Slider.Root className={styles.Root} defaultValue={[50]} max={100} step={1}>
      <Slider.Track className={styles.Track}>
        <Slider.Range className={styles.Range} />
      </Slider.Track>
      <Slider.Thumb className={styles.Thumb} aria-label="Volume" />
    </Slider.Root>
  </form>
);

export default SliderDemo;
