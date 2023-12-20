import { AvatarIconFallback } from '@components/AvatarIconFallback';
import { ColorField } from '@components/ColorField';
import { ColorsHeader } from '@components/ColorsHeader';
import { ColorsMobileMenu } from '@components/ColorsMobileMenu';
import { DocsNav } from '@components/DocsNav';
import { DocsPageWrapper } from '@components/DocsPageWrapper';
import { DocsPagination } from '@components/DocsPagination';
import { EditPageLink } from '@components/EditPageLink';
import { ExampleThemesDashboard } from '@components/ExampleThemesDashboard';
import { MobileMenuProvider } from '@components/MobileMenu';
import { SideNav } from '@components/SideNav';
import { Swatch } from '@components/Swatch';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import { allColorsRoutes, colorsRoutes } from '@lib/colorsRoutes';
import { getPeopleForColor } from '@lib/people';
import { ArrowRightIcon, InfoCircledIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons';
import {
  Avatar,
  Badge,
  Box,
  Button,
  CalloutIcon,
  CalloutRoot,
  CalloutText,
  Card,
  Container,
  Flex,
  Grid,
  Heading,
  IconButton,
  Link,
  Section,
  Select,
  SelectRoot,
  Separator,
  Text,
  TextField,
  TextFieldInput,
  TextFieldRoot,
  TextFieldSlot,
  Theme,
  avatarPropDefs,
  badgePropDefs,
  buttonPropDefs,
  calloutRootPropDefs,
  cardPropDefs,
  textFieldPropDefs,
} from '@radix-ui/themes';
import Head from 'next/head';
import * as React from 'react';

const colors = [undefined, 'gray'] as const;
const highContrast = [undefined, true] as const;

export default function ColorsNew() {
  const accent = 'indigo';

  return (
    <MobileMenuProvider>
      <ColorsHeader />
      <ColorsMobileMenu />

      {/* TODO */}
      <TitleAndMetaTags
        title="Create your colors – Radix Colors"
        description="An open-source color system for designing beautiful, accessible websites and apps."
        image="colors.png"
      />

      {/* <SideNav borderRight>
          <Theme asChild accentColor="gray">
            <Box pt="5" px="5" pb="9">
              <Flex direction="column" gap="5">


                <Flex direction="column">
                  <Label htmlFor="key-color">Key color</Label>
                  <ColorField defaultValue="#3D63DD" id="key-color" />
                </Flex>

                <Flex direction="column">
                  <Label htmlFor="bg-color">Page background</Label>
                  <ColorField defaultValue="#FFFFFF" id="bg-color" />
                </Flex>

                <Button highContrast>Save</Button>
              </Flex>
            </Box>
          </Theme>
        </SideNav> */}

      <Theme asChild accentColor={accent} className="radix-themes-default-fonts">
        <Section px={{ initial: '5', xs: '6', sm: '7', md: '9' }} size={{ initial: '2', md: '3' }}>
          <Container>
            <Heading mb="5">Scales</Heading>

            <Grid columns="12" gap="1" mb="1">
              {Array.from({ length: 12 }, (_, i) => i + 1).map((step) => (
                <Swatch key={step} scale="indigo" step={step.toString()} />
              ))}
            </Grid>

            <Grid columns="12" gap="1" mb="8">
              {Array.from({ length: 12 }, (_, i) => i + 1).map((step) => (
                <Swatch key={step} scale="gray" step={step.toString()} />
              ))}
            </Grid>

            <Heading mb="5">Components</Heading>

            <Flex align="start" gap="6">
              <Grid gap="6" columns="min-content">
                {/* * * * * * * * * * * * * * * * * Button * * * * * * * * * * * * * * * * */}
                <Grid gap="4" columns="repeat(5, auto)">
                  {buttonPropDefs.variant.values.map((variant, i) => (
                    <React.Fragment key={i}>
                      {colors.map((color, ii) =>
                        highContrast.map((highContrast, iii) => (
                          <Flex key={i + ii + iii} justify="center">
                            <Button color={color} variant={variant} highContrast={highContrast}>
                              Next <ArrowRightIcon width="16" height="16" />
                            </Button>
                          </Flex>
                        ))
                      )}

                      <Flex justify="center">
                        <Button disabled color="gray" variant={variant}>
                          Next <ArrowRightIcon width="16" height="16" />
                        </Button>
                      </Flex>
                    </React.Fragment>
                  ))}
                </Grid>

                <Grid gap="6" columns="2">
                  {/* * * * * * * * * * * * * * * * TextField * * * * * * * * * * * * * * * */}
                  <Grid gap="4">
                    {textFieldPropDefs.variant.values.map((variant, i) => (
                      <TextFieldRoot key={i} variant={variant}>
                        <TextFieldSlot>
                          <MagnifyingGlassIcon width="16" height="16" />
                        </TextFieldSlot>
                        <TextFieldInput placeholder="Search" />
                        <TextFieldSlot>
                          <IconButton variant="ghost" color="gray" size="1">
                            <InfoCircledIcon />
                          </IconButton>
                        </TextFieldSlot>
                      </TextFieldRoot>
                    ))}

                    <TextFieldRoot variant="soft" color="gray">
                      <TextFieldSlot>
                        <MagnifyingGlassIcon width="16" height="16" />
                      </TextFieldSlot>
                      <TextFieldInput placeholder="Search" />
                      <TextFieldSlot>
                        <IconButton variant="ghost" color="gray" size="1">
                          <InfoCircledIcon />
                        </IconButton>
                      </TextFieldSlot>
                    </TextFieldRoot>
                  </Grid>

                  <Box></Box>
                </Grid>
              </Grid>

              {/* * * * * * * * * * * * * * * * * Callout * * * * * * * * * * * * * * * * */}
              <Flex direction="column" justify="between" gap="4">
                {colors.map((color, i) =>
                  calloutRootPropDefs.variant.values.map((variant, ii) => (
                    <CalloutRoot key={i + ii} color={color} variant={variant}>
                      <CalloutIcon>
                        <InfoCircledIcon width="16" height="16" />
                      </CalloutIcon>
                      <CalloutText>
                        Please <Link href="#">upgrade</Link> to the new version.
                      </CalloutText>
                    </CalloutRoot>
                  ))
                )}
              </Flex>

              <Flex direction="column" justify="between" gap="4">
                {['classic', 'surface'].map((variant, ii) => (
                  <Card asChild variant={variant} size="2" mr="2">
                    <a href="#card">
                      <Flex align="center" gap="3">
                        <Avatar size="4" src={getPeopleForColor('gray')[0].image} fallback="V" />
                        <Box>
                          <Text as="div" weight="medium" size="3">
                            Emily Adams
                          </Text>

                          <Text as="div" color="gray" size="2">
                            emily.adams@example.com
                          </Text>
                        </Box>
                      </Flex>
                    </a>
                  </Card>
                ))}
              </Flex>
            </Flex>

            <Flex gap="6"></Flex>
          </Container>
        </Section>
      </Theme>
    </MobileMenuProvider>
  );
}

const Label = (props: React.ComponentProps<'label'>) => (
  <Flex mb="2">
    {/* To match docs heading sizing */}
    <Heading asChild weight="bold" size="2">
      <label {...props} />
    </Heading>
  </Flex>
);
