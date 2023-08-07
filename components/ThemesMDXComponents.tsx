import { components } from '@components/MDXComponents';
import * as themesDocsAssets from '@components/ThemesDocsAssets';
import * as themesDocsTables from '@components/ThemesDocsTables';
import * as icons from '@radix-ui/react-icons';
import { ThemesPropsTable } from './ThemesPropsTable';
import { Box } from '@radix-ui/themes';

export const ThemesMDXComponents = {
  ...components,
  ...themesDocsAssets,
  ...themesDocsTables,
  ...icons,
  ThemesPropsTable: (props) => (
    <Box mt="4" mb="6">
      <ThemesPropsTable {...props} />
    </Box>
  ),
};
