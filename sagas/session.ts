import firebase from 'firebase';
import { eventChannel } from 'redux-saga';
import { call, fork, put, take, takeEvery } from 'redux-saga/effects';
import { sessionActionCreators } from '../actions/session';
import {
  fromFirebaseUserToUser,
  initializeFirebase
} from '../services/session';

const watchAuthStateChanged = () => {
  return eventChannel(emitter => {
    firebase.auth().onAuthStateChanged(firebaseUser => {
      const user = firebaseUser ? fromFirebaseUserToUser(firebaseUser) : null;
      emitter({ user });
    });
    return () => {}; // tslint:disable-line
  });
};

export function* saga() {
  const chan = yield call(watchAuthStateChanged);
  try {
    while (true) {
      const { user } = yield take(chan);
      yield put(sessionActionCreators.updateUser({ user }));
    }
  } finally {
  } // tslint:disable-line
}

export function* watchRequestToInitializeFirebase() {
  yield takeEvery(
    sessionActionCreators.requestToInitializeFirebase.type,
    initializeFirebaseWorkerWrapper
  );
}

function* initializeFirebaseWorkerWrapper() {
  initializeFirebase();
  yield fork(saga);
}
