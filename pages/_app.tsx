import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import withReduxSaga from 'next-redux-saga';
import withRedux from 'next-redux-wrapper';
import { AppProps } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import theme from '../src/theme';
import createStore from '../store';

// @ts-ignore
function MyApp({ Component, pageProps, store}: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default withRedux(createStore)(withReduxSaga(MyApp));
