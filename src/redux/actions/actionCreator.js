import {
  GET_POSTS,
  SET_POSTS,
  GET_COMMENTS,
  SET_COMMENTS,
  SET_LOADER_POST,
  SET_LOADER_COMMENTS,
  GET_USERS,
  SET_USERS,
} from "../constants";

export const getPosts = () => {
  return { type: GET_POSTS };
};

export const setPosts = (payload) => {
  return { type: SET_POSTS, payload };
};

export const getComments = (payload) => {
  return { type: GET_COMMENTS, payload };
};

export const setComments = (payload) => {
  return { type: SET_COMMENTS, payload };
};

export const setLoaderPost = (payload) => {
  return { type: SET_LOADER_POST, payload };
};

export const setLoaderComments = (payload) => {
  return { type: SET_LOADER_COMMENTS, payload };
};

export const getUsers = (payload) => {
  return { type: GET_USERS, payload };
};

export const setUsers = (payload) => {
  return { type: SET_USERS, payload };
};
