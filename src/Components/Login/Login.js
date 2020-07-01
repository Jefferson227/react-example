import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, Grid, Box, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import Logo from '../../img/logo-example.png';
import * as hookUtils from '../../utils/Hooks';

const Login = () => {
  const [password, setPassword] = hookUtils.useHandleChange('');
  const [email, setEmail] = hookUtils.useHandleChange('');

  // Function to test the hookUtils
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(password);
    console.log(email);
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    centered: {
      textAlign: 'center',
    },
    margined: {
      marginLeft: 16,
      marginRight: 16,
      marginTop: 16,
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
            <Box color="text.primary" clone>
              <img src={Logo} className={classes.fullWidth} />
            </Box>
          </Grid>

          <Grid item xs={12}>
            <TextField
              id="user-email"
              label="Email"
              type="email"
              variant="outlined"
              onChange={setEmail}
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              id="user-password"
              label="Password"
              type="password"
              variant="outlined"
              onChange={setPassword}
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              component={RouterLink}
              to="/home"
              fullWidth
            >
              Login
            </Button>
          </Grid>

          <Grid item xs={12} className={classes.centered}>
            <Link href="#" color="inherit" component={RouterLink} to="/signup">
              Sign-up
            </Link>
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
};
export default Login;
