import Typography from '@material-ui/core/Typography/Typography';
import { NextPage } from 'next';
import React from 'react';
import Counter from '../features/counter/Counter';
import { useActions, useAppSelector } from "../hooks";
import { counterSlice, selectCount } from "../features/counter/counterSlice";

// tslint:disable-next-line variable-name
export const Index: NextPage = () => {
  const handlers = useActions(counterSlice.actions);
  const count = useAppSelector(selectCount);
  // const count = useSelector((state: State) => state.counter.count);

  return (
    <div>
      <Typography variant="h2" gutterBottom={true}>
        Counter sample
      </Typography>
      <Counter
        count={count}
        onClickIncrementButton={handlers.increment}
        onClickDecrementButton={handlers.decrement}
        onClickIncrementLaterButton={handlers.incrementByAmount}
      />
    </div>
  );
};

export default Index;
