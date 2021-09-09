import React from "react";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
import { handleInitialDataAction } from "../actions/shared";
import Dashboard from "./Dashboard";

function App({ loading, dispatch }) {
  React.useEffect(() => {
    dispatch(handleInitialDataAction());
  });
  return (
    <div>
      <LoadingBar />
      {loading ? null : <Dashboard />}
    </div>
  );
}

const mapStateToProps = ({ authUser }) => {
  return { loading: authUser === null };
};

export default connect(mapStateToProps)(App);
