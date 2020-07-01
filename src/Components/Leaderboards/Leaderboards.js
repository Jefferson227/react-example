import React from 'react';

// Tabs dependencies
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// List dependencies
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    // width: 500,
  },
}));

const useStylesForList = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const classesForList = useStylesForList();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
          centered
        >
          <Tab label="Users" {...a11yProps(0)} />
          <Tab label="Posts" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <List className={classesForList.root}>
            <ListItem>
              <ListItemText primary="John Doe" secondary="9.999 likes" />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Alissa White-Gluz"
                secondary="8.888 likes"
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="Sandu Ciorba" secondary="7.777 likes" />
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <List className={classesForList.root}>
            <ListItem>
              <ListItemText
                primary="How to use 'git status' properly"
                secondary="999.999.999 likes"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="High Order Components in a nutshell"
                secondary="888.888.888 likes"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Write a line in a file with one line of code in Python"
                secondary="777.777.777 likes"
              />
            </ListItem>
          </List>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
