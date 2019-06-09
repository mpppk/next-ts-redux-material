import Typography from '@material-ui/core/Typography/Typography';
import * as React from 'react';
import AppBar from './AppBar';
import Counter, { ICounterProps } from './Counter';

export type PageProps = {
  title: string;
} & ICounterProps;

export default function Page(props: PageProps) {
  return (
    <div>
      <AppBar />
      <Typography variant="h2" gutterBottom={true}>
        {props.title}
      </Typography>
      <Counter
        count={props.count}
        onClickIncrementButton={props.onClickIncrementButton}
        onClickDecrementButton={props.onClickDecrementButton}
        onClickIncrementLaterButton={props.onClickIncrementLaterButton}
      />
    </div>
  );
}
