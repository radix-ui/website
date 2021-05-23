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

export function ColorTestText() {
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
          css={{ height: '$7', px: '$3', backgroundColor: '$gray200' }}
        >
          <Text css={{ color: '$gray900', fontSize: '$3' }}>Gray900 on Gray200</Text>
          <Flex
            css={{
              bc: '$gray400',
              color: '$gray900',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$quartz200' }}
        >
          <Text css={{ color: '$quartz900', fontSize: '$3' }}>Quartz900 on Quartz200</Text>
          <Flex
            css={{
              bc: '$quartz400',
              color: '$quartz900',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$slate200' }}
        >
          <Text css={{ color: '$slate900', fontSize: '$3' }}>Slate900 on Slate200</Text>
          <Flex
            css={{
              bc: '$slate400',
              color: '$slate900',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$sage200' }}
        >
          <Text css={{ color: '$sage900', fontSize: '$3' }}>Sage900 on Sage200</Text>
          <Flex
            css={{
              bc: '$sage400',
              color: '$sage900',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$olive200' }}
        >
          <Text css={{ color: '$olive900', fontSize: '$3' }}>Olive900 on Olive200</Text>
          <Flex
            css={{
              bc: '$olive400',
              color: '$olive900',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$sand200' }}
        >
          <Text css={{ color: '$sand900', fontSize: '$3' }}>Sand900 on Sand200</Text>
          <Flex
            css={{
              bc: '$sand400',
              color: '$sand900',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$tomato200' }}
        >
          <Text css={{ color: '$tomato900', fontSize: '$3' }}>Tomato900 on Tomato200</Text>
          <Flex
            css={{
              bc: '$tomato400',
              color: '$tomato900',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$red200' }}
        >
          <Text css={{ color: '$red900', fontSize: '$3' }}>Red900 on Red200</Text>
          <Flex
            css={{
              bc: '$red400',
              color: '$red900',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$crimson200' }}
        >
          <Text css={{ color: '$crimson900', fontSize: '$3' }}>Crimson900 on Crimson200</Text>
          <Flex
            css={{
              bc: '$crimson400',
              color: '$crimson900',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$pink200' }}
        >
          <Text css={{ color: '$pink900', fontSize: '$3' }}>Pink900 on Pink200</Text>
          <Flex
            css={{
              bc: '$pink400',
              color: '$pink900',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$plum200' }}
        >
          <Text css={{ color: '$plum900', fontSize: '$3' }}>Plum900 on Plum200</Text>
          <Flex
            css={{
              bc: '$plum400',
              color: '$plum900',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$purple200' }}
        >
          <Text css={{ color: '$purple900', fontSize: '$3' }}>Purple900 on Purple200</Text>
          <Flex
            css={{
              bc: '$purple400',
              color: '$purple900',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$violet200' }}
        >
          <Text css={{ color: '$violet900', fontSize: '$3' }}>Violet900 on Violet200</Text>
          <Flex
            css={{
              bc: '$violet400',
              color: '$violet900',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$indigo200' }}
        >
          <Text css={{ color: '$indigo900', fontSize: '$3' }}>Indigo900 on Indigo200</Text>
          <Flex
            css={{
              bc: '$indigo400',
              color: '$indigo900',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$blue200' }}
        >
          <Text css={{ color: '$blue900', fontSize: '$3' }}>Blue900 on Blue200</Text>
          <Flex
            css={{
              bc: '$blue400',
              color: '$blue900',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$sky200' }}
        >
          <Text css={{ color: '$sky900', fontSize: '$3' }}>Sky900 on Sky200</Text>
          <Flex
            css={{
              bc: '$sky400',
              color: '$sky900',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$cyan200' }}
        >
          <Text css={{ color: '$cyan900', fontSize: '$3' }}>Cyan900 on Cyan200</Text>
          <Flex
            css={{
              bc: '$cyan400',
              color: '$cyan900',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$teal200' }}
        >
          <Text css={{ color: '$teal900', fontSize: '$3' }}>Teal900 on Teal200</Text>
          <Flex
            css={{
              bc: '$teal400',
              color: '$teal900',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$mint200' }}
        >
          <Text css={{ color: '$mint900', fontSize: '$3' }}>Mint900 on Mint200</Text>
          <Flex
            css={{
              bc: '$mint400',
              color: '$mint900',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$green200' }}
        >
          <Text css={{ color: '$green900', fontSize: '$3' }}>Green900 on Green200</Text>
          <Flex
            css={{
              bc: '$green400',
              color: '$green900',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$lime200' }}
        >
          <Text css={{ color: '$lime900', fontSize: '$3' }}>Lime900 on Lime200</Text>
          <Flex
            css={{
              bc: '$lime400',
              color: '$lime900',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$yellow200' }}
        >
          <Text css={{ color: '$yellow900', fontSize: '$3' }}>Yellow900 on Yellow200</Text>
          <Flex
            css={{
              bc: '$yellow400',
              color: '$yellow900',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$amber200' }}
        >
          <Text css={{ color: '$amber900', fontSize: '$3' }}>Amber900 on Amber200</Text>
          <Flex
            css={{
              bc: '$amber400',
              color: '$amber900',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$orange200' }}
        >
          <Text css={{ color: '$orange900', fontSize: '$3' }}>Orange900 on Orange200</Text>
          <Flex
            css={{
              bc: '$orange400',
              color: '$orange900',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$brown200' }}
        >
          <Text css={{ color: '$brown900', fontSize: '$3' }}>Brown900 on Brown200</Text>
          <Flex
            css={{
              bc: '$brown400',
              color: '$brown900',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$bronze200' }}
        >
          <Text css={{ color: '$bronze900', fontSize: '$3' }}>Bronze900 on Bronze200</Text>
          <Flex
            css={{
              bc: '$bronze400',
              color: '$bronze900',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$gold200' }}
        >
          <Text css={{ color: '$gold900', fontSize: '$3' }}>Gold900 on Gold200</Text>
          <Flex
            css={{
              bc: '$gold400',
              color: '$gold900',
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
