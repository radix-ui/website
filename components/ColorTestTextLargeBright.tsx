import { Text, Flex } from '@radix-ui/themes';
import { CheckIcon } from '@radix-ui/react-icons';

const allColors = ['amber', 'yellow', 'lime', 'mint', 'sky'];

export function ColorTestTextLargeBright() {
  return (
    <Flex
      direction="column"
      my="5"
      style={{
        gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
        gap: 2,
      }}
    >
      {allColors.map((color, i) => (
        <Flex
          key={color}
          align="center"
          justify="between"
          height="8"
          px="3"
          style={{ backgroundColor: `var(--${color}-9)` }}
        >
          <Text size="5" weight="bold" style={{ color: `var(--black-a11)` }}>
            Black A11 on {capitalize(color)} 9
          </Text>
          <Flex
            align="center"
            justify="center"
            width="5"
            height="5"
            style={{
              backgroundColor: `var(--white-a9)`,
              color: `var(--black-a9)`,
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
