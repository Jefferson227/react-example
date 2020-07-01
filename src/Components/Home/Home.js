import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  const useStyles = makeStyles({
    semiFullWidth: {
      width: '90%',
      paddingTop: 64,
      paddingBottom: 64,
    },
    centered: {
      textAlign: 'center',
    },
    marginTop16: {
      marginTop: 16,
    },
  });
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} className={[classes.centered, classes.marginTop16]}>
          <Button
            variant="contained"
            component={RouterLink}
            color="primary"
            to="/post"
            className={classes.semiFullWidth}
          >
            Give me a post
          </Button>
          <Grid />

          <Grid
            item
            xs={12}
            className={[classes.centered, classes.marginTop16]}
          ></Grid>
          <Button
            variant="contained"
            component={RouterLink}
            color="primary"
            to="/createpost"
            className={classes.semiFullWidth}
          >
            Create a post
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default Home;
