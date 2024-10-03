import * as React from "react";
import { canUseDOM } from "./can-use-dom";

const noop = () => {};
export const useLayoutEffect = canUseDOM ? React.useLayoutEffect : noop;
