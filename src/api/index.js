import axios from "axios";

export const getPosts = async (startPage) => {
  const limit = 20;
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?_start=${
      startPage ? startPage : ""
    }&_limit=${limit}`
  );
  return data;
};

export const getComments = async (id) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  return data;
};

export const getUsers = async (id) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return data;
};
