import { SET_LOADER_POST, SET_LOADER_COMMENTS } from "../constants";

const loader = (
  state = { isLoaderPosts: false, isLoaderComments: true },
  action
) => {
  switch (action.type) {
    case SET_LOADER_POST:
      return { ...state, isLoaderPosts: action.payload };
    case SET_LOADER_COMMENTS:
      return { ...state, isLoaderComments: action.payload };
    default:
      return state;
  }
};

export default loader;
