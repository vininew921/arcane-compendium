import React from 'react';
import type { AppProps } from 'next/app';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import '../styles/globals.css';
import MiniDrawer from './layout/minidrawer';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0A1929',
      paper: '#0A1929',
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <MiniDrawer>
        <Component {...pageProps} />
      </MiniDrawer>
    </ThemeProvider>
  );
}

export default MyApp;
