import AppBar from '@material-ui/core/AppBar/AppBar';
import Button from '@material-ui/core/Button/Button';
import IconButton from '@material-ui/core/IconButton/IconButton';
import { Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar/Toolbar';
import Typography from '@material-ui/core/Typography/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/styles';
import * as React from 'react';
import { useState } from 'react';
import MyDrawer from './drawer/Drawer';

const useStyles = makeStyles((theme: Theme) => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  }
}));

// tslint:disable-next-line variable-name
export default function MyAppBar() {
  const classes = useStyles(undefined);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleDrawer = (open: boolean) => () => setDrawerOpen(open);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <MyDrawer
          open={isDrawerOpen}
          onClose={handleDrawer(false)}
          onClickSideList={handleDrawer(false)}
        />
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Frontend boilerplate
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
