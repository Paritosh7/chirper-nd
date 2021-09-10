import React from "react";
import { connect } from "react-redux";
import Tweet from "./Tweet";
import NewTweet from "./NewTweet";

function TweetPage(props) {
  const { id, replies } = props;

  console.log("Tweet Page props are", props);
  return (
    <div>
      <Tweet id={id} />
      <NewTweet id={id} />
      {replies.length ? (
        <ul>
          <h3 className="center">Replies</h3>
          {replies.map((replyId) => (
            <li key={replyId}>
              <Tweet id={replyId} />
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

const mapStateToProps = ({ authUser, tweets, users }, props) => {
  const { id } = props.match.params;

  return {
    id,
    replies: tweets[id]
      ? tweets[id].replies.sort(
          (a, b) => tweets[b].timeStamp - tweets[a].timeStamp
        )
      : [],
  };
};

export default connect(mapStateToProps)(TweetPage);
