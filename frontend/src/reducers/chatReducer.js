import { INSERT_CHAT, GET_ALL_CHATS } from "../actions/types";

const initialState = {
  chats: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case INSERT_CHAT:
      return {
        ...state,
        chats: state.chats.concat([action.payload])
      };
    case GET_ALL_CHATS:
      return {
        ...state,
        chats: action.payload
      };
    default:
      return state;
  }
}
