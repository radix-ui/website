import * as React from 'react';
import {
  VisuallyHidden,
  Popover,
  Box,
  Heading,
  Theme,
  Button,
  Separator,
  Grid,
  Text,
  Tooltip,
  Flex,
  AccessibleIcon,
  IconButton,
  Dialog,
  Reset,
} from '@radix-ui/themes';
import styles from './CustomSwatch.module.css';
import { classNames } from '@utils/classNames';
import { useTheme } from 'next-themes';
import { Cross2Icon, InfoCircledIcon } from '@radix-ui/react-icons';
import copy from 'copy-to-clipboard';

const brightColors = ['amber', 'yellow', 'lime', 'mint', 'sky'];

interface CustomSwatchProps extends React.ComponentPropsWithoutRef<'button'> {
  scale: string;
  step: string;
  cssVariable: string;
  hex: string;
  hexA: string;
  p3: string;
  p3A: string;
}

export const CustomSwatch = ({
  scale,
  step,
  cssVariable,
  hex,
  hexA,
  p3,
  p3A,
  style,
  ...props
}: CustomSwatchProps) => {
  const contentRef = React.useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const friendlyScaleName = `${scale.charAt(0).toUpperCase() + scale.slice(1)}`;
  const friendlyColorName = `${friendlyScaleName} ${step}`;
  const otherTheme = resolvedTheme === 'light' ? 'dark' : 'light';

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Reset>
          <button
            className={classNames(styles.CustomSwatchTrigger, styles.CustomSwatchTransparencyGrid)}
            {...props}
          >
            <span style={{ backgroundColor: cssVariable, ...style }}>
              <VisuallyHidden>
                {scale} {step}
              </VisuallyHidden>
            </span>
          </button>
        </Reset>
      </Dialog.Trigger>

      <Theme accentColor="gray" className="radix-themes-custom-fonts" asChild>
        <Dialog.Content
          ref={contentRef}
          size="1"
          className={styles.CustomSwatchContent}
          onOpenAutoFocus={(event) => {
            event.preventDefault();
            contentRef.current?.focus();
          }}
        >
          <Box position="relative">
            <Box className={styles.CustomSwatchTransparencyGrid} height="240px">
              <Box style={{ width: '100%', height: '100%', backgroundColor: cssVariable }} />
            </Box>

            <Heading as="h3" size="3" trim="both" my="4">
              {friendlyColorName}
            </Heading>

            {!['white', 'black'].includes(scale) &&
              (() => {
                const isGray = ['gray', 'mauve', 'slate', 'sage', 'olive', 'sand'].includes(scale);
                return (
                  <Grid align="center" columns={{ xs: 'auto 1fr' }} gapY={{ xs: '2' }} gapX="5">
                    <Text color="gray" size="2">
                      Usage
                    </Text>
                    <Box mb={{ initial: '3', xs: '0' }}>
                      <Text size="2">
                        {['1', '2'].includes(step) && 'Backgrounds'}
                        {['3', '4', '5'].includes(step) && 'Interactive components'}
                        {['6', '7'].includes(step) && 'Borders and separators'}
                        {['8'].includes(step) && isGray && 'Borders, focus rings, disabled text'}
                        {['8'].includes(step) && !isGray && 'Borders, focus rings'}
                        {['9', '10'].includes(step) && isGray && 'Solid backgrounds, disabled text'}
                        {['9', '10'].includes(step) && !isGray && 'Solid backgrounds, buttons'}
                        {['11'].includes(step) && 'Secondary text, links'}
                        {['12'].includes(step) && 'High-contrast text'}
                      </Text>
                    </Box>

                    <Text color="gray" size="2">
                      Pairs with
                    </Text>
                    <Box>
                      <Text size="2">
                        {['1', '2'].includes(step) && 'Steps 11, 12 text'}
                        {['3'].includes(step) && 'Steps 11 labels, Step 12 text'}
                        {['4'].includes(step) && 'Steps 11, 12 labels'}
                        {['5'].includes(step) && 'Step 12 labels'}
                        {['6', '7', '8'].includes(step) && 'Steps 1–5 backgrounds'}
                        {['9', '10'].includes(step) &&
                          (brightColors.includes(scale) ? 'Dark text' : 'White text')}
                        {['11', '12'].includes(step) && 'Background colors'}
                      </Text>
                    </Box>

                    <Box style={{ gridColumn: '1 / -1 ' }} my={{ initial: '4', xs: '1' }}>
                      <Separator size="4" />
                    </Box>

                    <Text color="gray" size="2">
                      Solid color
                    </Text>

                    <Flex
                      mb={{ initial: '3', xs: '0' }}
                      height={{ initial: '24px', xs: '16px' }}
                      align="center"
                    >
                      <CopyButton>{hex}</CopyButton>
                    </Flex>

                    <Flex align="center">
                      <Text color="gray" size="2">
                        Alpha color
                      </Text>

                      <Popover.Root modal>
                        <Popover.Trigger>
                          <IconButton size="1" variant="ghost" style={{ marginLeft: 2 }}>
                            <AccessibleIcon label="Learn more">
                              <InfoCircledIcon />
                            </AccessibleIcon>
                          </IconButton>
                        </Popover.Trigger>
                        <Theme asChild className="radix-themes-custom-fonts">
                          <Popover.Content side="top" align="center" style={{ width: 380 }}>
                            <Heading size="2" mb="4" trim="both">
                              Alpha colors
                            </Heading>
                            <Text as="p" size="2" trim="both" mb="4">
                              Alpha color is a translucent color that achieves the same look against
                              a neutral background. Alpha colors are used for elements that need to
                              retain contrast when overlayed over different backgrounds
                            </Text>
                            <Text as="p" size="2" trim="both">
                              Radix Colors alphas are designed against white background in light
                              mode and Gray 1 in dark mode.
                            </Text>
                          </Popover.Content>
                        </Theme>
                      </Popover.Root>
                    </Flex>

                    <Flex
                      mb={{ initial: '3', xs: '0' }}
                      height={{ initial: '24px', xs: '16px' }}
                      align="center"
                    >
                      <CopyButton>{hexA}</CopyButton>
                    </Flex>

                    <Text color="gray" size="2">
                      P3 color
                    </Text>
                    <Flex
                      mb={{ initial: '3', xs: '0' }}
                      height={{ initial: '24px', xs: '16px' }}
                      align="center"
                    >
                      <CopyButton>{p3}</CopyButton>
                    </Flex>

                    <Text color="gray" size="2">
                      P3 alpha
                    </Text>
                    <Flex height={{ initial: '24px', xs: '16px' }} align="center">
                      <CopyButton>{p3A}</CopyButton>
                    </Flex>
                  </Grid>
                );
              })()}

            <Theme
              asChild
              hasBackground={false}
              appearance={(() => {
                if (+step < 9) {
                  return 'inherit';
                }

                if (+step < 11) {
                  const isBright = brightColors.includes(scale);
                  return isBright ? 'light' : 'dark';
                }

                return otherTheme;
              })()}
            >
              <Box position="absolute" m="2" top="0" right="0" display={{ sm: 'none' }}>
                <Dialog.Close>
                  <IconButton size="1" highContrast variant="ghost">
                    <Cross2Icon width="24" height="24" />
                  </IconButton>
                </Dialog.Close>
              </Box>
            </Theme>
          </Box>
        </Dialog.Content>
      </Theme>
    </Dialog.Root>
  );
};

