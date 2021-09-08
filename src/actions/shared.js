import getInitialData from "../utils/api";
import { SET_AUTHED_USER } from "./authedUser";
import { receiveTweetsAction } from "./tweets";
import { receiveUsersAction } from "./users";

const AUTHED_ID = "sarah_edo";

const handleInitialDataAction = () => (dispatch) => {
  getInitialData().then(({ users, tweets }) => {
    dispatch(receiveTweetsAction(tweets));
    dispatch(receiveUsersAction(users));
    dispatch(SET_AUTHED_USER(AUTHED_ID));
  });
};
