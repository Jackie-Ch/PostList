import { takeEvery, put, call } from "redux-saga/effects";
import { GET_POSTS, GET_COMMENTS, GET_USERS } from "../constants";
import { setPosts, setComments, setUsers } from "../actions/actionCreator";
import { getPosts, getComments, getUsers } from "../../api";

export function* handleUsers({ payload }) {
  const data = yield call(() => getUsers(payload));
  yield put(setUsers(data));
}

export function* handleComments({ payload }) {
  const data = yield call(() => getComments(payload));
  yield put(setComments(data));
}

export function* handlePosts() {
  const data = yield call(getPosts);
  yield put(setPosts(data));
}

export function* watchSaga() {
  yield takeEvery(GET_COMMENTS, handleComments);
  yield takeEvery(GET_POSTS, handlePosts);
  yield takeEvery(GET_USERS, handleUsers);
}

export function* rootSaga() {
  yield watchSaga();
}
