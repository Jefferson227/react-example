import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  margined: {
    margin: 16,
  },
}));

export default function FolderList() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.margined}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" className={classes.title}>
              Achieved Titles
            </Typography>
            <List className={classes.root}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Top Liker" secondary="9.999 likes" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <WorkIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Top Poster" secondary="8.888 posts" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <BeachAccessIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Week Top Poster" secondary="200 posts" />
              </ListItem>
            </List>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" className={classes.title}>
              Unachieved Titles
            </Typography>
            <List className={classes.root}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Master of Likes"
                  secondary="35 likes left"
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <WorkIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Master of Posts"
                  secondary="2 posts left"
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <BeachAccessIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Master of Posts for this week"
                  secondary="1 post left"
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
