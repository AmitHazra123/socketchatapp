import React from "react";
import classNames from "classnames";

// material-ui components
import {
  Grid,
  createMuiTheme,
  MuiThemeProvider,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "../../components/Header/Header";
import HeaderLinks from "../../components/Header/HeaderLinks";

// section components
import Login from "./sections/Login";

// styles
import styles from "../../assests/jss/user-kit/views/components";
import { primaryColor } from "../../assests/jss/user-kit";

const useStyles = makeStyles(styles);

const theme = createMuiTheme({
  palette: {
    primary: { main: primaryColor }, // Purple and green play nicely together.
    secondary: { main: "#11cb5f" } // This is just green.A700 as hex.
  }
});

function LoginPage(props) {
  const { ...rest } = props;
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <div style={{ overflow: "hidden" }}>
        <Header brand="SwitchOn" rightLinks={<HeaderLinks />} fixed {...rest} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <Grid container lg={12} md={12}>
            <Grid container item lg={12} md={12} style={{ height: 200 }}></Grid>
            <Grid container item lg={12} md={12}>
              <Grid item lg={4} md={4}></Grid>
              <Grid item lg={4} md={4}>
                <center>
                  <Typography variant="h5" color="primary">
                    <u>Sign In</u>
                  </Typography>
                </center>
              </Grid>
              <Grid item lg={4} md={4}></Grid>
            </Grid>
            <Grid container item lg={12} md={12}>
              <center>
                <Login />
              </center>
            </Grid>
          </Grid>
        </div>
      </div>
    </MuiThemeProvider>
  );
}
export default LoginPage;
