import React from 'react';
import { Box, Text, Portal, Theme, Flex } from '@radix-ui/themes';

import styles from './CopyToast.module.css';

type CopyToastVisibilityValue = {
  icon: string;
  setIcon: (newIcon: string) => void;
  isVisible: boolean;
  setIsVisible: () => void;
};

export const CopyToastVisibility = React.createContext<CopyToastVisibilityValue>({
  icon: '',
  setIcon: () => undefined,
  isVisible: false,
  setIsVisible: () => undefined,
});

export const CopyToast = () => {
  return (
    <CopyToastVisibility.Consumer>
      {({ icon, isVisible }) => (
        <Portal>
          <Theme className="radix-themes-custom-fonts">
            <Flex className={styles.Toast} m="5" justify="center">
              <Box
                className={styles.ToastInner}
                style={{
                  opacity: Number(isVisible),
                  transitionDuration: isVisible ? '50ms' : '300ms',
                }}
              >
                <Text
                  size="2"
                  style={{ color: 'var(--gray-1)', display: 'flex', alignItems: 'center' }}
                >
                  SVG copied to clipboard
                  <span
                    dangerouslySetInnerHTML={{ __html: icon }}
                    style={{
                      display: 'inline-flex',
                      marginLeft: '0.75em',
                      verticalAlign: 'top',
                      justifyContent: 'center',
                    }}
                  />
                </Text>
              </Box>
            </Flex>
          </Theme>
        </Portal>
      )}
    </CopyToastVisibility.Consumer>
  );
};
