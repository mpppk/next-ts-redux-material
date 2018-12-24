import React from 'react';
import { connect } from 'react-redux';

import { increment } from '../actions';
import Page from '../components/page';

class Index extends React.Component {
  static async getInitialProps(props) {
    const { store, isServer } = props.ctx;
    store.dispatch(increment());
    return { isServer };
  }

  render() {
    return <Page title="Index Page" linkTo="/other" NavigateTo="Other Page" />;
  }
}

export default connect()(Index);
