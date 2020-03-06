import { takeEvery, put } from "redux-saga/effects";
import { IMAGES } from "../constansts";

function* handleImagesLoad() {
  console.log("fetching images from unsplash");
}

// watcher saga
function* rootSaga() {
  yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}

// watcher saga -> actions -> worker saga

export default rootSaga;
