import {
  all, call, put, takeEvery,
} from "redux-saga/effects";

import { GET_DATA, getDataSuccess } from "../actions";

const fetchData = (url: string) =>
  fetch(url)
  .then((res) => res.json());

function* getData() {
  try {
    const data = yield call(fetchData, "http://www.mocky.io/v2/59f08692310000b4130e9f71");
    yield put(getDataSuccess(data));
  } catch (error) {

  }
}

function* watchGetData() {
  yield takeEvery(GET_DATA, getData);
}

export default function* rootSaga() {
  yield all([
    watchGetData(),
  ]);
}
