import React, { Component } from "react";
import Question from "./Question";
import ScoreBoard from "./Scoreboard";
class Panel extends Component {
  render() {
    return (
      <div>
        <Question />
        <ScoreBoard />
      </div>
    );
  }
}

export default Panel;
