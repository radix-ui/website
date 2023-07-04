import React from 'react';
import { Box, Link, Heading } from '@radix-ui/themes';
import { ScrollArea } from '@components/ScrollArea';
import styles from './QuickNav.module.css';

export function QuickNav() {
  const [headings, setHeadings] = React.useState<HTMLHeadingElement[]>([]);

  React.useEffect(() => {
    const headingElements: HTMLHeadingElement[] = Array.from(
      document.querySelectorAll('[data-heading]')
    );

    setHeadings(headingElements);
  }, []);

  // Function to determine the Heading Level based on `nodeName` (H2, H3, etc)
  const getLevel = (nodeName) => {
    return Number(nodeName.replace('H', ''));
  };

  return (
    <ScrollArea>
      <Box
        asChild
        px="5"
        aria-labelledby="site-quick-nav-heading"
        style={{
          paddingBlock: 68,
          display: headings.length === 0 ? 'none' : 'block',
        }}
      >
        <nav>
          <Heading mb="3" size="4" id="site-quick-nav-heading" asChild>
            <h4>Quick nav</h4>
          </Heading>
          <Box asChild p="0" style={{ listStyle: 'none' }}>
            <ul>
              {headings.map(({ id, nodeName, innerText }) => {
                return (
                  <Box
                    asChild
                    key={id}
                    data-level={getLevel(nodeName)}
                    className={styles.LinkWrapper}
                  >
                    <li>
                      <Link href={`#${id}`} color="gray" size="2" className={styles.Link}>
                        {innerText}
                      </Link>
                    </li>
                  </Box>
                );
              })}
            </ul>
          </Box>
        </nav>
      </Box>
    </ScrollArea>
  );
}
