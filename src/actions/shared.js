import { hideLoading, showLoading } from "react-redux-loading";
import { getInitialData } from "../utils/api";
import { setAuthedUser } from "./authedUser";
import { receiveTweetsAction } from "./tweets";
import { receiveUsersAction } from "./users";

const AUTHED_ID = "sarah_edo";

export const handleInitialDataAction = () => (dispatch) => {
  dispatch(showLoading());
  getInitialData().then(({ users, tweets }) => {
    dispatch(receiveTweetsAction(tweets));
    dispatch(receiveUsersAction(users));
    dispatch(setAuthedUser(AUTHED_ID));
    dispatch(hideLoading());
  });
};
