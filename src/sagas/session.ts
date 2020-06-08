import { call, delay, takeEvery } from 'redux-saga/effects';
import { bindAsyncAction } from 'typescript-fsa-redux-saga';
import {
  globalActionCreators,
  globalAsyncActionCreators,
} from '../actions/global';

export const signInWorker = bindAsyncAction(globalAsyncActionCreators.signIn)(
  function* (_payload) {
    yield delay(1000);
    return { jwt: 'xxx' };
  }
);

export function* watchClickSignInSubmitButton() {
  yield takeEvery(globalActionCreators.clickSignInSubmitButton, function* (
    action
  ) {
    yield call(signInWorker, action.payload);
  });
}
