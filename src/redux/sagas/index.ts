import { put, call } from 'redux-saga/effects';
import { getDataSuccess } from '../store/actions';

export default function* fetchData() {
  try {
    const data = yield call(() => fetch('http://www.mocky.io/v2/59f08692310000b4130e9f71')
      .then((res) => res.json()));
    console.log(data);
    yield put(getDataSuccess(data));
  } catch (error) {
    console.log(error);
  }
}
