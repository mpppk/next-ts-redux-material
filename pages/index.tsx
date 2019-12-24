import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counterActionCreators } from '../actions/counter';
import Page from '../components/Page';
import { State } from '../reducer';

const useHandlers = () => {
  const dispatch = useDispatch();
  return {
    clickAsyncIncrementButton: () => {
      dispatch(counterActionCreators.clickAsyncIncrementButton(undefined));
    },
    clickDecrementButton: () => {
      dispatch(counterActionCreators.clickDecrementButton(undefined));
    },
    clickIncrementButton: () => {
      dispatch(counterActionCreators.clickIncrementButton(undefined));
    },
    empty: () => {} //tslint:disable-line
  };
};

// tslint:disable-next-line variable-name
export const Index: React.FC = () => {
  const handlers = useHandlers();
  const globalState = useSelector((state: State) => ({
    count: state.count,
    user: state.user
  }));

  return (
    <Page
      user={globalState.user}
      count={globalState.count}
      title="Index Page"
      onClickIncrementButton={handlers.clickIncrementButton}
      onClickDecrementButton={handlers.clickDecrementButton}
      onClickIncrementLaterButton={handlers.clickAsyncIncrementButton}
      onClickLogout={handlers.empty}
    />
  );
};

(Index as any).getInitialProps = props => {
  const { store, isServer } = props.ctx;
  store.dispatch(counterActionCreators.requestAmountChanging({ amount: 1 }));
  return { isServer };
};

export default Index;
