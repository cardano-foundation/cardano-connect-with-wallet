import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import alias from 'rollup-plugin-alias';

const packageJson = require('./package.json');

export default [
  {
    input: 'src/index.ts',
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
      peerDepsExternal({ includeDependencies: true }),
      resolve(),
      commonjs(),
      typescript({ useTsconfigDeclarationDir: true }),
      alias({
        entries: [
          { find: 'utils', replacement: '../utils' },
          { find: 'core', replacement: '../core' },
          { find: 'global', replacement: '../global' }
        ]
      })
    ],
  },
];
