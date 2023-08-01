import { Card, Container, Grid, Section } from '@modulz/design-system';
import { MixIcon } from '@radix-ui/react-icons';
import { MarketingCaption } from './MarketingCaption';
import { Box, Heading, Separator, Text } from '@radix-ui/themes';

export const OtherProductsSection = () => {
  return (
    <Section>
      <Container size="3">
        <Box mb="5">
          <MarketingCaption css={{ mb: '$1' }}>More from the Radix team</MarketingCaption>
          <Heading as="h2" size="8" mb="4">
            Complete suite of design system tools
          </Heading>
        </Box>

        <Grid
          gap="3"
          flow={{ '@initial': 'row', '@bp2': 'column' }}
          css={{ justifyContent: 'start', '@bp2': { gridAutoColumns: '220px' }, mb: '$8' }}
        >
          <Card as="a" target="_blank" href="/colors" variant="interactive">
            <Box p="3">
              <Box mb="3">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.75391 14.9998C1.75391 7.68444 7.6842 1.75415 14.9996 1.75415C22.3149 1.75415 28.2452 7.68444 28.2452 14.9998C28.2452 22.3151 22.3149 28.2455 14.9996 28.2455C7.6842 28.2455 1.75391 22.3151 1.75391 14.9998ZM7.56191 6.4319C9.3655 4.86489 11.6687 3.85795 14.2008 3.68183V13.0708L7.56191 6.4319ZM6.43062 7.56335C4.8644 9.36653 3.85792 11.6689 3.68166 14.2H13.0673L6.43062 7.56335ZM13.0673 15.8H3.68169C3.85806 18.3311 4.8646 20.6334 6.43085 22.4365L13.0673 15.8ZM7.56217 23.5679C9.36572 25.1348 11.6688 26.1417 14.2008 26.3178V16.9293L7.56217 23.5679ZM15.8008 16.9335V26.3176C18.3313 26.1411 20.6332 25.1347 22.436 23.5687L15.8008 16.9335ZM23.5675 22.4375C25.1342 20.6342 26.1411 18.3315 26.3174 15.8H16.9301L23.5675 22.4375ZM16.9301 14.2H26.3175C26.1412 11.6685 25.1344 9.36574 23.5677 7.56242L16.9301 14.2ZM22.4363 6.43109C20.6334 4.86504 18.3314 3.85856 15.8008 3.682V13.0666L22.4363 6.43109Z"
                    fill="currentcolor"
                  />
                </svg>
              </Box>
              <Heading as="h3" mb="2" size="4">
                Colors
              </Heading>
              <Text style={{ lineHeight: 1.5 }}>
                Beautiful, thought-out palettes with auto dark mode.
              </Text>
            </Box>
          </Card>

          <Card as="a" target="_blank" href="https://icons.radix-ui.com/" variant="interactive">
            <Box p="3">
              <Box mb="3">
                <MixIcon width="30" height="30" />
              </Box>
              <Heading as="h3" mb="2" size="4">
                Icons
              </Heading>
              <Text style={{ lineHeight: 1.5 }}>
                A crisp set of 15×15 icons, balanced and consistent.
              </Text>
            </Box>
          </Card>
        </Grid>

        <Separator size="2" />
      </Container>
    </Section>
  );
};
