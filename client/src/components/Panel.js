import React, { Component } from "react";
import Question from "./Question";
import ScoreBoard from "./Scoreboard";
import Selections from "./Selections";
import Paper from '@material-ui/core/Paper';
import "../App.css";

class Panel extends Component {
  render() {
    const { currentQuestion, score, time, handleSelection } = this.props;
    return (
      <Paper className="panel" align="center" >
        <ScoreBoard score={score} time={time} />
        <Question question={currentQuestion} />
        <Selections
          handleSelection={handleSelection}
          question={currentQuestion}
        />
      </Paper>
    );
  }
}

export default Panel;
