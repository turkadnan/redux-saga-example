import { take, fork, call, put } from "redux-saga/effects";
import { IMAGES } from "../constansts";
import { fetchImageStats } from "../api";
import { loadImageStats, setImageStats, setImageStatsError } from "../actions";

function* handleStatsRequest(id) {
  try { 
    yield put(loadImageStats(id));
    const res = call(fetchImageStats,id);    
    yield put(setImageStats(id, res.downloads.total));
    return true;
    //console.log("fatching stats for ", id);
  } catch (e) {
    console.log('error: '+e)
  }

  yield put(setImageStatsError(id));
}

function* watchStatsRequest() {
  while (true) {
    const { images } = yield take(IMAGES.LOAD_SUCCESS);

    for (let i = 0; i < images.length; i++) {
      yield fork(handleStatsRequest, images[i].id);
    }
  }
}

export default watchStatsRequest;
