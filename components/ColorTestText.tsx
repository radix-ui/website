import { Text, Flex } from '@radix-ui/themes';
import { CheckIcon } from '@radix-ui/react-icons';

const allColors = [
  'gray',
  'mauve',
  'slate',
  'sage',
  'olive',
  'sand',
  'tomato',
  'red',
  'crimson',
  'pink',
  'plum',
  'purple',
  'violet',
  'indigo',
  'blue',
  'cyan',
  'teal',
  'green',
  'grass',
  'orange',
  'brown',
  'bronze',
  'gold',
  'sky',
  'mint',
  'lime',
  'yellow',
  'amber',
];

export function ColorTestText() {
  return (
    <Flex
      direction="column"
      my="5"
      style={{
        gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
        gap: 2,
      }}
    >
      {allColors.map((color) => (
        <Flex
          key={color}
          align="center"
          justify="between"
          height="8"
          px="3"
          style={{ backgroundColor: `var(--${color}-3)` }}
        >
          <Text size="3" style={{ color: `var(--${color}-11)` }}>
            {capitalize(color)} 11 on {capitalize(color)} 3
          </Text>
          <Flex
            align="center"
            justify="center"
            width="5"
            height="5"
            style={{
              backgroundColor: `var(--${color}-5)`,
              color: `var(--${color}-11)`,
              borderRadius: '50%',
            }}
          >
            <CheckIcon />
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
}

const capitalize = (str: string) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
