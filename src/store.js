import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import promiseMiddleware from "redux-promise-middleware";

import modalReducer from "./ducks/modalReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const combinedReducers = combineReducers({
  modal: modalReducer
});

export default createStore(
  combinedReducers,
  composeEnhancers(applyMiddleware(promiseMiddleware))
);