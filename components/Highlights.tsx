import React from 'react';
import { Text, Box, Flex, Heading, Separator, Link, Select } from '@radix-ui/themes';
import { ArrowTopRightIcon, CheckIcon } from '@radix-ui/react-icons';
import { useRouter } from 'next/router';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { FrontmatterContext } from './MDXComponents';

export function Highlights({ features }) {
  const router = useRouter();
  const frontmatter = React.useContext(FrontmatterContext);

  const publishedName = frontmatter.publishedName || frontmatter.name;

  return (
    <Flex direction={{ initial: 'column', sm: 'row' }} mt={{ initial: '4', sm: '7' }}>
      <Box mb="5" grow={{ sm: '1' }} mr={{ sm: '5' }}>
        <Heading as="h2" size="4" mb="4">
          Features
        </Heading>

        <Flex asChild m="0" p="0" gap="2" direction="column">
          <ul>
            {features.map((feature, i) => (
              <Flex key={i} gap="4" align="start">
                <Flex
                  width="5"
                  height="5"
                  align="center"
                  justify="center"
                  shrink="0"
                  style={{
                    backgroundColor: 'var(--green-4)',
                    borderRadius: '50%',
                    color: 'var(--green-11)',
                  }}
                >
                  <CheckIcon />
                </Flex>
                <Text size="3" as="p">
                  {feature}
                </Text>
              </Flex>
            ))}
          </ul>
        </Flex>
      </Box>

      <Box
        style={{ width: 'fit-content' }}
        asChild
        aria-labelledby="site-component-info-heading"
        data-algolia-exclude
      >
        <nav>
          <VisuallyHidden asChild>
            <h2 id="site-component-info-heading">Component Reference Links</h2>
          </VisuallyHidden>

          <Box asChild display={{ sm: 'none' }}>
            <Separator size="2" mb="4" />
          </Box>

          <Flex mb="2" align="center">
            <Select.Root
              size="2"
              value={frontmatter.version}
              onValueChange={(value) => router.push(`./${frontmatter.name}/${value}`)}
            >
              <Select.Trigger variant="ghost" color="gray" />
              <Select.Content className="radix-themes-custom">
                {(frontmatter.versions || []).map((v, i) => {
                  return (
                    <Select.Item key={v} value={v}>
                      {v}
                      {i === 0 && ' (latest)'}
                    </Select.Item>
                  );
                })}
              </Select.Content>
            </Select.Root>
          </Flex>

          {frontmatter.gzip && (
            <Text size="2" color="gray" as="p">
              Size:{' '}
              <Link
                color="gray"
                href={`https://bundlephobia.com/package/@radix-ui/react-${frontmatter.name}@${frontmatter.version}`}
                target="_blank"
                rel="noreferrer noopener"
              >
                {frontmatter.gzip}
              </Link>
            </Text>
          )}

          <Box asChild display={{ /* initial: 'none', sm: 'block' */ initial: 'block' }}>
            <Separator size="2" my="5" />
          </Box>

          <Flex direction="column" gap="2">
            <Box>
              <Flex asChild display="inline-flex" align="center" position="relative" gap="1">
                <Link
                  size="2"
                  href={`https://github.com/radix-ui/primitives/tree/main/packages/react/${publishedName}/src`}
                  target="_blank"
                >
                  View source
                  <ArrowTopRightIcon style={{ color: 'var(--gray-9)' }} />
                </Link>
              </Flex>
            </Box>
            <Box>
              <Flex asChild display="inline-flex" align="center" position="relative" gap="1">
                <Link
                  size="2"
                  href={`https://www.npmjs.com/package/@radix-ui/react-${publishedName}`}
                  target="_blank"
                >
                  View on npm
                  <ArrowTopRightIcon style={{ color: 'var(--gray-9)' }} />
                </Link>
              </Flex>
            </Box>

            <Box>
              <Flex asChild display="inline-flex" align="center" position="relative" gap="1">
                <Link
                  size="2"
                  href="https://github.com/radix-ui/primitives/issues/new/choose"
                  target="_blank"
                >
                  Report an issue
                  <ArrowTopRightIcon style={{ color: 'var(--gray-9)' }} />
                </Link>
              </Flex>
            </Box>

            {frontmatter.aria && (
              <Box>
                <Flex asChild display="inline-flex" align="center" position="relative" gap="1">
                  <Link size="2" href={frontmatter.aria} target="_blank">
                    ARIA design pattern
                    <ArrowTopRightIcon style={{ color: 'var(--gray-9)' }} />
                  </Link>
                </Flex>
              </Box>
            )}
          </Flex>
        </nav>
      </Box>
    </Flex>
  );
}
