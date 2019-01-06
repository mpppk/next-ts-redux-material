import React from 'react';
import { connect } from 'react-redux';

import { counterActionCreators } from '../actions';
import Page from '../components/Page';

class Index extends React.Component {
  static async getInitialProps(props) {
    // tslint:disable-line member-access
    const { store, isServer } = props.ctx;
    store.dispatch(counterActionCreators.requestAmountChanging({ amount: 1 }));
    return { isServer };
  }

  render() {
    // tslint:disable-line member-access
    return <Page title="Index Page" linkTo="/other" NavigateTo="Other Page" />;
  }
}

export default connect()(Index);
