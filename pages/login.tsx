import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sessionActionCreators } from '../actions/session';
import SignInScreen from '../components/SignInScreen';
import { IUser, State } from '../reducer';

export default () => {
  const user: IUser | null = useSelector((state: State) => state.user);
  const isReady = useSelector((state: State) => state.isReadyFirebase);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sessionActionCreators.requestToInitializeFirebase());
  }, []);

  if (!isReady) {
    return 'loading...';
  }

  return <div>{user ? 'You already logged in.' : <SignInScreen />}</div>;
};
