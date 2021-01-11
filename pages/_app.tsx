import { CSSReset, ThemeProvider } from '@chakra-ui/react';
import React from 'react';
import { AuthProvider } from '../lib/auth';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <CSSReset />
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
