import React from "react";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { handleInitialDataAction } from "../actions/shared";
import Dashboard from "./Dashboard";
import Nav from "./Nav";
import NewTweet from "./NewTweet";
import TweetPage from "./TweetPage";

function App({ loading, dispatch }) {
  React.useEffect(() => {
    dispatch(handleInitialDataAction());
  });
  return (
    <Router>
      <div className="container">
        <Nav />
        <LoadingBar />
        {loading ? null : (
          <div>
            <Route path="/" exact component={Dashboard} />
            <Route path="/tweet/:id" component={TweetPage} />
            <Route path="/new" component={NewTweet} />
          </div>
        )}
      </div>
    </Router>
  );
}

const mapStateToProps = ({ authUser }) => {
  return { loading: authUser === null };
};

export default connect(mapStateToProps)(App);
