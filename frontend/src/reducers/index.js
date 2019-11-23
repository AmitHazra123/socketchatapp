// required library modules
import { combineReducers } from "redux";

// required reducers
import auth from "./authReducer";
import errors from "./errorReducer";
import chat from "./chatReducer";

export default combineReducers({
  auth,
  errors,
  chat
});
