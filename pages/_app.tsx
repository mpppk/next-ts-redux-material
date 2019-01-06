import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';
import { StylesProvider } from '@material-ui/styles';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import withReduxSaga from 'next-redux-saga';
import withRedux from 'next-redux-wrapper';
import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import getPageContext, { PageContext } from '../src/getPageContext';
import createStore from '../store';

class MyApp extends App {
  private pageContext: PageContext;
  constructor() {
    // @ts-ignore
    super();
    this.pageContext = getPageContext();
  }
  public static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }

    return { pageProps };
  }

  public render() {
    // @ts-ignore
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <StylesProvider
            generateClassName={this.pageContext.generateClassName}
            sheetsRegistry={this.pageContext.sheetsRegistry}
            sheetsManager={this.pageContext.sheetsManager}
          >
            <ThemeProvider theme={this.pageContext.theme}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              {/* Pass pageContext to the _document though the renderPage enhancer
                to render collected styles on server side. */}
              <Component pageContext={this.pageContext} {...pageProps} />
            </ThemeProvider>
          </StylesProvider>
        </Provider>
      </Container>
    );
  }
}

export default withRedux(createStore)(withReduxSaga({ async: true })(MyApp));
