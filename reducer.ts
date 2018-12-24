import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { decrement, increment } from './actions';

export const exampleInitialState = {
  count: 0
};

const reducer = reducerWithInitialState(exampleInitialState)
  .case(increment, state => {
    return { ...state, count: state.count + 1 };
  })
  .case(decrement, state => {
    return { ...state, count: state.count - 1 };
  });

export default reducer;
