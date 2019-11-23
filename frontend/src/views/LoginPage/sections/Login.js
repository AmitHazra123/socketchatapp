// required library modules
import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

// material ui components
import { makeStyles } from "@material-ui/core/styles";
import { Grid, TextField, Button, Typography } from "@material-ui/core";

// styles
import styles from "../../../assests/jss/user-kit/views/loginPage";

// connect to redux
import { connect } from "react-redux";

// redux action
import { loginUser } from "../../../actions/authAction";

const useStyles = makeStyles(styles);

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState();

  useEffect(() => {
    setErrors(props.errors.error);
  }, [props.errors]);

  const onSubmit = e => {
    e.preventDefault();
    const loginData = {
      email,
      password
    };
    props.loginUser(loginData);
  };

  const classes = useStyles();
  const link = `/signup`;

  return (
    <div className={classes.root} style={{ height: 438 }}>
      <div>
        <Grid container lg={12} md={12}>
          <Grid container item lg={2} md={4}></Grid>
          <Grid container item lg={6} md={4}>
            <form className={classes.container}>
              <Grid container item lg={12} direction="vertical">
                <Grid container item lg={12}>
                  <Grid item lg={4} />
                  <Grid item lg={4}>
                    <TextField
                      id="outlined-email-input"
                      label="Email Address"
                      className={classes.textField}
                      type="email"
                      name="email"
                      onChange={e => setEmail(e.target.value)}
                      value={email}
                      autoComplete="email"
                      margin="normal"
                      variant="outlined"
                      error={errors !== undefined ? errors.email : false}
                      helperText={errors !== undefined ? errors.email : ""}
                    />
                  </Grid>
                  <Grid item lg={4} />
                </Grid>
                <Grid container item lg={12}>
                  <Grid item lg={4} />
                  <Grid item lg={4}>
                    <TextField
                      id="outlined-password-input"
                      label="Password"
                      className={classes.textField}
                      type="password"
                      name="password"
                      onChange={e => setPassword(e.target.value)}
                      value={password}
                      autoComplete="current-password"
                      margin="normal"
                      variant="outlined"
                      error={errors !== undefined ? errors.password : false}
                      helperText={errors !== undefined ? errors.password : ""}
                    />
                  </Grid>
                  <Grid item lg={4} />
                </Grid>
                <Grid container item lg={12}>
                  <Grid item lg={4}></Grid>
                  <Grid item lg={8}>
                    <Typography color="primary">
                      <u>Forgot Password?</u>
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container item lg={12}>
                  <Grid item lg={4} />
                  <Grid item lg={4}>
                    <label htmlFor="contained-button-submit">
                      <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        className={classes.button}
                        onClick={onSubmit}
                      >
                        Sign In
                      </Button>
                      <br />
                      <br />
                    </label>
                  </Grid>
                  <Grid item lg={4} />
                </Grid>
              </Grid>
            </form>
            <Grid item lg={10} md={6}>
              <Typography variant="subtitle1">A New User ?</Typography>
            </Grid>
            <Grid item lg={2} md={6}>
              <a href={link}>
                <Typography color="primary">
                  <u>Sign Up</u>
                </Typography>
              </a>
            </Grid>
          </Grid>
          <Grid container item lg={4} md={4}></Grid>
        </Grid>
      </div>
    </div>
  );
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth
});

export default connect(mapStateToProps, { loginUser })(withRouter(Login));
