import { css, CSSReset, ThemeProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import React from 'react';
import { AuthProvider } from '../lib/auth';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <CSSReset />
        <Global
          styles={css`
            html {
              scroll-behavior: smooth;
            }

            #__next {
              display: flex;
              flex-direction: column;
              min-height: 100vh;
            }
          `}
        />
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
