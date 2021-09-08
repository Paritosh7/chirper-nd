import { combineReducers } from "redux";
import { authReducer } from "./authUser";
import { tweetsReducer } from "./tweets";
import { usersReducer } from "./users";

export default combineReducers({
  authReducer,
  tweetsReducer,
  usersReducer,
});
