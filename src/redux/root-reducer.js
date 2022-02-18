import { combineReducers } from "redux";
import reducer from "./app/reducers";

const rootReducer = combineReducers({
 user: reducer,
});

export default rootReducer;
