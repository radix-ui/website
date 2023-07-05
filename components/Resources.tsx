import * as React from 'react';
import NextLink from 'next/link';
import {
  Flex,
  Box,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Link,
  Heading,
} from '@radix-ui/themes';
import { PlusIcon, MixIcon } from '@radix-ui/react-icons';
import { RadixLogoIcon } from './RadixLogoIcon';
import styles from './Resources.module.css';

type BaseResourceProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
};

function LinkWrapper({ href, children }: { href: string; children: React.ReactNode }) {
  if (href.startsWith('/')) {
    return (
      <NextLink href={href} passHref>
        <a className={styles.Link}>{children}</a>
      </NextLink>
    );
  }

  return (
    <a href={href} className={styles.Link}>
      {children}
    </a>
  );
}

function BaseResource({ title, description, icon, href }: BaseResourceProps) {
  return (
    <LinkWrapper href={href}>
      <Flex gap="3">
        {icon}
        <Box>
          <Heading size="3" as="h3" style={{ lineHeight: 1.5, letterSpacing: '-0.02em' }}>
            {title}
          </Heading>
          <Text size="2" as="p" color="gray" style={{ lineHeight: 1.4 }}>
            {description}
          </Text>
        </Box>
      </Flex>
    </LinkWrapper>
  );
}

function ResourcePrimitives() {
  return (
    <BaseResource
      href="/"
      title="Primitives"
      description="Acessible components for design systems and web apps."
      icon={<RadixLogoIcon width="25" height="25" style={{ flex: 'none', marginTop: 2 }} />}
    />
  );
}

function ResourceColors() {
  return (
    <BaseResource
      href="/colors"
      title="Colors"
      description="Beautiful, thought-out palettes with auto dark mode."
      icon={
        <svg
          width="25"
          height="25"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ flex: 'none', marginTop: 2 }}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.75391 14.9998C1.75391 7.68444 7.6842 1.75415 14.9996 1.75415C22.3149 1.75415 28.2452 7.68444 28.2452 14.9998C28.2452 22.3151 22.3149 28.2455 14.9996 28.2455C7.6842 28.2455 1.75391 22.3151 1.75391 14.9998ZM7.56191 6.4319C9.3655 4.86489 11.6687 3.85795 14.2008 3.68183V13.0708L7.56191 6.4319ZM6.43062 7.56335C4.8644 9.36653 3.85792 11.6689 3.68166 14.2H13.0673L6.43062 7.56335ZM13.0673 15.8H3.68169C3.85806 18.3311 4.8646 20.6334 6.43085 22.4365L13.0673 15.8ZM7.56217 23.5679C9.36572 25.1348 11.6688 26.1417 14.2008 26.3178V16.9293L7.56217 23.5679ZM15.8008 16.9335V26.3176C18.3313 26.1411 20.6332 25.1347 22.436 23.5687L15.8008 16.9335ZM23.5675 22.4375C25.1342 20.6342 26.1411 18.3315 26.3174 15.8H16.9301L23.5675 22.4375ZM16.9301 14.2H26.3175C26.1412 11.6685 25.1344 9.36574 23.5677 7.56242L16.9301 14.2ZM22.4363 6.43109C20.6334 4.86504 18.3314 3.85856 15.8008 3.682V13.0666L22.4363 6.43109Z"
            fill="currentcolor"
          />
        </svg>
      }
    />
  );
}

function ResourceIcons() {
  return (
    <BaseResource
      href="https://icons.radix-ui.com"
      title="Icons"
      description="A crisp set of 15×15 icons, balanced and consistent."
      icon={<MixIcon width="25" height="25" style={{ flex: 'none', marginTop: 2 }} />}
    />
  );
}

function ResourcesPopover({ children }: { children: React.ReactNode }) {
  return (
    <Popover.Root>
      <PopoverTrigger>
        <Link
          size="2"
          color="gray"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'var(--space-1)',
            background: 'transparent',
            border: 'none',
          }}
          asChild
        >
          <button>
            Resources
            <PlusIcon />
          </button>
        </Link>
      </PopoverTrigger>
      <PopoverContent sideOffset={15} align="end" alignOffset={-15} style={{ maxWidth: 280 }}>
        <Box p="1">{children}</Box>
      </PopoverContent>
    </Popover.Root>
  );
}

export { ResourcePrimitives, ResourceColors, ResourceIcons, ResourcesPopover };
