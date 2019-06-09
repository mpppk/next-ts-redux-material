import Button from '@material-ui/core/Button/Button';
import Typography from '@material-ui/core/Typography/Typography';
import * as React from 'react';

export interface ICounterProps {
  count: number;
  onClickIncrementButton: (currentCount: number) => void;
  onClickDecrementButton: (currentCount: number) => void;
  onClickIncrementLaterButton: (currentCount: number) => void;
}

type ClickEvent = React.MouseEvent<HTMLElement, MouseEvent>;

export default (props: ICounterProps) => {
  const handleClickIncrementButton = (_e: ClickEvent) => {
    props.onClickIncrementButton(props.count);
  };
  const handleClickDecrementButton = (_e: ClickEvent) => {
    props.onClickDecrementButton(props.count);
  };
  const handleClickIncrementLaterButton = (_e: ClickEvent) => {
    props.onClickIncrementLaterButton(props.count);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom={true}>
        Count: <span>{props.count}</span>
      </Typography>
      <Button
        onClick={handleClickIncrementButton}
        variant="contained"
        color="primary"
      >
        +1
      </Button>
      <Button
        onClick={handleClickDecrementButton}
        variant="contained"
        color="primary"
      >
        -1
      </Button>
      <Button
        onClick={handleClickIncrementLaterButton}
        variant="contained"
        color="primary"
      >
        +1 later
      </Button>
    </div>
  );
};
