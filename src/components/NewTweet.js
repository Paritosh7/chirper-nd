import React, { useState } from "react";
import { connect } from "react-redux";
import { handleAddTweet } from "../actions/tweets";

export function NewTweet(props) {
  const [state, setState] = useState(() => ({ text: "" }));

  const { text } = state;
  const tweetLeft = 280 - text.length;

  function handleChange(eve) {
    const text = eve.target.value;
    setState({ text });
  }

  function handleSubmit(eve) {
    eve.preventDefault();
    const { dispatch, id } = props;
    console.log("PRops are : ", props);
    dispatch(handleAddTweet(text, id));

    setState({ text: "" });
  }

  return (
    <div>
      <h3 className="center">Compose new Tweet</h3>
      <form className="new-tweet" onSubmit={handleSubmit}>
        <textarea
          placeholder="What's happening?"
          value={text}
          onChange={handleChange}
          className="textarea"
          maxLength={280}
        />
        {tweetLeft <= 100 && <div className="tweet-length">{tweetLeft}</div>}
        <button className="btn" type="submit" disabled={text === ""}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default connect()(NewTweet);
