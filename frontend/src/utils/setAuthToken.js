// backend api driver module
import axios from "axios";

const setAuthToken = token => {
  if (token) {
    // set token to the header as Authorization
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    // delete token from the header saved as Authorization
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
