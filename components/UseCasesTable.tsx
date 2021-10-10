import {
  Box,
  Text,
  Section,
  Container,
  Grid,
  Table,
  Code,
  Heading,
  Flex,
  Paragraph,
  Tr,
  Td,
  Th,
  Thead,
  Tbody,
  Tfoot,
} from '@modulz/design-system';

export function UseCasesTable() {
  return (
    <Table striped css={{ my: '$5' }}>
      <Thead>
        <Tr>
          <Th css={{ px: '$4' }}>
            <Text size="2" css={{ color: 'inherit' }}>
              Step
            </Text>
          </Th>
          <Th css={{ px: '$4' }}>
            <Text size="2" css={{ color: 'inherit' }}>
              Use Case
            </Text>
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td css={{ px: '$4' }}>
            <Text size="2">1</Text>
          </Td>
          <Td css={{ px: '$4' }}>
            <Text size="2">App background</Text>
          </Td>
        </Tr>
        <Tr>
          <Td css={{ px: '$4' }}>
            <Text size="2">2</Text>
          </Td>
          <Td css={{ px: '$4' }}>
            <Text size="2">Subtle background</Text>
          </Td>
        </Tr>
        <Tr>
          <Td css={{ px: '$4' }}>
            <Text size="2">3</Text>
          </Td>
          <Td css={{ px: '$4' }}>
            <Text size="2">UI element background</Text>
          </Td>
        </Tr>
        <Tr>
          <Td css={{ px: '$4' }}>
            <Text size="2">4</Text>
          </Td>
          <Td css={{ px: '$4' }}>
            <Text size="2">Hovered UI element background</Text>
          </Td>
        </Tr>
        <Tr>
          <Td css={{ px: '$4' }}>
            <Text size="2">5</Text>
          </Td>
          <Td css={{ px: '$4' }}>
            <Text size="2">Active / Selected UI element background</Text>
          </Td>
        </Tr>
        <Tr>
          <Td css={{ px: '$4' }}>
            <Text size="2">6</Text>
          </Td>
          <Td css={{ px: '$4' }}>
            <Text size="2">Subtle borders and separators</Text>
          </Td>
        </Tr>
        <Tr>
          <Td css={{ px: '$4' }}>
            <Text size="2">7</Text>
          </Td>
          <Td css={{ px: '$4' }}>
            <Text size="2">UI element border and focus rings</Text>
          </Td>
        </Tr>
        <Tr>
          <Td css={{ px: '$4' }}>
            <Text size="2">8</Text>
          </Td>
          <Td css={{ px: '$4' }}>
            <Text size="2">Hovered UI element border</Text>
          </Td>
        </Tr>
        <Tr>
          <Td css={{ px: '$4' }}>
            <Text size="2">9</Text>
          </Td>
          <Td css={{ px: '$4' }}>
            <Text size="2">Solid backgrounds</Text>
          </Td>
        </Tr>
        <Tr>
          <Td css={{ px: '$4' }}>
            <Text size="2">10</Text>
          </Td>
          <Td css={{ px: '$4' }}>
            <Text size="2">Hovered solid backgrounds</Text>
          </Td>
        </Tr>
        <Tr>
          <Td css={{ px: '$4' }}>
            <Text size="2">11</Text>
          </Td>
          <Td css={{ px: '$4' }}>
            <Text size="2">Low-contrast text</Text>
          </Td>
        </Tr>
        <Tr>
          <Td css={{ px: '$4' }}>
            <Text size="2">12</Text>
          </Td>
          <Td css={{ px: '$4' }}>
            <Text size="2">High-contrast text</Text>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
}
