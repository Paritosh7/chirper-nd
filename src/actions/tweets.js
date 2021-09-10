import { hideLoading, showLoading } from "react-redux-loading";
import { saveLikeToggle, saveTweet } from "../utils/api";

export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const TOGGLE_TWEET = "TOGGLE_TWEET";
export const ADD_TWEET = "ADD_TWEET";

function addTweet(tweet) {
  return {
    type: ADD_TWEET,
    tweet,
  };
}

export function handleAddTweet(text, replyingTo) {
  return (dispatch, getState) => {
    const { authUser } = getState();

    dispatch(showLoading());

    return saveTweet({
      text,
      author: authUser,
      replyingTo,
    })
      .then((tweet) => dispatch(addTweet(tweet)))
      .then(() => dispatch(hideLoading()));
  };
}

export const receiveTweetsAction = (tweets) => ({
  type: RECEIVE_TWEETS,
  tweets,
});

export const toggleTweet = ({ id, authUser, hasLiked }) => ({
  type: TOGGLE_TWEET,
  id,
  authUser,
  hasLiked,
});

export function handleToggleTweet(info) {
  return (dispatch) => {
    dispatch(toggleTweet(info));
    saveLikeToggle(info).catch((err) => {
      console.warn("Error in handleToggleTweet: ", err);
      dispatch(toggleTweet({ ...info, hasLiked: !info.hasLiked }));
      alert("There was an error liking the tweet. Please try again!");
    });
  };
}
