import React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { styled } from '@utils/css';
import styles from './PrimitivesHeroSwitch.module.css';

const Switch = styled(SwitchPrimitive.Root, styles.Switch);
const SwitchThumb = styled(SwitchPrimitive.Thumb, styles.Thumb);

export function PrimitivesHeroSwitch() {
  return (
    <Switch defaultChecked aria-label="Demo switch">
      <SwitchThumb />
    </Switch>
  );
}
