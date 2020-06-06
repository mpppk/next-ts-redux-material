import { HYDRATE } from 'next-redux-wrapper'
import { combineReducers } from 'redux';
import {counter, counterInitialState} from './counter';

const combinedReducer = combineReducers({
  counter,
});

export const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    }
    if (state.count) { nextState.count = state.count } // preserve count value on client side navigation
    return nextState
  } else {
    return combinedReducer(state, action)
  }
}

export const initialState = {
  counter: counterInitialState,
};

export type State = typeof initialState;