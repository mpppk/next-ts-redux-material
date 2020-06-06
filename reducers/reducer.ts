import { HYDRATE } from 'next-redux-wrapper'
import { combineReducers } from 'redux';
import {counter, counterInitialState} from './counter';
import {global} from './global';
import { globalInitialState } from './global';

const combinedReducer = combineReducers({
  counter,
  global,
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
  global: globalInitialState,
};

export type State = typeof initialState;