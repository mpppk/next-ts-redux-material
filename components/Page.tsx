import Typography from '@material-ui/core/Typography/Typography';
import * as React from 'react';
import { IUser } from '../reducer';
import MyAppBar from './AppBar';
import Counter, { ICounterProps } from './Counter';
import { SignInScreen } from './SignInScreen';

export type PageProps = {
  title: string;
  user: IUser | null;
} & ICounterProps;

export default function Page(props: PageProps) {
  return (
    <div>
      <MyAppBar user={props.user} />
      <Typography variant="h2" gutterBottom={true}>
        {props.title}
      </Typography>
      <SignInScreen />
      <Counter
        count={props.count}
        onClickIncrementButton={props.onClickIncrementButton}
        onClickDecrementButton={props.onClickDecrementButton}
        onClickIncrementLaterButton={props.onClickIncrementLaterButton}
      />
    </div>
  );
}
