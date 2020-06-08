import { all } from '@redux-saga/core/effects';
import { watchIncrementAsync } from './counter';
import { watchClickSignInSubmitButton } from './session';

export default function* rootSaga() {
  yield all([watchIncrementAsync(), watchClickSignInSubmitButton()]);
}
