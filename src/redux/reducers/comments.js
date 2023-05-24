import { SET_COMMENTS } from "../constants";

const comments = (state = { comments: [] }, action) => {
  switch (action.type) {
    case SET_COMMENTS:
      return { ...state, comments: [...action.payload] };
    default:
      return state;
  }
};

export default comments;
