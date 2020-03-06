import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../reducers";
import rootSaga from "../sagas";
import { IMAGES } from "../constansts";

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
    // compose(

    //   window.__REDUX_DEVTOOLS_EXTENSION__  &&
    //   window.__REDUX_DEVTOOLS_EXTENSION__ (),
    // ),
  );
  sagaMiddleware.run(rootSaga);

  //dispatch ler sagas/index.js içerisinden tetikleniyor
  store.dispatch({type:IMAGES.LOAD});

  return store;
};

export default configureStore;
