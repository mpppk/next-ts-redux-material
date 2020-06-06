import { NextPage } from 'next';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counterActionCreators } from '../actions/counter';
import Page from '../components/Page';
import { State } from '../reducers/reducer';

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
export const Index: NextPage = () => {
  const handlers = useHandlers();
  const count = useSelector((state: State) => state.counter.count);

  return (
    <Page
      count={count}
      title="Index Page"
      onClickIncrementButton={handlers.clickIncrementButton}
      onClickDecrementButton={handlers.clickDecrementButton}
      onClickIncrementLaterButton={handlers.clickAsyncIncrementButton}
    />
  );
};

export default Index;
