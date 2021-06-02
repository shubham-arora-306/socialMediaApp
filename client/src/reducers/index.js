import { combineReducers } from "redux";
import AlertReducer from "./alert";
import AuthReducer from "./auth";
import PostReducer from "./post";

export default combineReducers({
  AlertReducer,
  AuthReducer,
  PostReducer,
});
