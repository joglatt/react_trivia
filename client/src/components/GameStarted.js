import React, { Component } from "react";
// import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import "../App.css";
// import Context from "../Context.js";
// import Question from "./Question.js";
import ScoreBoard from "./Scoreboard.js";
// import Selections from "./Selections.js";

class GameStarted extends Component {
  
  render() {
    return (
      <Context.Consumer>
        <Paper className="panel">
          <ScoreBoard />
          {/* <Divider />
        <Question />
        <Divider />
        <Selections /> */}
        </Paper>
      </Context.Consumer>
    );
  }
}

export default GameStarted;
