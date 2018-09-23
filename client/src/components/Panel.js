import React, { Component } from "react";
import Question from "./Question";
import ScoreBoard from "./Scoreboard";
import Selections from "./Selections";
class Panel extends Component {
  render() {
    const { currentQuestion, score, time, handleSelection } = this.props;
    return (
      <div>
        <Question question={currentQuestion} />
        <ScoreBoard score={score} time={time} />
        <Selections
          handleSelection={handleSelection}
          question={currentQuestion}
        />
      </div>
    );
  }
}

export default Panel;
