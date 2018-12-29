import React, { Component } from "react";
import "typeface-roboto";
import "../App.css";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Context from "../Context.js";
class Scoreboard extends Component {
  render() {
    const { score, time,} = this.props;
      return (
        <Grid className="scoreBoard">
          <Typography variant="display1" gutterBottom align="center">
            Time:
            {time}
          </Typography>
          <Typography variant="display1" gutterBottom align="center">
            Score:
            {score}
          </Typography>
        </Grid>
      );
  
  }
}

export default Scoreboard;
