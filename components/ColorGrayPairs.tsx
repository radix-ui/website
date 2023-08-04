import { Box, Text, Flex } from '@radix-ui/themes';

const pairings = [
  { color: 'mauve', pairs: ['tomato', 'red', 'crimson', 'pink', 'plum', 'purple', 'violet'] },
  { color: 'slate', pairs: ['indigo', 'blue', 'sky', 'cyan'] },
  { color: 'sage', pairs: ['teal', 'mint', 'green'] },
  { color: 'olive', pairs: ['grass', 'lime'] },
  { color: 'sand', pairs: ['yellow', 'amber', 'orange', 'brown'] },
];

const blackTextPairs = ['sky', 'mint', 'lime', 'amber'];

export function ColorGrayPairs() {
  return (
    <Box>
      {pairings.map(({ color, pairs }) => (
        <Box my="5" key={color}>
          <Flex
            grow="1"
            align="center"
            justify="center"
            style={{ height: 35, marginBottom: 2, backgroundColor: `var(--${color}-4)` }}
          >
            <Text
              as="p"
              size="2"
              style={{ color: `var(--${color}-11)`, textTransform: 'capitalize' }}
            >
              {color}
            </Text>
          </Flex>
          <Flex style={{ gap: 2 }}>
            {pairs.map((pair) => (
              <Flex
                key={pair}
                grow="1"
                align="center"
                justify="center"
                style={{ height: 35, backgroundColor: `var(--${pair}-10)` }}
              >
                <Text
                  as="p"
                  size="2"
                  style={{
                    color: blackTextPairs.includes(pair) ? 'black' : 'white',
                    textTransform: 'capitalize',
                  }}
                >
                  {pair}
                </Text>
              </Flex>
            ))}
          </Flex>
        </Box>
      ))}
    </Box>
  );
}
