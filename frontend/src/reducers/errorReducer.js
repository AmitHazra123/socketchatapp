import { SET_ERRORS } from "../actions/types";

const initialState = {
  error: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_ERRORS:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}
