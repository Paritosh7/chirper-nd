import React from "react";
import { connect } from "react-redux";
import Tweet from "./Tweet";

function Dashboard(props) {
  console.log(props);
  return (
    <div>
      <h3 className="center">Your Timeline</h3>
      <ul className="dashboard-list">
        {props.tweetIds.map((id) => (
          <li key={id}>
            <div>
              <Tweet id={id} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function mapStateToProps({ tweets }) {
  return {
    tweetIds: Object.keys(tweets).sort(
      (a, b) => tweets[b].timestamp - tweets[a].timestamp
    ),
  };
}

export default connect(mapStateToProps)(Dashboard);
