import React from 'react';
import { connect } from 'react-redux';

import firebase from 'firebase';
import { bindActionCreators, Dispatch } from 'redux';
import { counterActionCreators } from '../actions/counter';
import { sessionActionCreators } from '../actions/session';
import { ICounterProps } from '../components/Counter';
import Page from '../components/Page';
import { IUser, State } from '../reducer';
import { fromFirebaseUserToUser } from '../services/session';

type IndexProps = {
  user: IUser | null;
} & ICounterProps &
  typeof counterActionCreators &
  typeof sessionActionCreators;

class Index extends React.Component<IndexProps> {
  // tslint:disable-next-line member-access
  static async getInitialProps(props) {
    const { store, isServer } = props.ctx;
    store.dispatch(counterActionCreators.requestAmountChanging({ amount: 1 }));
    return { isServer };
  }

  constructor(props) {
    super(props);
    this.handleClickLogout = this.handleClickLogout.bind(this);
  }

  public componentDidMount(): void {
    firebase.auth().onAuthStateChanged(firebaseUser => {
      const user = firebaseUser ? fromFirebaseUserToUser(firebaseUser) : null;
      this.props.updateUser({ user });
    });
  }

  public async handleClickLogout(): Promise<void> {
    await firebase.auth().signOut();
  }

  // tslint:disable-next-line member-access
  render() {
    return (
      <Page
        user={this.props.user}
        count={this.props.count}
        title="Index Page"
        onClickIncrementButton={this.props.clickIncrementButton}
        onClickDecrementButton={this.props.clickDecrementButton}
        onClickIncrementLaterButton={this.props.clickAsyncIncrementButton}
        onClickLogout={this.handleClickLogout}
      />
    );
  }
}

const mapStateToProps = (state: State) => {
  return {
    count: state.count,
    user: state.user
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    ...bindActionCreators({ ...counterActionCreators }, dispatch),
    ...bindActionCreators({ ...sessionActionCreators }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
