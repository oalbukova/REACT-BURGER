// redux
import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// reducers
import { rootReducer } from "./reducers";

// actions
import { wsActions, wsUserActions } from "./actions/wsActions";

// middleware
import { socketMiddleware } from './middleware'


declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, socketMiddleware(wsActions), socketMiddleware(wsUserActions)));

export const store = createStore(rootReducer, enhancer);

