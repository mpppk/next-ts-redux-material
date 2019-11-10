import { testSaga } from 'redux-saga-test-plan';
import { counterActionCreators } from '../../actions/counter';
import {
  counterIncrementWorker,
  counterIncrementWorkerWrapper,
  watchIncrementAsync
} from '../../saga';

describe('sagas', () => {
  it('handle clickAsyncIncrementButton action', async () => {
    return testSaga(watchIncrementAsync, {})
      .next()
      .takeEvery(
        counterActionCreators.clickAsyncIncrementButton.type,
        counterIncrementWorkerWrapper
      )
      .finish()
      .isDone();
  });

  it('sleep and return new amount', async () => {
    const payload = { amount: 1, sleep: 1000 };
    return testSaga(counterIncrementWorker, payload)
      .next()
      .finish()
      .isDone();
  });
});
