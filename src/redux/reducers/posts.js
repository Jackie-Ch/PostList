import { SET_POSTS } from "../constants";

const posts = (state = { posts: [] }, action) => {
  switch (action.type) {
    case SET_POSTS:
      return { ...state, posts: [...action.payload] };
    default:
      return state;
  }
};

export default posts;
