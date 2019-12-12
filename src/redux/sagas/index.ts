import {
  put, call, all, takeEvery,
} from 'redux-saga/effects';

import { getDataSuccess, GET_DATA } from '../actions';


function* fetchData() {
  try {
    const data = yield call(() => fetch('http://www.mocky.io/v2/59f08692310000b4130e9f71')
      .then((res) => res.json()));
    yield put(getDataSuccess(data));
    return true;
  } catch (error) {
    return false;
  }
}

function* watchFetchData() {
  yield takeEvery(GET_DATA, fetchData);
}

export default function* rootSaga() {
  yield all([
    watchFetchData(),
  ]);
}
