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
          css={{ height: '$7', px: '$3', backgroundColor: '$sky10' }}
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
              bc: '$sky11',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$mint10' }}
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
              bc: '$mint11',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$lime10' }}
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
              bc: '$lime11',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$yellow10' }}
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
              bc: '$yellow11',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$amber10' }}
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
              bc: '$amber11',
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
