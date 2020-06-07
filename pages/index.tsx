import Typography from '@material-ui/core/Typography/Typography';
import { NextPage } from 'next';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { counterActionCreators } from '../actions/counter';
import Counter from '../components/Counter';
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
    <div>
      <Typography variant="h2" gutterBottom={true}>
        Counter sample
      </Typography>
      <Counter
        count={count}
        onClickIncrementButton={handlers.clickIncrementButton}
        onClickDecrementButton={handlers.clickDecrementButton}
        onClickIncrementLaterButton={handlers.clickAsyncIncrementButton}
      />
    </div>
  );
};

export default Index;
