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

export function ColorTestTextLarge() {
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
          css={{ height: '$7', px: '$3', backgroundColor: '$gray10' }}
        >
          <Text
            css={{
              color: 'white',
              fontSize: '$5',
              fontWeight: 600,
              fontFamily: 'system-ui, helvetica, sans-serif',
            }}
          >
            White text on Gray200
          </Text>
          <Flex
            css={{
              bc: '$gray11',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$mauve10' }}
        >
          <Text
            css={{
              color: 'white',
              fontSize: '$5',
              fontWeight: 600,
              fontFamily: 'system-ui, helvetica, sans-serif',
            }}
          >
            White text on Mauve200
          </Text>
          <Flex
            css={{
              bc: '$mauve11',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$slate10' }}
        >
          <Text
            css={{
              color: 'white',
              fontSize: '$5',
              fontWeight: 600,
              fontFamily: 'system-ui, helvetica, sans-serif',
            }}
          >
            White text on Slate200
          </Text>
          <Flex
            css={{
              bc: '$slate11',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$sage10' }}
        >
          <Text
            css={{
              color: 'white',
              fontSize: '$5',
              fontWeight: 600,
              fontFamily: 'system-ui, helvetica, sans-serif',
            }}
          >
            White text on Sage200
          </Text>
          <Flex
            css={{
              bc: '$sage11',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$olive10' }}
        >
          <Text
            css={{
              color: 'white',
              fontSize: '$5',
              fontWeight: 600,
              fontFamily: 'system-ui, helvetica, sans-serif',
            }}
          >
            White text on Olive200
          </Text>
          <Flex
            css={{
              bc: '$olive11',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$sand10' }}
        >
          <Text
            css={{
              color: 'white',
              fontSize: '$5',
              fontWeight: 600,
              fontFamily: 'system-ui, helvetica, sans-serif',
            }}
          >
            White text on Sand200
          </Text>
          <Flex
            css={{
              bc: '$sand11',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$tomato10' }}
        >
          <Text
            css={{
              color: 'white',
              fontSize: '$5',
              fontWeight: 600,
              fontFamily: 'system-ui, helvetica, sans-serif',
            }}
          >
            White text on Tomato200
          </Text>
          <Flex
            css={{
              bc: '$tomato11',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$red10' }}
        >
          <Text
            css={{
              color: 'white',
              fontSize: '$5',
              fontWeight: 600,
              fontFamily: 'system-ui, helvetica, sans-serif',
            }}
          >
            White text on Red200
          </Text>
          <Flex
            css={{
              bc: '$red11',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$crimson10' }}
        >
          <Text
            css={{
              color: 'white',
              fontSize: '$5',
              fontWeight: 600,
              fontFamily: 'system-ui, helvetica, sans-serif',
            }}
          >
            White text on Crimson200
          </Text>
          <Flex
            css={{
              bc: '$crimson11',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$pink10' }}
        >
          <Text
            css={{
              color: 'white',
              fontSize: '$5',
              fontWeight: 600,
              fontFamily: 'system-ui, helvetica, sans-serif',
            }}
          >
            White text on Pink200
          </Text>
          <Flex
            css={{
              bc: '$pink11',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$plum10' }}
        >
          <Text
            css={{
              color: 'white',
              fontSize: '$5',
              fontWeight: 600,
              fontFamily: 'system-ui, helvetica, sans-serif',
            }}
          >
            White text on Plum200
          </Text>
          <Flex
            css={{
              bc: '$plum11',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$purple10' }}
        >
          <Text
            css={{
              color: 'white',
              fontSize: '$5',
              fontWeight: 600,
              fontFamily: 'system-ui, helvetica, sans-serif',
            }}
          >
            White text on Purple200
          </Text>
          <Flex
            css={{
              bc: '$purple11',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$violet10' }}
        >
          <Text
            css={{
              color: 'white',
              fontSize: '$5',
              fontWeight: 600,
              fontFamily: 'system-ui, helvetica, sans-serif',
            }}
          >
            White text on Violet200
          </Text>
          <Flex
            css={{
              bc: '$violet11',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$indigo10' }}
        >
          <Text
            css={{
              color: 'white',
              fontSize: '$5',
              fontWeight: 600,
              fontFamily: 'system-ui, helvetica, sans-serif',
            }}
          >
            White text on Indigo200
          </Text>
          <Flex
            css={{
              bc: '$indigo11',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$blue10' }}
        >
          <Text
            css={{
              color: 'white',
              fontSize: '$5',
              fontWeight: 600,
              fontFamily: 'system-ui, helvetica, sans-serif',
            }}
          >
            White text on Blue200
          </Text>
          <Flex
            css={{
              bc: '$blue11',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$cyan10' }}
        >
          <Text
            css={{
              color: 'white',
              fontSize: '$5',
              fontWeight: 600,
              fontFamily: 'system-ui, helvetica, sans-serif',
            }}
          >
            White text on Cyan200
          </Text>
          <Flex
            css={{
              bc: '$cyan11',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$teal10' }}
        >
          <Text
            css={{
              color: 'white',
              fontSize: '$5',
              fontWeight: 600,
              fontFamily: 'system-ui, helvetica, sans-serif',
            }}
          >
            White text on Teal200
          </Text>
          <Flex
            css={{
              bc: '$teal11',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$green10' }}
        >
          <Text
            css={{
              color: 'white',
              fontSize: '$5',
              fontWeight: 600,
              fontFamily: 'system-ui, helvetica, sans-serif',
            }}
          >
            White text on Green200
          </Text>
          <Flex
            css={{
              bc: '$green11',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$orange10' }}
        >
          <Text
            css={{
              color: 'white',
              fontSize: '$5',
              fontWeight: 600,
              fontFamily: 'system-ui, helvetica, sans-serif',
            }}
          >
            White text on Orange200
          </Text>
          <Flex
            css={{
              bc: '$orange11',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$brown10' }}
        >
          <Text
            css={{
              color: 'white',
              fontSize: '$5',
              fontWeight: 600,
              fontFamily: 'system-ui, helvetica, sans-serif',
            }}
          >
            White text on Brown200
          </Text>
          <Flex
            css={{
              bc: '$brown11',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$bronze10' }}
        >
          <Text
            css={{
              color: 'white',
              fontSize: '$5',
              fontWeight: 600,
              fontFamily: 'system-ui, helvetica, sans-serif',
            }}
          >
            White text on Bronze200
          </Text>
          <Flex
            css={{
              bc: '$bronze11',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$gold10' }}
        >
          <Text
            css={{
              color: 'white',
              fontSize: '$5',
              fontWeight: 600,
              fontFamily: 'system-ui, helvetica, sans-serif',
            }}
          >
            White text on Gold200
          </Text>
          <Flex
            css={{
              bc: '$gold11',
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
