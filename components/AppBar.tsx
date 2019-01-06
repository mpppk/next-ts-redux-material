import AppBar from '@material-ui/core/AppBar/AppBar';
import Button from '@material-ui/core/Button/Button';
import IconButton from '@material-ui/core/IconButton/IconButton';
import withStyles from '@material-ui/core/styles/withStyles';
import Toolbar from '@material-ui/core/Toolbar/Toolbar';
import Typography from '@material-ui/core/Typography/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import MyDrawer from './drawer/Drawer';

const styles = {
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  root: {
    flexGrow: 1
  }
};

// tslint:disable-next-line variable-name
class MyAppBar extends React.Component<{ classes }> {
  // tslint:disable-next-line member-access
  state = {
    isDrawerOpen: false
  };

  constructor() {
    // @ts-ignore
    super();
  }

  // tslint:disable-next-line member-access
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <MyDrawer
            open={this.state.isDrawerOpen}
            onClose={this.toggleDrawer(false)}
            onClickSideList={this.toggleDrawer(false)}
          />
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={this.toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Next.js+TypeScript+Redux+MUI DEMO
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

  private toggleDrawer = open => () => {
    this.setState({
      isDrawerOpen: open
    });
  };
}

export default withStyles(styles)(MyAppBar);
