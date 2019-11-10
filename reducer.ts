import { reducerWithInitialState } from 'typescript-fsa-reducers';
import {
  counterActionCreators,
  counterAsyncActionCreators
} from './actions/counter';
import { sessionActionCreators } from './actions/session';

export const exampleInitialState = {
  count: 0,
  user: (null as IUser) || null
};

export interface IUser {
  displayName: string;
  email: string;
  emailVerified: boolean;
  photoURL: string;
  isAnonymous: boolean;
  phoneNumber: string | null;
  uid: string;
}

export type State = typeof exampleInitialState;

const addCount = (state: State, amount: number) => {
  return { ...state, count: state.count + amount };
};

const reducer = reducerWithInitialState(exampleInitialState)
  .case(sessionActionCreators.updateUser, (state, payload) => {
    return { ...state, user: payload.user };
  })
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
