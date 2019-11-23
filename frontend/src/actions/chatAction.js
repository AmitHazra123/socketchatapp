// backend api driver
import axios from "axios";
import proxy from "../proxy";

// types
import { INSERT_CHAT, SET_ERRORS, GET_ALL_CHATS } from "./types";

// insert new chat
export const insertChat = chatData => dispatch => {
  axios
    .post(`${proxy}/api/chat/insertchat`, chatData)
    .then(res => {
      dispatch({
        type: INSERT_CHAT,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
    });
};

// get all chats
export const getAllChats = () => dispatch => {
  axios
    .get(`${proxy}/api/chat/getallchats`)
    .then(res => {
      dispatch({
        type: GET_ALL_CHATS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
    });
};
