/* global fetch */

import es6promise from 'es6-promise';
import 'isomorphic-unfetch';
import { all, delay, takeEvery } from 'redux-saga/effects';
import { bindAsyncAction } from 'typescript-fsa-redux-saga';
import {
  counterActionCreators,
  counterAsyncActionCreators,
  IRequestAmountChangingWithSleepPayload
} from './actions';

es6promise.polyfill();

const counterIncrementWorker = bindAsyncAction(
  counterAsyncActionCreators.changeAmountWithSleep
)(function*(payload: IRequestAmountChangingWithSleepPayload) {
  yield delay(payload.sleep);
  return { amount: payload.amount };
} as any); // FIXME remove any

function* watchIncrementAsync() {
  yield takeEvery(counterActionCreators.clickAsyncIncrementButton.type, () =>
    counterIncrementWorker({ amount: 1, sleep: 1000 })
  );
}

export default function* rootSaga() {
  yield all([watchIncrementAsync()]);
}
