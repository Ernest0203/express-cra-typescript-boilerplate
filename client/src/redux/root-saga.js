import { all } from 'redux-saga/effects';
import filesSaga from './files/saga';

export default function* rootSaga(getState) {
    yield all([
      filesSaga(),
    ]);
  }