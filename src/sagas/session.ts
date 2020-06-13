import { SagaIterator } from 'redux-saga';
import { call, delay, takeEvery } from 'redux-saga/effects';
import { ActionCreator } from 'typescript-fsa';
import { bindAsyncAction } from 'typescript-fsa-redux-saga';
import {
  globalActionCreators,
  globalAsyncActionCreators,
} from '../actions/global';

export const signInWorker = bindAsyncAction(globalAsyncActionCreators.signIn)(
  function* (_payload) {
    yield delay(1000);
    return {
      jwt: 'xxx',
      user: {
        displayName: 'user-name',
        photoURL: 'https://i.gyazo.com/f335ba575e7009ab424dea80ac992e9f.jpg',
        uid: 1,
      },
    };
  }
);

export const signOutWorker = bindAsyncAction(
  globalAsyncActionCreators.signOut,
  {
    skipStartedAction: true,
  }
)(function* (_payload) {
  yield delay(1000);
});

export function* watchClickSignInSubmitButton() {
  yield takeEvery(globalActionCreators.clickSignInSubmitButton, function* (
    action
  ) {
    yield call(signInWorker, action.payload);
  });
}

export type SagaWorker = <T>(params: T, ...args: any[]) => SagaIterator;
export const takeEveryAction = <T>(
  ac: ActionCreator<T>,
  worker: SagaWorker
) => {
  return function* () {
    yield takeEvery(ac, function* (action) {
      yield call(worker, action.payload);
    });
  };
};
