import * as React from 'react';
import { canUseDom } from './can-use-dom';

const noop = () => {};
export const useLayoutEffect = canUseDom ? React.useLayoutEffect : noop;
