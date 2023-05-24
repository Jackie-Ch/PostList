import { SET_USERS } from "../constants";

const users = (state = { users: {} }, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: { ...action.payload } };
    default:
      return state;
  }
};

export default users;
