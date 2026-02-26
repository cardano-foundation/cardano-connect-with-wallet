import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default ({ config }) => {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      '@cardano-foundation/cardano-connect-with-wallet-core': path.resolve(__dirname, '../../core/index.ts'),
      core: path.resolve(__dirname, '../../core'),
    },
    extensions: ['.ts', '.tsx', ...config.resolve.extensions],
    modules: [path.resolve(__dirname, '..'), ...config.resolve.modules],
  };

  config.module.rules.push(
    {
      test: /\.(ts|tsx)$/,
      exclude: /node_modules\/(?!@cardano-foundation\/cardano-connect-with-wallet-core)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
            '@babel/preset-typescript',
          ],
        },
      },
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    }
  );

  return config;
};
