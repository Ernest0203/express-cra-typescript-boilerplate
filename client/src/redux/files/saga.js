import { all, takeEvery, put } from 'redux-saga/effects';
import actions from './actions';
import service from '../../service/service';

function* filesUpload ({ files }) {
  try {
    const data = yield service.filesUpload(files);
    yield put({type: actions.FETCH_DATA_SUCCESS, data: data.data});
  } catch {
    //yield put();
  }
};

function* getFiles () {
  try {
    const data = yield service.getFiles();
    yield put({type: actions.FETCH_DATA_SUCCESS, data: data.data});
  } catch {
    //yield put();
  }
}

export default function* filesSaga() {
  yield all([
    takeEvery(actions.FILES_UPLOAD, filesUpload),
    takeEvery(actions.FETCH_DATA, getFiles),
  ]);
}