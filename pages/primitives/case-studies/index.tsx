import { Footer } from '@components/Footer';
import { MobileMenuProvider } from '@components/MobileMenu';
import { PrimitivesHeader } from '@components/PrimitivesHeader';
import { PrimitivesMobileMenu } from '@components/PrimitivesMobileMenu';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import { CaseStudyLogo } from '@components/marketing/CaseStudyLogo';
import { LogoLink } from '@components/marketing/LogoLink';
import { Root as AccessibleIcon } from '@radix-ui/react-accessible-icon';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Link,
  Section,
  Separator,
  Text,
} from '@radix-ui/themes';
import NextLink from 'next/link';

export default function CaseStudy() {
  return (
    <MobileMenuProvider>
      <TitleAndMetaTags
        title="Case studies – Radix UI"
        description="An open-source React component library for building high-quality, accessible design systems and web apps."
        image="primitives.png"
      />

      <PrimitivesMobileMenu />
      <PrimitivesHeader />

      <Container mx={{ initial: '5', xs: '6', sm: '7', md: '9' }}>
        <Section size={{ initial: '2', md: '3' }}>
          <Flex direction="column" align="center" mb="5">
            <Heading size="8" mb="2" align="center">
              Case studies
            </Heading>
            <Text align="center" size="4" mb="3" as="p" style={{ maxWidth: 480 }} color="gray">
              Learn how teams behind everyone’s favorite products use Radix to save time, boost
              quality, and set the bar for accessibility.
            </Text>
          </Flex>
          <Grid
            align="center"
            columns={{ initial: '1', sm: '2', md: '3' }}
            mb="8"
            style={{ gap: 1, placeItems: 'stretch', gridAutoRows: '200px' }}
          >
            <NextLink href="/primitives/case-studies/acid-tango" passHref legacyBehavior>
              <LogoLink variant="box">
                <AccessibleIcon label="Acid Tango case study">
                  <Flex justify="center" style={{ height: '100%' }}>
                    <CaseStudyLogo variant="Acid Tango" />
                  </Flex>
                </AccessibleIcon>
              </LogoLink>
            </NextLink>
            <NextLink href="/primitives/case-studies/atom-learning" passHref legacyBehavior>
              <LogoLink variant="box">
                <AccessibleIcon label="Atom Learning case study">
                  <Flex justify="center" style={{ height: '100%' }}>
                    <CaseStudyLogo variant="Atom Learning" />
                  </Flex>
                </AccessibleIcon>
              </LogoLink>
            </NextLink>
            <NextLink href="/primitives/case-studies/basedash" passHref legacyBehavior>
              <LogoLink variant="box">
                <AccessibleIcon label="Basedash case study">
                  <Flex justify="center" style={{ height: '100%' }}>
                    <CaseStudyLogo variant="Basedash" />
                  </Flex>
                </AccessibleIcon>
              </LogoLink>
            </NextLink>
            <NextLink href="/primitives/case-studies/basement-studio" passHref legacyBehavior>
              <LogoLink variant="box">
                <AccessibleIcon label="basement.studio case study">
                  <Flex justify="center" style={{ height: '100%' }}>
                    <CaseStudyLogo variant="basement.studio" />
                  </Flex>
                </AccessibleIcon>
              </LogoLink>
            </NextLink>
            <NextLink href="/primitives/case-studies/codesandbox" passHref legacyBehavior>
              <LogoLink variant="box">
                <AccessibleIcon label="CodeSandbox case study">
                  <Flex justify="center" style={{ height: '100%' }}>
                    <CaseStudyLogo variant="CodeSandbox" />
                  </Flex>
                </AccessibleIcon>
              </LogoLink>
            </NextLink>
            <NextLink href="/primitives/case-studies/composer" passHref legacyBehavior>
              <LogoLink variant="box">
                <AccessibleIcon label="Composer case study">
                  <Flex justify="center" style={{ height: '100%' }}>
                    <CaseStudyLogo variant="Composer" />
                  </Flex>
                </AccessibleIcon>
              </LogoLink>
            </NextLink>
            <NextLink href="/primitives/case-studies/compound" passHref legacyBehavior>
              <LogoLink variant="box">
                <AccessibleIcon label="Compound case study">
                  <Flex justify="center" style={{ height: '100%' }}>
                    <CaseStudyLogo variant="Compound" />
                  </Flex>
                </AccessibleIcon>
              </LogoLink>
            </NextLink>
            <NextLink href="/primitives/case-studies/linear" passHref legacyBehavior>
              <LogoLink variant="box">
                <AccessibleIcon label="Linear case study">
                  <Flex justify="center" style={{ height: '100%' }}>
                    <CaseStudyLogo variant="Linear" />
                  </Flex>
                </AccessibleIcon>
              </LogoLink>
            </NextLink>
            <NextLink href="/primitives/case-studies/liveblocks" passHref legacyBehavior>
              <LogoLink variant="box">
                <AccessibleIcon label="Liveblocks case study">
                  <Flex justify="center" style={{ height: '100%' }}>
                    <CaseStudyLogo variant="Liveblocks" />
                  </Flex>
                </AccessibleIcon>
              </LogoLink>
            </NextLink>
            <NextLink href="/primitives/case-studies/magnetis" passHref legacyBehavior>
              <LogoLink variant="box">
                <AccessibleIcon label="Magnetis case study">
                  <Flex justify="center" style={{ height: '100%' }}>
                    <CaseStudyLogo variant="Magnetis" />
                  </Flex>
                </AccessibleIcon>
              </LogoLink>
            </NextLink>
            <NextLink href="/primitives/case-studies/supabase" passHref legacyBehavior>
              <LogoLink variant="box">
                <AccessibleIcon label="Supabase case study">
                  <Flex justify="center" style={{ height: '100%' }}>
                    <CaseStudyLogo variant="Supabase" />
                  </Flex>
                </AccessibleIcon>
              </LogoLink>
            </NextLink>
            <NextLink href="/primitives/case-studies/teamflow" passHref legacyBehavior>
              <LogoLink variant="box">
                <AccessibleIcon label="Teamflow case study">
                  <Flex justify="center" style={{ height: '100%' }}>
                    <CaseStudyLogo variant="Teamflow" />
                  </Flex>
                </AccessibleIcon>
              </LogoLink>
            </NextLink>
            <NextLink
              href="/primitives/case-studies/university-of-amsterdam"
              passHref
              legacyBehavior
            >
              <LogoLink variant="box">
                <AccessibleIcon label="University of Amsterdam case study">
                  <Flex justify="center" style={{ height: '100%' }}>
                    <CaseStudyLogo variant="University of Amsterdam" />
                  </Flex>
                </AccessibleIcon>
              </LogoLink>
            </NextLink>
            <NextLink href="/primitives/case-studies/vercel" passHref legacyBehavior>
              <LogoLink variant="box">
                <AccessibleIcon label="Vercel case study">
                  <Flex justify="center" style={{ height: '100%' }}>
                    <CaseStudyLogo variant="Vercel" />
                  </Flex>
                </AccessibleIcon>
              </LogoLink>
            </NextLink>
          </Grid>

          <Separator size="2" mb="8" style={{ marginLeft: 'auto', marginRight: 'auto' }} />

          <Box mb="5" style={{ maxWidth: 480, marginLeft: 'auto', marginRight: 'auto' }}>
            <Heading mb="2" size="4" as="h2" align="center">
              Do you use Radix at your company?
            </Heading>

            <Text align="center" as="p">
              We’d love to hear how you use Radix Primitives.
              <Flex align="center" gap="2" asChild style={{ display: 'inline-flex' }}>
                <Link
                  href="https://form.typeform.com/to/FxOiONsk"
                  target="_blank"
                  highContrast
                  color="gray"
                >
                  Submit your case study
                  <ArrowTopRightIcon />
                </Link>
              </Flex>
            </Text>
          </Box>
        </Section>

        <Footer />
      </Container>
    </MobileMenuProvider>
  );
}
