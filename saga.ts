/* global fetch */

import es6promise from 'es6-promise';
import 'isomorphic-unfetch';
import { delay, SagaIterator } from 'redux-saga';
import { all, call, takeEvery } from 'redux-saga/effects';
import { bindAsyncAction } from 'typescript-fsa-redux-saga';
import { counterActionCreators, counterAsyncActionCreators } from './actions';

es6promise.polyfill();

const counterIncrementWorker = bindAsyncAction(
  counterAsyncActionCreators.changeAmountWithSleep
)(function*(payload): SagaIterator {
  yield call(delay, payload.sleep);
  return { amount: payload.amount };
});

function* watchIncrementAsync() {
  yield takeEvery(counterActionCreators.clickAsyncIncrementButton.type, () =>
    counterIncrementWorker({ amount: 1, sleep: 1000 })
  );
}

export default function* rootSaga() {
  yield all([watchIncrementAsync()]);
}
