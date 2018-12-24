/* global fetch */

import es6promise from 'es6-promise';
import 'isomorphic-unfetch';
import { delay, SagaIterator } from 'redux-saga';
import { all, call, put, takeEvery } from 'redux-saga/effects';
import { bindAsyncAction } from 'typescript-fsa-redux-saga';
import {
  counterActionCreators,
  counterAsyncActionCreators,
  ICounterAmountPayload
} from './actions';

es6promise.polyfill();

function* incrementAsync(payload: ICounterAmountPayload) {
  yield delay(1000);
  yield put(counterActionCreators.requestAmountChanging(payload));
}

const counterIncrementWorker = bindAsyncAction(
  counterAsyncActionCreators.changeAmountAsync
)(function*(payload: ICounterAmountPayload): SagaIterator {
  yield call(incrementAsync, { ...payload });
});

function* watchIncrementAsync() {
  yield takeEvery(counterActionCreators.clickAsyncIncrementButton.type, () =>
    counterIncrementWorker({ amount: 1 })
  );
}

export default function* rootSaga() {
  yield all([watchIncrementAsync()]);
}
