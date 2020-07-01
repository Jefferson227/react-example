import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {
  Button,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import { Grid, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import * as hookUtils from '../../utils/Hooks';

const Signup = () => {
  // Use these functions to get the values from the inputs
  const [username, setUsername] = hookUtils.useHandleChange('');
  const [email, setEmail] = hookUtils.useHandleChange('');
  const [password, setPassword] = hookUtils.useHandleChange('');
  const [checkboxes, handleCheckboxChanges] = hookUtils.useHandleChange('');
  const { javascript, csharp, python } = checkboxes;
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
  }));
  const classes = useStyles();

  return (
    <React.Fragment>
      <form className={classes.margined} noValidate autoComplete="off">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              id="user-name"
              label="Name"
              variant="outlined"
              onChange={setUsername}
              fullWidth
            />
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
              type="password"
              label="Password"
              variant="outlined"
              onChange={setPassword}
              fullWidth
            />
          </Grid>

          <div className={classes.checkboxContainer}>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">
                Select categories of interest
              </FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={javascript}
                      onChange={handleCheckboxChanges}
                      name="javascript"
                    />
                  }
                  label="Javascript"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={csharp}
                      onChange={handleCheckboxChanges}
                      name="csharp"
                    />
                  }
                  label="C#"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={python}
                      onChange={handleCheckboxChanges}
                      name="python"
                    />
                  }
                  label="Python"
                />
              </FormGroup>
            </FormControl>
          </div>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              component={RouterLink}
              to="/"
              fullWidth
            >
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
};
export default Signup;
