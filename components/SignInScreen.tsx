// Import FirebaseAuth and firebase.
import { Paper, Theme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import firebase from 'firebase';
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { getFirebaseUIConfig } from '../services/session';

const useStyles = makeStyles((_: Theme) => ({
  header: {
    textAlign: 'center',
    width: '100%'
  },
  root: {
    padding: 10
  }
}));

const uiConfig = getFirebaseUIConfig();

export default () => {
  const classes = useStyles(undefined);
  return (
    <Grid className={classes.root} container={true}>
      <Grid item={true} xs={12} spacing={2}>
        <Grid container={true} justify="center" spacing={2}>
          <Paper>
            <h1 className={classes.header}>Login</h1>
            <StyledFirebaseAuth
              uiConfig={uiConfig}
              firebaseAuth={firebase.auth()}
            />
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};
