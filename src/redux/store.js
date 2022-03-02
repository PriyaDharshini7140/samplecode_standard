import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./root-reducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewares = [thunk];

const composeEnhancers = composeWithDevTools({
    name: "Redux",
    realtime: true,
    trace: true,
  });

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
  );

