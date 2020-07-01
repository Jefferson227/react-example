import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField,
  TextareaAutosize,
  Button,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Grid,
} from '@material-ui/core';
import * as hookUtils from '../../utils/Hooks';
import PostStore from './../../store/PostStore';

const CreatePost = () => {
  const [postTitle, setPostTitle] = hookUtils.useHandleChange('');
  const [body, setBody] = hookUtils.useHandleChange('');

  const postStore = React.useContext(PostStore);

  const checkboxes = [
    {
      name: 'javascript',
      key: 'javascript',
    },
    {
      name: 'c#',
      key: 'c#',
    },
  ];

  const initialState = checkboxes
    .map((item) => item.name)
    .reduce((item, name) => {
      item[name] = false;
      return item;
    }, {});

  const [checkedItems, setCheckedItems] = React.useState(initialState); //plain object as state

  const handleChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postStore
      .addPost({
        Title: postTitle,
        Body: body,
        UserId: 'ba0e24d8-f320-4dc9-896d-3c26db1657c8',
      })
      .then((data) => {
        setPostTitle('');
        setBody('');
      });
  };

  const useStyles = makeStyles((theme) => ({
    margined: {
      marginLeft: 16,
      marginRight: 16,
      marginTop: 16,
    },
    checkboxContainer: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(3),
    },
    fullWidth: {
      width: '100%',
    },
  }));

  const classes = useStyles();

  return (
    <React.Fragment>
      <form
        className={classes.margined}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              id="post-title"
              label="Post Title"
              variant="outlined"
              onChange={setPostTitle}
              value={postTitle}
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <TextareaAutosize
              rowsMin={14}
              onChange={setBody}
              value={body}
              placeholder="Your text here"
              className={classes.fullWidth}
            />
          </Grid>

          <div className={classes.checkboxContainer}>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">
                Select categories of interest
              </FormLabel>
              <FormGroup>
                {checkboxes.map((item) => (
                  <FormControlLabel
                    key={item.key}
                    control={
                      <Checkbox
                        key={`cb-${item.key}`}
                        checked={checkedItems[item.name]}
                        onChange={handleChange}
                        name={item.name}
                      />
                    }
                    label={item.name}
                  />
                ))}
              </FormGroup>
            </FormControl>
          </div>

          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Create Post
            </Button>
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
};
export default CreatePost;
