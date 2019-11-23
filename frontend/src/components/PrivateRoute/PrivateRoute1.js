// required library modules
import React from "react";
import { Route, Redirect } from "react-router-dom"; // for navigation
import PropTypes from "prop-types";

// redux connection
import { connect } from "react-redux";

const PrivateRoute1 = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth.isAuthenticate !== true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/dashboard" />
      )
    }
  />
);

PrivateRoute1.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute1);
