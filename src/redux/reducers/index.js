import { combineReducers } from "redux";
import posts from "./posts";
import comments from "./comments";
import loader from "./loader";
import users from "./users";

const reducer = combineReducers({
  posts,
  comments,
  loader,
  users,
});

export default reducer;
