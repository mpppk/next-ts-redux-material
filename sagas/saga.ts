import { all } from '@redux-saga/core/effects';
import { watchIncrementAsync } from './counter';
import { watchRequestToInitializeFirebase } from './session';

export default function* rootSaga() {
  yield all([watchIncrementAsync(), watchRequestToInitializeFirebase()]);
}
