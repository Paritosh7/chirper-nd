import { loadingBarReducer } from "react-redux-loading";
import { combineReducers } from "redux";
import { authReducer } from "./authUser";
import { tweetsReducer } from "./tweets";
import { usersReducer } from "./users";

export default combineReducers({
  authUser: authReducer,
  tweets: tweetsReducer,
  users: usersReducer,
  loadingBar: loadingBarReducer,
});
