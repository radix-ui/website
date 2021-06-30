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
          css={{ height: '$7', px: '$3', backgroundColor: '$gray3' }}
        >
          <Text css={{ color: '$gray11', fontSize: '$3' }}>Gray11 on Gray3</Text>
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
          css={{ height: '$7', px: '$3', backgroundColor: '$mauve3' }}
        >
          <Text css={{ color: '$mauve11', fontSize: '$3' }}>Mauve11 on Mauve3</Text>
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
          css={{ height: '$7', px: '$3', backgroundColor: '$slate3' }}
        >
          <Text css={{ color: '$slate11', fontSize: '$3' }}>Slate11 on Slate3</Text>
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
          css={{ height: '$7', px: '$3', backgroundColor: '$sage3' }}
        >
          <Text css={{ color: '$sage11', fontSize: '$3' }}>Sage11 on Sage3</Text>
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
          css={{ height: '$7', px: '$3', backgroundColor: '$olive3' }}
        >
          <Text css={{ color: '$olive11', fontSize: '$3' }}>Olive11 on Olive3</Text>
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
          css={{ height: '$7', px: '$3', backgroundColor: '$sand3' }}
        >
          <Text css={{ color: '$sand11', fontSize: '$3' }}>Sand11 on Sand3</Text>
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
          css={{ height: '$7', px: '$3', backgroundColor: '$tomato3' }}
        >
          <Text css={{ color: '$tomato11', fontSize: '$3' }}>Tomato11 on Tomato3</Text>
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
          css={{ height: '$7', px: '$3', backgroundColor: '$red3' }}
        >
          <Text css={{ color: '$red11', fontSize: '$3' }}>Red11 on Red3</Text>
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
          css={{ height: '$7', px: '$3', backgroundColor: '$crimson3' }}
        >
          <Text css={{ color: '$crimson11', fontSize: '$3' }}>Crimson11 on Crimson3</Text>
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
          css={{ height: '$7', px: '$3', backgroundColor: '$pink3' }}
        >
          <Text css={{ color: '$pink11', fontSize: '$3' }}>Pink11 on Pink3</Text>
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
          css={{ height: '$7', px: '$3', backgroundColor: '$plum3' }}
        >
          <Text css={{ color: '$plum11', fontSize: '$3' }}>Plum11 on Plum3</Text>
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
          css={{ height: '$7', px: '$3', backgroundColor: '$purple3' }}
        >
          <Text css={{ color: '$purple11', fontSize: '$3' }}>Purple11 on Purple3</Text>
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
          css={{ height: '$7', px: '$3', backgroundColor: '$violet3' }}
        >
          <Text css={{ color: '$violet11', fontSize: '$3' }}>Violet11 on Violet3</Text>
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
          css={{ height: '$7', px: '$3', backgroundColor: '$indigo3' }}
        >
          <Text css={{ color: '$indigo11', fontSize: '$3' }}>Indigo11 on Indigo3</Text>
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
          css={{ height: '$7', px: '$3', backgroundColor: '$blue3' }}
        >
          <Text css={{ color: '$blue11', fontSize: '$3' }}>Blue11 on Blue3</Text>
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
          css={{ height: '$7', px: '$3', backgroundColor: '$sky3' }}
        >
          <Text css={{ color: '$sky11', fontSize: '$3' }}>Sky11 on Sky3</Text>
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
          css={{ height: '$7', px: '$3', backgroundColor: '$cyan3' }}
        >
          <Text css={{ color: '$cyan11', fontSize: '$3' }}>Cyan11 on Cyan3</Text>
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
          css={{ height: '$7', px: '$3', backgroundColor: '$teal3' }}
        >
          <Text css={{ color: '$teal11', fontSize: '$3' }}>Teal11 on Teal3</Text>
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
          css={{ height: '$7', px: '$3', backgroundColor: '$mint3' }}
        >
          <Text css={{ color: '$mint11', fontSize: '$3' }}>Mint11 on Mint3</Text>
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
          css={{ height: '$7', px: '$3', backgroundColor: '$green3' }}
        >
          <Text css={{ color: '$green11', fontSize: '$3' }}>Green11 on Green3</Text>
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
          css={{ height: '$7', px: '$3', backgroundColor: '$lime3' }}
        >
          <Text css={{ color: '$lime11', fontSize: '$3' }}>Lime11 on Lime3</Text>
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
          css={{ height: '$7', px: '$3', backgroundColor: '$yellow3' }}
        >
          <Text css={{ color: '$yellow11', fontSize: '$3' }}>Yellow11 on Yellow3</Text>
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
          css={{ height: '$7', px: '$3', backgroundColor: '$amber3' }}
        >
          <Text css={{ color: '$amber11', fontSize: '$3' }}>Amber11 on Amber3</Text>
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
          css={{ height: '$7', px: '$3', backgroundColor: '$orange3' }}
        >
          <Text css={{ color: '$orange11', fontSize: '$3' }}>Orange11 on Orange3</Text>
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
          css={{ height: '$7', px: '$3', backgroundColor: '$brown3' }}
        >
          <Text css={{ color: '$brown11', fontSize: '$3' }}>Brown11 on Brown3</Text>
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
          css={{ height: '$7', px: '$3', backgroundColor: '$bronze3' }}
        >
          <Text css={{ color: '$bronze11', fontSize: '$3' }}>Bronze11 on Bronze3</Text>
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
          css={{ height: '$7', px: '$3', backgroundColor: '$gold3' }}
        >
          <Text css={{ color: '$gold11', fontSize: '$3' }}>Gold11 on Gold3</Text>
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
