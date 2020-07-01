import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';

// AppBar dependencies
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import {
  Menu,
  AccountBox,
  Home,
  EmojiFlags,
  PowerSettingsNew,
} from '@material-ui/icons';

// Drawer dependencies
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const anchor = 'left';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button key="Home" component={RouterLink} to="/home">
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

        <ListItem
          button
          key="My Achievements"
          component={RouterLink}
          to="/achievements"
        >
          <ListItemIcon>
            <AccountBox />
          </ListItemIcon>
          <ListItemText primary="My Achievements" />
        </ListItem>

        <ListItem
          button
          key="Leaderboards"
          component={RouterLink}
          to="/leaderboards"
        >
          <ListItemIcon>
            <EmojiFlags />
          </ListItemIcon>
          <ListItemText primary="Leaderboards" />
        </ListItem>

        <ListItem button key="Logout" component={RouterLink} to="/">
          <ListItemIcon>
            <PowerSettingsNew />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      {/* <div>
        {['left', 'right', 'top', 'bottom'].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div> */}

      <div>
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      </div>

      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(anchor, true)}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Contribution Bites
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
