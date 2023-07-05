import React from 'react';
import { RadixLogoIcon } from './RadixLogoIcon';
import { AccessibleIcon } from '@radix-ui/react-accessible-icon';
import { Flex } from '@radix-ui/themes';

export const RadixLogo = ({ label = 'Radix homepage' }: { label?: string }) => (
  <AccessibleIcon label={label}>
    <Flex align="center">
      <RadixLogoIcon style={{ marginRight: 3 }} />
      <svg
        width="56"
        height="18"
        viewBox="0 0 56 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.9022 17.0061H24.4499C24.2647 16.0375 24.17 15.1161 24.17 14.0058V9.37532C24.17 6.25687 22.3893 4.72127 19.1943 4.72127C16.3003 4.72127 14.3324 6.23324 14.0777 8.80833H16.9254C17.0181 7.69797 17.8052 6.96561 19.1017 6.96561C20.4446 6.96561 21.3243 7.67435 21.3243 9.13907V9.70607L17.8052 10.1077C15.4206 10.3912 13.5684 11.3834 13.5684 13.7931C13.5684 15.9666 15.2353 17.2659 17.5274 17.2659C19.4027 17.2659 20.9845 16.4863 21.6401 15.1161C21.6689 15.937 21.9022 17.0061 21.9022 17.0061ZM18.3377 15.1634C17.157 15.1634 16.5087 14.5727 16.5087 13.6278C16.5087 12.3757 17.4579 12.0922 18.7082 11.9268L21.3243 11.6197V12.352C21.3243 14.242 19.8658 15.1634 18.3377 15.1634ZM34.2588 17.0061H37.176V0H34.2125V6.96561C33.6569 5.76075 32.3141 4.72127 30.4851 4.72127C27.3058 4.72127 25.099 7.29635 25.099 11.0054C25.099 14.7381 27.3058 17.2896 30.4851 17.2896C32.2678 17.2896 33.68 16.2973 34.2588 15.0925V17.0061ZM34.282 11.218C34.282 13.5569 33.1938 15.0689 31.3185 15.0689C29.3969 15.0689 28.1856 13.486 28.1856 11.0054C28.1856 8.54846 29.3969 6.94198 31.3185 6.94198C33.1938 6.94198 34.282 8.45396 34.282 10.7928V11.218ZM38.9066 2.97304H42.0553V0.0199585H38.9066V2.97304ZM38.9992 17.0061H41.9627V5.00476H38.9992V17.0061ZM45.6638 17.0061L48.6041 12.8954L51.5212 17.0061H54.9246L50.3636 10.7219L54.5542 5.00476H51.3823L48.7661 8.71383L46.1731 5.00476H42.7697L47.0066 10.8637L42.4919 17.0061H45.6638Z"
          fill="currentcolor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.91317 17V11.0168H6.7986L10.4513 17H13.7006L9.68936 10.5686C11.5045 9.986 13.0955 8.507 13.0955 6.01961C13.0955 2.7479 10.7994 1 6.95714 1H0V17H2.91317ZM2.91317 3.35294V8.68628H6.82101C9.0395 8.68628 10.1599 7.76751 10.1599 6.01961C10.1599 4.27171 8.9395 3.35294 6.62101 3.35294H2.91317Z"
          fill="currentcolor"
        />
      </svg>
    </Flex>
  </AccessibleIcon>
);
