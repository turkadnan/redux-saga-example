import { all } from "redux-saga/effects";
import imagesSaga from "./imagesSaga";
import statsSaga from "./statsSaga";

export default function* rootSata() {
  yield all([imagesSaga(), statsSaga()]);
}
