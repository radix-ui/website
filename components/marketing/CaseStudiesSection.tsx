import {
  AccessibleIcon,
  Avatar,
  Box,
  Flex,
  Grid,
  Section,
  Container,
  Heading,
  Card,
  Text,
  Link,
} from '@radix-ui/themes';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import NextLink from 'next/link';
import { CaseStudyLogo } from './CaseStudyLogo';
import { LogoLink } from './LogoLink';
import { MarketingCaption } from './MarketingCaption';
import { HiddenScroll } from './HiddenScroll';

export const CaseStudiesSection = () => {
  return (
    <Section size={{ initial: '2', md: '4' }}>
      <Container mx={{ initial: '5', xs: '6', sm: '7', md: '9' }}>
        <Box mb="5">
          <MarketingCaption mb="1">Case studies</MarketingCaption>
          <Heading as="h2" size="7" style={{ maxWidth: 500 }}>
            World-class teams use Radix Primitives to power their products
          </Heading>
        </Box>

        <Grid columns={{ sm: '2' }} gap="5" mb="6">
          <NextLink passHref legacyBehavior href="/primitives/case-studies/nodejs">
            <Card asChild size="3">
              <a>
                <Box mb="5" height="24px">
                  <AccessibleIcon label="Node.js case study">
                    <Box asChild position="relative" top="-10px">
                      <CaseStudyLogo variant="Node.js" />
                    </Box>
                  </AccessibleIcon>
                </Box>
                <Text as="p" size="3" mb="4" style={{ textIndent: '-0.5em' }}>
                  “Radix Primitives are crucial for the Node.js website and are a significant part
                  of Node’s Web Design System. It allows our engineers to focus on what matters and
                  create delightful experiences for the community.”
                </Text>
                <Flex align="center" gap="3">
                  <Avatar
                    size="3"
                    fallback="R"
                    radius="full"
                    src="/marketing/avatar-claudio-wunder.jpg"
                    aria-labelledby="person1"
                  />
                  <Text color="gray" size="3" id="person1">
                    Claudio Wunder, Node.js Core Collaborator
                  </Text>
                </Flex>
              </a>
            </Card>
          </NextLink>
          <NextLink passHref legacyBehavior href="/primitives/case-studies/vercel">
            <Card asChild size="3">
              <a>
                <Box mb="5" height="24px">
                  <AccessibleIcon label="Vercel case study">
                    <CaseStudyLogo variant="Vercel" />
                  </AccessibleIcon>
                </Box>
                <Text as="p" size="3" mb="4" style={{ textIndent: '-0.5em' }}>
                  “We’ve been able to focus on building solid user experiences on top of Radix
                  Primitives. With UI components, there are just too many angles and rabbit holes to
                  cover for product teams that wish to move quickly.”
                </Text>
                <Flex align="center" gap="3">
                  <Avatar
                    size="3"
                    fallback="R"
                    radius="full"
                    src="/marketing/avatar-rauno-freiberg.jpg"
                    aria-labelledby="person2"
                  />
                  <Text color="gray" size="3" id="person2">
                    Rauno Freiberg, UI Engineer at Vercel
                  </Text>
                </Flex>
              </a>
            </Card>
          </NextLink>
        </Grid>

        <NextLink href="/primitives/case-studies" passHref legacyBehavior>
          <Link
            size="2"
            color="gray"
            mb="4"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-1)' }}
          >
            And dozens more companies
            <ArrowRightIcon style={{ marginBottom: -2 }} />
          </Link>
        </NextLink>

        <HiddenScroll
          position="relative"
          // Add some padding so that logos aren't clipped when focused.
          py="3"
          my="-3"
          // Compensate Container margins
          mx={{ initial: '-5', xs: '-6', sm: '-7', md: '-9' }}
          px={{ initial: '5', xs: '6', sm: '7', md: '9' }}
        >
          <Grid columns="none" flow="column" align="center" justify="start" gap="6">
            <NextLink href="/primitives/case-studies/basedash" passHref legacyBehavior>
              <LogoLink>
                <AccessibleIcon label="Basedash case study">
                  <CaseStudyLogo variant="Basedash" width="135" />
                </AccessibleIcon>
              </LogoLink>
            </NextLink>

            <NextLink href="/primitives/case-studies/basement-studio" passHref legacyBehavior>
              <LogoLink style={{ marginBottom: -6 }}>
                <AccessibleIcon label="basement.studio case study">
                  <CaseStudyLogo variant="basement.studio" width="120" />
                </AccessibleIcon>
              </LogoLink>
            </NextLink>

            <NextLink href="/primitives/case-studies/codesandbox" passHref legacyBehavior>
              <LogoLink style={{ marginBottom: -4 }}>
                <AccessibleIcon label="CodeSandbox case study">
                  <CaseStudyLogo variant="CodeSandbox" width="160" />
                </AccessibleIcon>
              </LogoLink>
            </NextLink>

            <NextLink href="/primitives/case-studies/linear" passHref legacyBehavior>
              <LogoLink>
                <AccessibleIcon label="Linear case study">
                  <CaseStudyLogo variant="Linear" width="105" />
                </AccessibleIcon>
              </LogoLink>
            </NextLink>

            <NextLink href="/primitives/case-studies/liveblocks" passHref legacyBehavior>
              <LogoLink style={{ marginBottom: -3 }}>
                <AccessibleIcon label="Liveblocks case study">
                  <CaseStudyLogo variant="Liveblocks" width="135" />
                </AccessibleIcon>
              </LogoLink>
            </NextLink>

            <NextLink href="/primitives/case-studies/supabase" passHref legacyBehavior>
              <LogoLink style={{ marginBottom: -2 }}>
                <AccessibleIcon label="Supabase case study">
                  <CaseStudyLogo variant="Supabase" width="140" />
                </AccessibleIcon>
              </LogoLink>
            </NextLink>

            <NextLink
              href="/primitives/case-studies/university-of-amsterdam"
              passHref
              legacyBehavior
            >
              <LogoLink style={{ marginTop: 2 }}>
                <AccessibleIcon label="University of Amsterdam case study">
                  <CaseStudyLogo variant="University of Amsterdam" width="152" />
                </AccessibleIcon>
              </LogoLink>
            </NextLink>

            {/* Horizontal scroll spacer */}
            <div style={{ width: 1, height: 1 }} />
          </Grid>
        </HiddenScroll>
      </Container>
    </Section>
  );
};
