import * as React from 'react';
import { useSelector } from 'react-redux';
// import MyAppBar from '../components/AppBar';
import SignInScreen from '../components/SignInScreen';
import { IUser, State } from '../reducer';

export default () => {
  const user: IUser | null = useSelector((state: State) => state.user);

  return (
    <div>
      {/*<MyAppBar user={user} onClickLogout={props.onClickLogout}/>*/}
      {user ? 'You already logged in.' : <SignInScreen />}
    </div>
  );
};
