import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { counterActionCreators, decrement, increment } from './actions';

export const exampleInitialState = {
  count: 0
};

const reducer = reducerWithInitialState(exampleInitialState)
  .case(increment, state => {
    return { ...state, count: state.count + 1 };
  })
  .case(decrement, state => {
    return { ...state, count: state.count - 1 };
  })
  .case(counterActionCreators.requestAmountChanging, (state, payload) => {
    return { ...state, count: state.count + payload.amount };
  });

export default reducer;
