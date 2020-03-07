import { takeEvery, select, call, put } from "redux-saga/effects";
import { IMAGES } from "../constansts";
import { fetchImages } from "../api";
import { setImages, setError } from "../actions";

import Button from '../components/Button';

const getPage = state => state.nextPage;

function* handleImagesLoad() {
  try {
    const page = yield select(getPage);
    const images = yield call(fetchImages, page);
    yield put(setImages(images));
  } catch (error) {
    //dispatch error action
    yield put(setError(error.toString()));
  }
}

function* watchImagesLoad() {
  yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}

export default watchImagesLoad;
