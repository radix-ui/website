import { composeRefs } from '@radix-ui/react-compose-refs';
import { TextField, extractMarginProps } from '@radix-ui/themes';
import styles from './ColorField.module.css';
import * as React from 'react';

interface ColorFieldProps extends React.ComponentPropsWithoutRef<typeof TextField.Input> {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}

const DEFAULT_COLOR = '000000';

export const ColorField = React.forwardRef<HTMLInputElement, ColorFieldProps>(
  (
    {
      defaultValue = DEFAULT_COLOR,
      disabled,
      onBlur,
      onChange,
      onKeyDownCapture,
      onValueChange,
      placeholder = 'Hex color',
      readOnly,
      size,
      value,
      ...props
    },
    forwardedRef
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [inputValue, setInputValue] = React.useState(
      parseHex(value ?? defaultValue) ?? DEFAULT_COLOR
    );

    const committedColorRef = React.useRef(inputValue);
    const preventInputSelectionRef = React.useRef(false);
    const { rest: marginRest, ...marginProps } = extractMarginProps(props);

    const color = React.useMemo(() => {
      const hex = parseHex(inputValue);
      return hex ? hex : committedColorRef.current;
    }, [inputValue]);

    // Sync with the incoming value
    useIsomorphicLayoutEffect(() => {
      const hex = parseHex(value);

      if (hex) {
        setInputValue(hex);
        committedColorRef.current = hex;
      }
    }, [value]);

    return (
      <TextField.Root
        size={size}
        {...marginProps}
        onMouseUp={() => {
          if (preventInputSelectionRef.current) {
            return;
          }

          const inputHasFocus = document.activeElement === inputRef.current;

          if (inputHasFocus && !hasSelection(inputRef.current)) {
            inputRef.current?.select();

            // Don't re-select the input value on next mouse up until blurred
            preventInputSelectionRef.current = true;
          }
        }}
      >
        <TextField.Slot>
          <div className={styles.ColorFieldSwatchWrapper}>
            <input
              disabled={disabled || readOnly}
              className={styles.ColorFieldSwatch}
              onChange={(event) => {
                const hex = parseHex(event.currentTarget.value);

                if (hex) {
                  committedColorRef.current = hex;
                  setInputValue(hex);
                  onValueChange?.(formatHex(hex));
                }

                onChange?.(event);
              }}
              tabIndex={-1}
              type="color"
              value={'#' + color}
            />
            <div className={styles.ColorFieldSwatchBorder} />
          </div>
        </TextField.Slot>
        <TextField.Input
          ref={composeRefs(inputRef, forwardedRef)}
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect="off"
          onBlur={(event) => {
            committedColorRef.current = color;
            preventInputSelectionRef.current = false;
            setInputValue(color);
            onValueChange?.(formatHex(color));
            // Firefox doesn't really reset input selection range on blur, and then
            // recovers it on focus, which messes with our selection on mouse up.
            inputRef.current?.setSelectionRange(0, 0);
            onBlur?.(event);
          }}
          onChange={(event) => {
            setInputValue(event.currentTarget.value);
            onChange?.(event);
          }}
          onKeyDownCapture={(event) => {
            if (event.key === 'Enter') {
              if (committedColorRef.current !== inputValue) {
                committedColorRef.current = color;
                setInputValue(color);
                onValueChange?.(formatHex(color));
                setTimeout(() => inputRef.current?.select());

                // Prevent form submission
                // We want the user to see the parsed hex first
                event.preventDefault();
              }
            }

            if (event.key === 'Escape') {
              if (committedColorRef.current !== inputValue) {
                setInputValue(committedColorRef.current);
                setTimeout(() => inputRef.current?.select());

                // Prevent dialogs from closing
                // We want the user to see the parsed hex first
                event.stopPropagation();
              }
            }

            onKeyDownCapture?.(event);
          }}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          type="text"
          value={inputValue}
          variant="surface"
          {...marginRest}
        />
      </TextField.Root>
    );
  }
);

ColorField.displayName = 'ColorField';

const hasSelection = (input: HTMLInputElement | null) => {
  if (input) {
    const { selectionStart, selectionEnd } = input;
    return (selectionEnd ?? 0) - (selectionStart ?? 0) > 0;
  }

  return false;
};

const parseHex = (value?: string) => {
  const regexp = /((?:^(?:[0-9]|[a-f]){6})|(?:^(?:[0-9]|[a-f]){1,3}))/i;
  let [hex] = value?.trim().replace(/^#/, '').match(regexp) ?? [];

  if (!hex) {
    return null;
  }

  switch (hex.length) {
    case 1:
      hex = hex.repeat(6);
      break;
    case 2:
      hex = hex.repeat(3);
      break;
    case 3:
      const [r, g, b] = hex.split('');
      hex = `${r}${r}${g}${g}${b}${b}`;
  }

  return hex.toUpperCase();
};

const formatHex = (value: string) => '#' + value;

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;
