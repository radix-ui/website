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
          <Text css={{ color: '$gray11', fontSize: '$3' }}>Gray 11 on Gray 3</Text>
          <Flex
            css={{
              bc: '$gray5',
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
          <Text css={{ color: '$mauve11', fontSize: '$3' }}>Mauve 11 on Mauve 3</Text>
          <Flex
            css={{
              bc: '$mauve5',
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
          <Text css={{ color: '$slate11', fontSize: '$3' }}>Slate 11 on Slate 3</Text>
          <Flex
            css={{
              bc: '$slate5',
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
          <Text css={{ color: '$sage11', fontSize: '$3' }}>Sage 11 on Sage 3</Text>
          <Flex
            css={{
              bc: '$sage5',
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
          <Text css={{ color: '$olive11', fontSize: '$3' }}>Olive 11 on Olive 3</Text>
          <Flex
            css={{
              bc: '$olive5',
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
          <Text css={{ color: '$sand11', fontSize: '$3' }}>Sand 11 on Sand 3</Text>
          <Flex
            css={{
              bc: '$sand5',
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
          <Text css={{ color: '$tomato11', fontSize: '$3' }}>Tomato 11 on Tomato 3</Text>
          <Flex
            css={{
              bc: '$tomato5',
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
          <Text css={{ color: '$red11', fontSize: '$3' }}>Red 11 on Red 3</Text>
          <Flex
            css={{
              bc: '$red5',
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
          <Text css={{ color: '$crimson11', fontSize: '$3' }}>Crimson 11 on Crimson 3</Text>
          <Flex
            css={{
              bc: '$crimson5',
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
          <Text css={{ color: '$pink11', fontSize: '$3' }}>Pink 11 on Pink 3</Text>
          <Flex
            css={{
              bc: '$pink5',
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
          <Text css={{ color: '$plum11', fontSize: '$3' }}>Plum 11 on Plum 3</Text>
          <Flex
            css={{
              bc: '$plum5',
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
          <Text css={{ color: '$purple11', fontSize: '$3' }}>Purple 11 on Purple 3</Text>
          <Flex
            css={{
              bc: '$purple5',
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
          <Text css={{ color: '$violet11', fontSize: '$3' }}>Violet 11 on Violet 3</Text>
          <Flex
            css={{
              bc: '$violet5',
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
          <Text css={{ color: '$indigo11', fontSize: '$3' }}>Indigo 11 on Indigo 3</Text>
          <Flex
            css={{
              bc: '$indigo5',
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
          <Text css={{ color: '$blue11', fontSize: '$3' }}>Blue 11 on Blue 3</Text>
          <Flex
            css={{
              bc: '$blue5',
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
          <Text css={{ color: '$sky11', fontSize: '$3' }}>Sky 11 on Sky 3</Text>
          <Flex
            css={{
              bc: '$sky5',
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
          <Text css={{ color: '$cyan11', fontSize: '$3' }}>Cyan 11 on Cyan 3</Text>
          <Flex
            css={{
              bc: '$cyan5',
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
          <Text css={{ color: '$teal11', fontSize: '$3' }}>Teal 11 on Teal 3</Text>
          <Flex
            css={{
              bc: '$teal5',
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
          <Text css={{ color: '$mint11', fontSize: '$3' }}>Mint 11 on Mint 3</Text>
          <Flex
            css={{
              bc: '$mint5',
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
          <Text css={{ color: '$green11', fontSize: '$3' }}>Green 11 on Green 3</Text>
          <Flex
            css={{
              bc: '$green5',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$grass3' }}
        >
          <Text css={{ color: '$grass11', fontSize: '$3' }}>Grass 11 on Grass 3</Text>
          <Flex
            css={{
              bc: '$grass5',
              color: '$grass11',
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
          <Text css={{ color: '$lime11', fontSize: '$3' }}>Lime 11 on Lime 3</Text>
          <Flex
            css={{
              bc: '$lime5',
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
          <Text css={{ color: '$yellow11', fontSize: '$3' }}>Yellow 11 on Yellow 3</Text>
          <Flex
            css={{
              bc: '$yellow5',
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
          <Text css={{ color: '$amber11', fontSize: '$3' }}>Amber 11 on Amber 3</Text>
          <Flex
            css={{
              bc: '$amber5',
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
          <Text css={{ color: '$orange11', fontSize: '$3' }}>Orange 11 on Orange 3</Text>
          <Flex
            css={{
              bc: '$orange5',
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
          <Text css={{ color: '$brown11', fontSize: '$3' }}>Brown 11 on Brown 3</Text>
          <Flex
            css={{
              bc: '$brown5',
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
          <Text css={{ color: '$bronze11', fontSize: '$3' }}>Bronze 11 on Bronze 3</Text>
          <Flex
            css={{
              bc: '$bronze5',
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
          <Text css={{ color: '$gold11', fontSize: '$3' }}>Gold 11 on Gold 3</Text>
          <Flex
            css={{
              bc: '$gold5',
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
