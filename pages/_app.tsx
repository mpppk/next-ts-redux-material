import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { AppProps } from 'next/app';
import React, { FC } from 'react';
import theme from '../src/theme';
import { wrapper } from '../store';

// tslint:disable-next-line variable-name
const WrappedApp: FC<AppProps> = ({Component, pageProps}) => (
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default wrapper.withRedux(WrappedApp)
