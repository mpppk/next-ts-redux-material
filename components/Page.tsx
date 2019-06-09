import Typography from '@material-ui/core/Typography/Typography';
import * as React from 'react';
import AppBar from './AppBar';
import Counter from './Counter';

export interface IPageProps {
  title: string;
}

export default function Page({ title }: IPageProps) {
  return (
    <div>
      <AppBar />
      <Typography variant="h2" gutterBottom={true}>
        {title}
      </Typography>
      <Counter />
    </div>
  );
}
