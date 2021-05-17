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
    <Table striped>
      <Thead>
        <Tr>
          <Td>Step</Td>
          <Td>Use Case</Td>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>000</Td>
          <Td>App background</Td>
        </Tr>
        <Tr>
          <Td>100</Td>
          <Td>Subtle background</Td>
        </Tr>
        <Tr>
          <Td>200</Td>
          <Td>UI element background</Td>
        </Tr>
        <Tr>
          <Td>300</Td>
          <Td>Hovered UI element background.</Td>
        </Tr>
        <Tr>
          <Td>400</Td>
          <Td>Active / Selected UI element background.</Td>
        </Tr>
        <Tr>
          <Td>500</Td>
          <Td>Subtle borders and separators.</Td>
        </Tr>
        <Tr>
          <Td>600</Td>
          <Td>UI element border</Td>
        </Tr>
        <Tr>
          <Td>700</Td>
          <Td>Hovered UI element border</Td>
        </Tr>
        <Tr>
          <Td>800</Td>
          <Td>Solid backgrounds.</Td>
        </Tr>
        <Tr>
          <Td>900</Td>
          <Td>Low contrast text.</Td>
        </Tr>
        <Tr>
          <Td>1000</Td>
          <Td>High contrast text.</Td>
        </Tr>
      </Tbody>
    </Table>
  );
}
