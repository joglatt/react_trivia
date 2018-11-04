import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import "../App.css";
import Typography from "@material-ui/core/Typography";
import Context from "../Context.js";

class NotStarted extends Component {
  render() {
    return (
      <Context.Consumer>
        <Paper className="panel">
          <Button onClick={initGame}>
            {" "}
            <Typography color="primary" variant="display4">
              {" "}
              Start Game{" "}
            </Typography>
          </Button>
        </Paper>
      </Context.Consumer>
    );
  }
}

export default NotStarted;
