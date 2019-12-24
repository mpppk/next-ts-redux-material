import { all } from '@redux-saga/core/effects';
import { watchIncrementAsync } from './counter';

export default function* rootSaga() {
  yield all([watchIncrementAsync()]);
}
