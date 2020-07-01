import React, { useState, useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// Agent dependencies
import PostStore from './../../store/PostStore';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Card dependencies
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// FAB depencencies
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';
import CloseIcon from '@material-ui/icons/Close';

const Post = () => {
  // 55f3561a-3a4b-4edd-9e29-99f2818cddbf => postId
  // 701e8d4b-dfc5-4fbe-b61f-1d61d1823bc7 => userId
  const userId = '701e8d4b-dfc5-4fbe-b61f-1d61d1823bc7';
  const [postDetails, setPostDetails] = useState([]);
  const postStore = useContext(PostStore);
  const getNewPost = () => {
    postStore
      .getRandomPostByUserId(userId)
      .then((data) => setPostDetails(data));
  };

  React.useEffect(() => {
    getNewPost();
  }, []);

  const useStylesForCard = makeStyles({
    root: {
      minWidth: 275,
      margin: 16,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  const useStylesForFab = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    floatBottomLeft: {
      position: 'absolute',
      bottom: 16,
      left: 24,
    },
    floatBottomRight: {
      position: 'absolute',
      bottom: 16,
      right: 24,
    },
  }));
  const classesForCard = useStylesForCard();
  const classesForFab = useStylesForFab();

  return (
    <React.Fragment>
      <Card className={classesForCard.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {postDetails.title}
          </Typography>

          {/* <Typography className={classesForCard.pos} color="textSecondary">
            JavaScript, C#, Python
          </Typography> */}

          <Typography variant="body2" component="p">
            {postDetails.body}
          </Typography>
        </CardContent>
      </Card>

      <Fab
        color="primary"
        aria-label="dislike"
        type="button"
        className={classesForFab.floatBottomLeft}
        onClick={getNewPost}
      >
        <CloseIcon />
      </Fab>
      <Fab
        aria-label="like"
        aria-label="like"
        color="secondary"
        type="button"
        className={classesForFab.floatBottomRight}
        onClick={getNewPost}
      >
        <FavoriteIcon />
      </Fab>
    </React.Fragment>
  );
};
export default Post;
