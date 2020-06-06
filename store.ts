import { Context, createWrapper, MakeStore } from 'next-redux-wrapper';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { initialState, reducer, State } from './reducers/reducer';
import rootSaga from './sagas/saga';

const sagaMiddleware = createSagaMiddleware();

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const makeStore: MakeStore<State> = (_context: Context) => {
  const store = createStore(
    reducer,
    initialState,
    bindMiddleware([sagaMiddleware])
  );

  (store as any).runSagaTask = () => {
    (store as any).sagaTask = sagaMiddleware.run(rootSaga); // FIXME Add type
  };

  (store as any).runSagaTask(); // FIXME Add type
  return store;
}
export const wrapper = createWrapper<State>(makeStore, {debug: true})
