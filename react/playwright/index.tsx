import { beforeMount } from '@playwright/experimental-ct-react/hooks';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Wallet } from '@cardano-foundation/cardano-connect-with-wallet-core';

// Minimal global reset so components render in a clean document.
const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }
  body { margin: 0; font-family: sans-serif; }
`;

// Expose a reset helper so test beforeEach hooks can call it via page.evaluate().
(window as any).__resetWallet__ = () => {
  Wallet.disconnect();
  delete (window as any).cardano;
  localStorage.clear();
};

beforeMount(async ({ App }) => {
  return (
    <>
      <GlobalStyle />
      <App />
    </>
  );
});
