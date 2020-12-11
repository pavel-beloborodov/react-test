import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { RootStoreState } from "./rootModel";
import { rootReducer } from "./rootReducer";
import { watchAllSagas } from "./rootSagas";

const configureStore = (initialState: RootStoreState) => {
  const saga = createSagaMiddleware();

  const composeEnhancer =
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const enhancer = composeEnhancer(applyMiddleware(saga));

  const store = createStore(rootReducer, initialState, enhancer);

  saga.run(watchAllSagas);

  return store;
};

export default configureStore;
