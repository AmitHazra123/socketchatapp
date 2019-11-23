// required library module for backend api call
import axios from "axios";
// required proxy for backend host and port
import proxy from "../proxy";
// required module to decode jwt token
import jwt_decode from "jwt-decode";
// backend api token set into header utility module
import setAuthToken from "../utils/setAuthToken";
// redux action type
import { SET_CURRENT_USER, SET_ERRORS } from "./types";

// login user
export const loginUser = userData => dispatch => {
  // call backend to validate user data and to receive token
  axios
    .post(`${proxy}/api/auth/login`, userData)
    .then(res => {
      const token = res.data.token;
      // set token to Auth header to access private route
      setAuthToken(token);
      // backup token to localstorage
      localStorage.setItem("jwtToken", token);
      // decode token
      const decoded = jwt_decode(token);
      // set redux state with decoded token
      dispatch({
        type: SET_CURRENT_USER,
        payload: decoded
      });
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
    });
};

// logout user
export const logoutUser = () => dispatch => {
  // remove backend api header saved as Authorization
  setAuthToken(null);

  // clear redux state
  // clear auth state
  dispatch({
    type: SET_CURRENT_USER,
    payload: {}
  });
  // clear error state
  dispatch({
    type: SET_ERRORS,
    payload: {}
  });

  // delete item from local storage
  localStorage.removeItem("jwtToken");
};
