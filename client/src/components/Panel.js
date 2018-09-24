import React, { Component } from "react";
import Question from "./Question";
import ScoreBoard from "./Scoreboard";
import Selections from "./Selections";
import Paper from "@material-ui/core/Paper";
import "../App.css";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
class Panel extends Component {
  render() {
    const {
      currentQuestion,
      score,
      time,
      handleSelection,
      started,
      startClock
    } = this.props;
    if (started) {
      return (
        <Paper className="panel" align="center">
          <ScoreBoard score={score} time={time} />
          <Divider />
          <Question question={currentQuestion} />
          <Divider />
          <Selections
            handleSelection={handleSelection}
            question={currentQuestion}
          />
        </Paper>
      );
    } else {
      return (
        <Paper className="panel">
          <Button onClick={startClock}>
            {" "}
            <Typography variant="display4"> Start Game </Typography>
          </Button>
        </Paper>
      );
    }
  }
}

export default Panel;
