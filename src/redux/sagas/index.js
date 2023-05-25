import { takeEvery, put, call } from 'redux-saga/effects';
import {
  GET_POSTS,
  GET_COMMENTS,
  GET_USERS,
  GET_USER_POSTS,
} from '../constants';
import { setPosts, setComments, setUsers } from '../actions/actionCreator';
import { getPosts, getComments, getUsers, getUserPosts } from '../../api';

export function* handleUsers({ payload }) {
  const data = yield call(() => getUsers(payload));
  yield put(setUsers(data));
}

export function* handleComments({ payload }) {
  const data = yield call(() => getComments(payload));
  yield put(setComments(data));
}

export function* handlePosts({ payload }) {
  const data = yield call(() => getPosts(payload));
  yield put(setPosts(data));
}

export function* handleUserPosts({ payload }) {
  const data = yield call(() => getUserPosts(payload));
  yield put(setPosts(data));
}

export function* watchSaga() {
  yield takeEvery(GET_COMMENTS, handleComments);
  yield takeEvery(GET_POSTS, handlePosts);
  yield takeEvery(GET_USERS, handleUsers);
  yield takeEvery(GET_USER_POSTS, handleUserPosts);
}

export function* rootSaga() {
  yield watchSaga();
}
