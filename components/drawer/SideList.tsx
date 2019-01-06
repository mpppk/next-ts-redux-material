import { withStyles } from '@material-ui/core';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import Link from 'next/link';
import * as React from 'react';

const styles = {
  list: {
    width: 250
  }
};

// tslint:disable-next-line variable-name
const SideList: React.FunctionComponent<{ classes }> = props => {
  const { classes } = props;
  return (
    <div className={classes.list}>
      <List>
        <Link href={'/'}>
          <ListItem button={true} key={'Home'}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={'Home'} />
          </ListItem>
        </Link>
        <Link href={'/about'}>
          <ListItem button={true} key={'About'}>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary={'About'} />
          </ListItem>
        </Link>
      </List>
    </div>
  );
};

export default withStyles(styles)(SideList);
