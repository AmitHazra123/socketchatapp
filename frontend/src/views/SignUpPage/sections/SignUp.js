// required library modules
import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

// material ui components
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { Grid, TextField, Button } from "@material-ui/core";

// styles
import styles from "../../../assests/jss/user-kit/views/loginPage";
import { primaryColor } from "../../../assests/jss/user-kit";

// connect to redux
import { connect } from "react-redux";

// redux action
import { loginUser } from "../../../actions/authAction";

// require backend api call helper module
import axios from "axios";
import proxy from "../../../proxy";

const useStyles = makeStyles(styles);

function SignUp(props) {
  const [uname, setUname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState({});

  const handleSignUp = e => {
    e.preventDefault();
    // store user data from states
    const userData = {
      name: uname,
      email,
      password,
      password2
    };
    // call backend api
    axios
      .post(`${proxy}/api/auth/signup`, userData)
      .then(res => {
        const loginData = {
          email: res.data.email,
          password
        };
        props.loginUser(loginData);
      })
      .catch(err => setErrors(err.response.data));
  };

  const classes = useStyles();

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: primaryColor
      },
      secondary: {
        main: "#f44336"
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <div style={{ overflow: "hidden", height: 482 }}>
        <Grid container lg={12} md={12}>
          <Grid container item lg={2} md={4}></Grid>
          <Grid container item lg={6} md={4}>
            <form className={classes.container}>
              <Grid container item lg={12} direction="vertical">
                <Grid container item lg={12}>
                  <Grid item lg={4} />
                  <Grid item lg={4}>
                    <TextField
                      id="outlined-name-input"
                      label="Full Name"
                      className={classes.textField}
                      onChange={e => {
                        setUname(e.target.value);
                      }}
                      type="text"
                      name="uname"
                      value={uname}
                      autoComplete="name"
                      margin="normal"
                      variant="outlined"
                      error={errors.name}
                      helperText={errors.name !== "" ? errors.name : ""}
                    />
                  </Grid>
                  <Grid item lg={4} />
                </Grid>
                <Grid container item lg={12}>
                  <Grid item lg={4} />
                  <Grid item lg={4}>
                    <TextField
                      id="outlined-email-input"
                      label="Email Address"
                      className={classes.textField}
                      onChange={e => {
                        setEmail(e.target.value);
                      }}
                      type="email"
                      name="email"
                      value={email}
                      autoComplete="email"
                      margin="normal"
                      variant="outlined"
                      error={errors.email}
                      helperText={errors.email !== "" ? errors.email : ""}
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
                      onChange={e => setPassword(e.target.value)}
                      type="password"
                      name="password"
                      value={password}
                      margin="normal"
                      variant="outlined"
                      error={errors.password}
                      helperText={errors.password !== "" ? errors.password : ""}
                    />
                  </Grid>
                  <Grid item lg={4} />
                </Grid>
                <Grid container item lg={12}>
                  <Grid item lg={4} />
                  <Grid item lg={4}>
                    <TextField
                      id="outlined-password-input"
                      label="Confirm Password"
                      className={classes.textField}
                      onChange={e => setPassword2(e.target.value)}
                      type="password"
                      name="password2"
                      value={password2}
                      margin="normal"
                      variant="outlined"
                      error={errors.password2}
                      helperText={
                        errors.password2 !== "" ? errors.password2 : ""
                      }
                    />
                  </Grid>
                  <Grid item lg={4} />
                </Grid>
                <Grid container item lg={12}>
                  <Grid item lg={4} />
                  <Grid item lg={4}>
                    <label
                      htmlFor="contained-button-submit"
                      onClick={e => handleSignUp(e)}
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        className={classes.button}
                      >
                        Sign Up
                      </Button>
                    </label>
                  </Grid>
                  <Grid item lg={4} />
                </Grid>
              </Grid>
            </form>
          </Grid>
          <Grid container item lg={4} md={4}></Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

SignUp.propTypes = {
  loginUser: PropTypes.func.isRequired
};

export default connect(null, { loginUser })(withRouter(SignUp));
