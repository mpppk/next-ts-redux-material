import React from 'react';
import { connect } from 'react-redux';

import { counterActionCreators } from '../actions';
import Page from '../components/Page';

class Index extends React.Component {
  // tslint:disable-next-line member-access
  static async getInitialProps(props) {
    const { store, isServer } = props.ctx;
    store.dispatch(counterActionCreators.requestAmountChanging({ amount: 1 }));
    return { isServer };
  }

  // tslint:disable-next-line member-access
  render() {
    return <Page title="Index Page" />;
  }
}

export default connect()(Index);
