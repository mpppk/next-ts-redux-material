import { all } from '@redux-saga/core/effects';
import { watchIncrementAsync } from './counter';
import { sessionWatchers } from './session';

export default function* rootSaga() {
  yield all([watchIncrementAsync(), ...sessionWatchers]);
}
