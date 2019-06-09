import React from 'react';
import { connect } from 'react-redux';

import { bindActionCreators, Dispatch } from 'redux';
import { counterActionCreators } from '../actions';
import { ICounterProps } from '../components/Counter';
import Page from '../components/Page';
import { State } from '../reducer';

type IndexProps = ICounterProps & typeof counterActionCreators;

class Index extends React.Component<IndexProps> {
  // tslint:disable-next-line member-access
  static async getInitialProps(props) {
    const { store, isServer } = props.ctx;
    store.dispatch(counterActionCreators.requestAmountChanging({ amount: 1 }));
    return { isServer };
  }

  // tslint:disable-next-line member-access
  render() {
    return (
      <Page
        count={this.props.count}
        title="Index Page"
        onClickIncrementButton={this.props.clickIncrementButton}
        onClickDecrementButton={this.props.clickDecrementButton}
        onClickIncrementLaterButton={this.props.clickAsyncIncrementButton}
      />
    );
  }
}

const mapStateToProps = (state: State) => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    ...bindActionCreators({ ...counterActionCreators }, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
