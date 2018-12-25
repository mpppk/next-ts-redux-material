import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { counterActionCreators, counterAsyncActionCreators } from './actions';

export const exampleInitialState = {
  count: 0
};

type State = typeof exampleInitialState;

const addCount = (state: State, amount: number) => {
  return { ...state, count: state.count + amount };
};

const reducer = reducerWithInitialState(exampleInitialState)
  .case(counterActionCreators.clickIncrementButton, state => {
    return addCount(state, 1);
  })
  .case(counterActionCreators.clickDecrementButton, state => {
    return addCount(state, -1);
  })
  .case(
    counterAsyncActionCreators.changeAmountWithSleep.done,
    (state, payload) => {
      return addCount(state, payload.result.amount);
    }
  );

export default reducer;
