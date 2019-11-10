import { Avatar, Theme } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { IUser } from '../reducer';

export interface IProfileButtonProps {
  user: IUser;
}

const useStyles = makeStyles((_: Theme) => ({
  avatar: {
    margin: 10
  }
}));

// tslint:disable-next-line variable-name
const ProfileButton: React.FunctionComponent<IProfileButtonProps> = props => {
  const classes = useStyles(undefined);
  const { user } = props;

  return (
    <Button color="inherit">
      <Avatar alt="Remy Sharp" src={user.photoURL} className={classes.avatar} />
    </Button>
  );
};

export default ProfileButton;
