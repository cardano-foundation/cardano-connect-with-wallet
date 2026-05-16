import { defineConfig, devices } from '@playwright/experimental-ct-react';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  testDir: './src',
  testMatch: '**/*.spec.tsx',
  timeout: 30_000,
  use: {
    ctPort: 3100,
    ctViteConfig: {
      plugins: [react()],
      resolve: {
        alias: {
          // Point to the core TypeScript source so Vite compiles it as ESM,
          // avoiding CJS/UMD interop issues with the dist bundle.
          '@cardano-foundation/cardano-connect-with-wallet-core': path.resolve(
            __dirname,
            '../core/index.ts',
          ),
        },
      },
    },
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'desktop-chrome',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'mobile-chrome',
      use: { ...devices['Pixel 5'] },
    },
  ],
});
