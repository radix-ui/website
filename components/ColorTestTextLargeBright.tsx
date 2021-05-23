import {
  Box,
  Text,
  Section,
  Container,
  Grid,
  Code,
  Heading,
  Flex,
  Paragraph,
} from '@modulz/design-system';
import { CheckIcon, CheckboxIcon } from '@radix-ui/react-icons';

export function ColorTestTextLargeBright() {
  return (
    <Box>
      <Grid
        css={{
          gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
          gap: 2,
          ai: 'center',
          my: '$5',
        }}
      >
        <Flex
          align="center"
          justify="between"
          css={{ height: '$7', px: '$3', backgroundColor: '$sky800' }}
        >
          <Text
            css={{
              color: 'black',
              fontSize: '$5',
              fontWeight: 600,
              fontFamily: 'system-ui, helvetica, sans-serif',
            }}
          >
            Black text on Sky200
          </Text>
          <Flex
            css={{
              bc: '$sky900',
              color: '$loContrast',
              ai: 'center',
              jc: 'center',
              width: '$5',
              height: '$5',
              borderRadius: '50%',
            }}
          >
            <CheckIcon />
          </Flex>
        </Flex>
        <Flex
          align="center"
          justify="between"
          css={{ height: '$7', px: '$3', backgroundColor: '$mint800' }}
        >
          <Text
            css={{
              color: 'black',
              fontSize: '$5',
              fontWeight: 600,
              fontFamily: 'system-ui, helvetica, sans-serif',
            }}
          >
            Black text on Mint200
          </Text>
          <Flex
            css={{
              bc: '$mint900',
              color: '$loContrast',
              ai: 'center',
              jc: 'center',
              width: '$5',
              height: '$5',
              borderRadius: '50%',
            }}
          >
            <CheckIcon />
          </Flex>
        </Flex>
        <Flex
          align="center"
          justify="between"
          css={{ height: '$7', px: '$3', backgroundColor: '$lime800' }}
        >
          <Text
            css={{
              color: 'black',
              fontSize: '$5',
              fontWeight: 600,
              fontFamily: 'system-ui, helvetica, sans-serif',
            }}
          >
            Black text on Lime200
          </Text>
          <Flex
            css={{
              bc: '$lime900',
              color: '$loContrast',
              ai: 'center',
              jc: 'center',
              width: '$5',
              height: '$5',
              borderRadius: '50%',
            }}
          >
            <CheckIcon />
          </Flex>
        </Flex>
        <Flex
          align="center"
          justify="between"
          css={{ height: '$7', px: '$3', backgroundColor: '$yellow800' }}
        >
          <Text
            css={{
              color: 'black',
              fontSize: '$5',
              fontWeight: 600,
              fontFamily: 'system-ui, helvetica, sans-serif',
            }}
          >
            Black text on Yellow200
          </Text>
          <Flex
            css={{
              bc: '$yellow900',
              color: '$loContrast',
              ai: 'center',
              jc: 'center',
              width: '$5',
              height: '$5',
              borderRadius: '50%',
            }}
          >
            <CheckIcon />
          </Flex>
        </Flex>
        <Flex
          align="center"
          justify="between"
          css={{ height: '$7', px: '$3', backgroundColor: '$amber800' }}
        >
          <Text
            css={{
              color: 'black',
              fontSize: '$5',
              fontWeight: 600,
              fontFamily: 'system-ui, helvetica, sans-serif',
            }}
          >
            Black text on Amber200
          </Text>
          <Flex
            css={{
              bc: '$amber900',
              color: '$loContrast',
              ai: 'center',
              jc: 'center',
              width: '$5',
              height: '$5',
              borderRadius: '50%',
            }}
          >
            <CheckIcon />
          </Flex>
        </Flex>
      </Grid>
    </Box>
  );
}
