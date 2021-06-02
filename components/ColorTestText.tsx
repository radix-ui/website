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
          css={{ height: '$7', px: '$3', backgroundColor: '$gray4' }}
        >
          <Text css={{ color: '$gray11', fontSize: '$3' }}>Gray900 on Gray200</Text>
          <Flex
            css={{
              bc: '$gray400',
              color: '$gray11',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$mauve4' }}
        >
          <Text css={{ color: '$mauve11', fontSize: '$3' }}>Mauve900 on Mauve200</Text>
          <Flex
            css={{
              bc: '$mauve400',
              color: '$mauve11',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$slate4' }}
        >
          <Text css={{ color: '$slate11', fontSize: '$3' }}>Slate900 on Slate200</Text>
          <Flex
            css={{
              bc: '$slate400',
              color: '$slate11',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$sage4' }}
        >
          <Text css={{ color: '$sage11', fontSize: '$3' }}>Sage900 on Sage200</Text>
          <Flex
            css={{
              bc: '$sage400',
              color: '$sage11',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$olive4' }}
        >
          <Text css={{ color: '$olive11', fontSize: '$3' }}>Olive900 on Olive200</Text>
          <Flex
            css={{
              bc: '$olive400',
              color: '$olive11',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$sand4' }}
        >
          <Text css={{ color: '$sand11', fontSize: '$3' }}>Sand900 on Sand200</Text>
          <Flex
            css={{
              bc: '$sand400',
              color: '$sand11',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$tomato4' }}
        >
          <Text css={{ color: '$tomato11', fontSize: '$3' }}>Tomato900 on Tomato200</Text>
          <Flex
            css={{
              bc: '$tomato400',
              color: '$tomato11',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$red4' }}
        >
          <Text css={{ color: '$red11', fontSize: '$3' }}>Red900 on Red200</Text>
          <Flex
            css={{
              bc: '$red400',
              color: '$red11',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$crimson4' }}
        >
          <Text css={{ color: '$crimson11', fontSize: '$3' }}>Crimson900 on Crimson200</Text>
          <Flex
            css={{
              bc: '$crimson400',
              color: '$crimson11',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$pink4' }}
        >
          <Text css={{ color: '$pink11', fontSize: '$3' }}>Pink900 on Pink200</Text>
          <Flex
            css={{
              bc: '$pink400',
              color: '$pink11',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$plum4' }}
        >
          <Text css={{ color: '$plum11', fontSize: '$3' }}>Plum900 on Plum200</Text>
          <Flex
            css={{
              bc: '$plum400',
              color: '$plum11',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$purple4' }}
        >
          <Text css={{ color: '$purple11', fontSize: '$3' }}>Purple900 on Purple200</Text>
          <Flex
            css={{
              bc: '$purple400',
              color: '$purple11',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$violet4' }}
        >
          <Text css={{ color: '$violet11', fontSize: '$3' }}>Violet900 on Violet200</Text>
          <Flex
            css={{
              bc: '$violet400',
              color: '$violet11',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$indigo4' }}
        >
          <Text css={{ color: '$indigo11', fontSize: '$3' }}>Indigo900 on Indigo200</Text>
          <Flex
            css={{
              bc: '$indigo400',
              color: '$indigo11',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$blue4' }}
        >
          <Text css={{ color: '$blue11', fontSize: '$3' }}>Blue900 on Blue200</Text>
          <Flex
            css={{
              bc: '$blue400',
              color: '$blue11',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$sky4' }}
        >
          <Text css={{ color: '$sky11', fontSize: '$3' }}>Sky900 on Sky200</Text>
          <Flex
            css={{
              bc: '$sky400',
              color: '$sky11',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$cyan4' }}
        >
          <Text css={{ color: '$cyan11', fontSize: '$3' }}>Cyan900 on Cyan200</Text>
          <Flex
            css={{
              bc: '$cyan400',
              color: '$cyan11',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$teal4' }}
        >
          <Text css={{ color: '$teal11', fontSize: '$3' }}>Teal900 on Teal200</Text>
          <Flex
            css={{
              bc: '$teal400',
              color: '$teal11',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$mint4' }}
        >
          <Text css={{ color: '$mint11', fontSize: '$3' }}>Mint900 on Mint200</Text>
          <Flex
            css={{
              bc: '$mint400',
              color: '$mint11',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$green4' }}
        >
          <Text css={{ color: '$green11', fontSize: '$3' }}>Green900 on Green200</Text>
          <Flex
            css={{
              bc: '$green400',
              color: '$green11',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$lime4' }}
        >
          <Text css={{ color: '$lime11', fontSize: '$3' }}>Lime900 on Lime200</Text>
          <Flex
            css={{
              bc: '$lime400',
              color: '$lime11',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$yellow4' }}
        >
          <Text css={{ color: '$yellow11', fontSize: '$3' }}>Yellow900 on Yellow200</Text>
          <Flex
            css={{
              bc: '$yellow400',
              color: '$yellow11',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$amber4' }}
        >
          <Text css={{ color: '$amber11', fontSize: '$3' }}>Amber900 on Amber200</Text>
          <Flex
            css={{
              bc: '$amber400',
              color: '$amber11',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$orange4' }}
        >
          <Text css={{ color: '$orange11', fontSize: '$3' }}>Orange900 on Orange200</Text>
          <Flex
            css={{
              bc: '$orange400',
              color: '$orange11',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$brown4' }}
        >
          <Text css={{ color: '$brown11', fontSize: '$3' }}>Brown900 on Brown200</Text>
          <Flex
            css={{
              bc: '$brown400',
              color: '$brown11',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$bronze4' }}
        >
          <Text css={{ color: '$bronze11', fontSize: '$3' }}>Bronze900 on Bronze200</Text>
          <Flex
            css={{
              bc: '$bronze400',
              color: '$bronze11',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$gold4' }}
        >
          <Text css={{ color: '$gold11', fontSize: '$3' }}>Gold900 on Gold200</Text>
          <Flex
            css={{
              bc: '$gold400',
              color: '$gold11',
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
