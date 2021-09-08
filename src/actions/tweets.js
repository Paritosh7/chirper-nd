export const RECEIVE_TWEETS = "RECEIVE_TWEETS";

export const receiveTweetsAction = (tweets) => ({
  type: RECEIVE_TWEETS,
  tweets,
});
