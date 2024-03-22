import * as React from 'react';
import {
  Box,
  Card,
  Container,
  Flex,
  Heading,
  Inset,
  Link,
  Section,
  Separator,
  Text,
} from '@radix-ui/themes';
import { MobileMenuProvider } from '@components/MobileMenu';
import { BlogHeader } from '@components/BlogHeader';
import { BlogMobileMenu } from '@components/BlogMobileMenu';
import { getAllFrontmatter } from '@utils/mdx';
import NextLink from 'next/link';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { CommunitySection } from '@components/marketing/CommunitySection';
import { Footer } from '@components/Footer';
import { Frontmatter } from 'types/frontmatter';

type Blog = {
  frontmatters: Frontmatter[];
};

export default function RadixBlog({ frontmatters }: Blog) {
  return (
    <>
      <MobileMenuProvider>
        <BlogHeader />
        <BlogMobileMenu />

        <Section size={{ initial: '2', md: '4' }}>
          <Container mx={{ initial: '5', xs: '6', sm: '7', md: '9' }}>
            {' '}
            <Box>
              <Box mb="9">
                <Heading size="8" mb="4">
                  Latest Updates
                </Heading>

                <Text size="5" color="gray" as="p">
                  All the latest Radix news, straight from the team
                </Text>
              </Box>
              <Flex direction="column">
                {frontmatters.map(
                  ({ metaTitle, metaDescription, slug, metaImage, publishedAt }) => (
                    <Card size="4" variant="classic" asChild key={slug}>
                      <NextLink href={`/${slug}`}>
                        <Flex width="100%" gap="2">
                          <Inset clip="padding-box" side="left" pr="current">
                            <img
                              src={metaImage}
                              alt={metaTitle}
                              style={{
                                display: 'block',
                                objectFit: 'cover',
                                height: '100%',
                                width: '100%',
                                backgroundColor: 'var(--gray-5)',
                              }}
                            />
                          </Inset>
                          <Flex justify="between" direction="column">
                            <Box>
                              <Text color="gray" mb="3" as="p" size="2">
                                {publishedAt}
                              </Text>
                              <Heading mb="3">{metaTitle}</Heading>
                              <Text as="p" mb="5">
                                {metaDescription}
                              </Text>
                            </Box>
                            <Link asChild>
                              <Flex align="center" gap="2">
                                Read more <ArrowRightIcon />
                              </Flex>
                            </Link>
                          </Flex>
                        </Flex>
                      </NextLink>
                    </Card>
                  )
                )}
              </Flex>
            </Box>
          </Container>
        </Section>

        <Container mx={{ initial: '5', xs: '6', sm: '7', md: '9' }}>
          <Separator size="2" />
        </Container>
        <Section size={{ initial: '2', md: '4' }}>
          <Container mx={{ initial: '5', xs: '6', sm: '7', md: '9' }}>
            <CommunitySection />
          </Container>
        </Section>
        <Container mx={{ initial: '5', xs: '6', sm: '7', md: '9' }}>
          <Separator size="2" />
          <Section size={{ initial: '2', md: '4' }} pb="0">
            <Footer />
          </Section>
        </Container>
      </MobileMenuProvider>
    </>
  );
}

export async function getStaticProps() {
  const frontmatters = getAllFrontmatter('blog');

  return { props: { frontmatters } };
}