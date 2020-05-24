import { combineReducers } from 'redux';
import {counter, counterInitialState} from './counter';

export const reducer = combineReducers({
  counter,
});

export const initialState = {
  counter: counterInitialState,
};

