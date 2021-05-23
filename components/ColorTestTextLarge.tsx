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
          css={{ height: '$7', px: '$3', backgroundColor: '$gray800' }}
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
              bc: '$gray900',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$quartz800' }}
        >
          <Text
            css={{
              color: 'white',
              fontSize: '$5',
              fontWeight: 600,
              fontFamily: 'system-ui, helvetica, sans-serif',
            }}
          >
            White text on Quartz200
          </Text>
          <Flex
            css={{
              bc: '$quartz900',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$slate800' }}
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
              bc: '$slate900',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$sage800' }}
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
              bc: '$sage900',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$olive800' }}
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
              bc: '$olive900',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$sand800' }}
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
              bc: '$sand900',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$tomato800' }}
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
              bc: '$tomato900',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$red800' }}
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
              bc: '$red900',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$crimson800' }}
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
              bc: '$crimson900',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$pink800' }}
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
              bc: '$pink900',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$plum800' }}
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
              bc: '$plum900',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$purple800' }}
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
              bc: '$purple900',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$violet800' }}
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
              bc: '$violet900',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$indigo800' }}
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
              bc: '$indigo900',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$blue800' }}
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
              bc: '$blue900',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$cyan800' }}
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
              bc: '$cyan900',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$teal800' }}
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
              bc: '$teal900',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$green800' }}
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
              bc: '$green900',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$orange800' }}
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
              bc: '$orange900',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$brown800' }}
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
              bc: '$brown900',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$bronze800' }}
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
              bc: '$bronze900',
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
          css={{ height: '$7', px: '$3', backgroundColor: '$gold800' }}
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
              bc: '$gold900',
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
