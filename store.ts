import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import {initialState, reducer} from './reducers/reducer';
import rootSaga from './sagas/saga';

const sagaMiddleware = createSagaMiddleware();

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

function configureStore(state = initialState) {
  const store = createStore(
    reducer,
    state,
    bindMiddleware([sagaMiddleware])
  );

  (store as any).runSagaTask = () => {
    (store as any).sagaTask = sagaMiddleware.run(rootSaga); // FIXME Add type
  };

  (store as any).runSagaTask(); // FIXME Add type
  return store;
}

export default configureStore;
