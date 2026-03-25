import { nodeResolve } from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import packageJson from './package.json' with { type: 'json' };

const external = (id) =>
  id === 'react' ||
  id === 'react-dom' ||
  id === 'styled-components' ||
  id === '@cardano-foundation/cardano-connect-with-wallet-core' ||
  id.startsWith('@cardano-foundation/cardano-connect-with-wallet-core/') ||
  id === '@fabianbormann/cardano-peer-connect' ||
  id.startsWith('@fabianbormann/cardano-peer-connect/') ||
  id.startsWith('@radix-ui/');

export default [
  {
    input: 'src/index.ts',
    external,
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      nodeResolve({
        extensions: ['.mjs', '.js', '.json', '.ts', '.tsx'],
      }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
      }),
    ],
  },
];
