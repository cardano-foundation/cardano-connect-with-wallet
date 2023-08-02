import { dirname, join } from "path";
import type { StorybookConfig } from '@storybook/react-webpack5';
const config: StorybookConfig = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [getAbsolutePath("@storybook/addon-links"), getAbsolutePath("@storybook/addon-essentials"), getAbsolutePath("@storybook/addon-interactions"), getAbsolutePath("@storybook/preset-create-react-app")],
  framework: {
    name: getAbsolutePath("@storybook/react-webpack5"),
    options: {}
  },
  docs: {
    autodocs: true
  }
};
export default config;
/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
*/
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}