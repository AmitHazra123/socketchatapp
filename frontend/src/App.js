// required react packages
import React, { Component } from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import jwtDecode from "jwt-decode";

// views
import LoginPage from "./views/LoginPage/LoginPage";
import SignUpPage from "./views/SignUpPage/SignUpPage";
import Dashboard from "./views/Dashboard";

// style
import "./App.css";

// redux connection
import { Provider } from "react-redux";
import store from "./store"; // redux store
import { SET_CURRENT_USER } from "./actions/types";

// utility methond
import setAuthToken from "./utils/setAuthToken";

// private route
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PrivateRoute1 from "./components/PrivateRoute/PrivateRoute1";

// router navigation management module
const hist = createBrowserHistory();

class App extends Component {
  componentDidMount() {
    // if jwtToken item found in the local storage
    if (localStorage.getItem("jwtToken")) {
      // get token from local storage when component is going to mount
      const token = localStorage.getItem("jwtToken");
      // set token to backend api header as Authorization
      setAuthToken(token);
      // decode the token to json object
      const decoded = jwtDecode(token);
      // set current user to redux state
      store.dispatch({
        type: SET_CURRENT_USER,
        payload: decoded
      });
      // check for expired token
      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        // Logout User
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router history={hist}>
            <PrivateRoute1 exact path="/" component={LoginPage} />
            <PrivateRoute1 exact path="/signup" component={SignUpPage} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