interface CopyButtonState {
  open: boolean;
  text: 'Click to copy' | 'Copied';
  timeout: ReturnType<typeof setTimeout> | null;
}

type CopyButtonStateReducer = (
  prevState: CopyButtonState,
  newState: Partial<CopyButtonState>
) => CopyButtonState;

const CopyButton = ({ onClick, ...props }: React.ComponentPropsWithoutRef<typeof Button>) => {
  const ref = React.useRef<HTMLButtonElement>(null);

  const [state, setState] = React.useReducer<CopyButtonStateReducer>(
    (prevState, newState) => {
      // Start a timeout to change the text when tooltip is closed
      if (newState.open === false) {
        newState.timeout = setTimeout(() => {
          setState({
            text: 'Click to copy',
            timeout: null,
          });
        }, 1000);
      }

      // Clear a previous timeout when tooltip state changes
      if (prevState.timeout) {
        clearTimeout(prevState.timeout);
        prevState.timeout = null;
      }

      return { ...prevState, ...newState };
    },
    {
      open: false,
      text: 'Click to copy',
      timeout: null,
    }
  );

  return (
    <Tooltip
      disableHoverableContent
      content={state.text}
      onOpenChange={(open) => setState({ open })}
      onPointerDownOutside={(event) => {
        // Prevent tooltip closing on click
        const target = event.target as HTMLElement;
        if (ref.current?.contains(target)) {
          event.preventDefault();
        }
      }}
      open={state.open}
    >
      <Button
        variant="ghost"
        highContrast
        ref={ref}
        size="2"
        style={{ userSelect: 'auto' }}
        onClick={async (event) => {
          onClick?.(event);
          const originalDefaultPrevented = event.defaultPrevented;

          // Prevent tooltip closing on click
          event.preventDefault();
          const text = ref.current?.textContent;

          if (text) {
            setState({
              open: true,
              text: 'Copied',
            });

            if (!originalDefaultPrevented) {
              copy(text);
            }
          }
        }}
        {...props}
      />
    </Tooltip>
  );
};
