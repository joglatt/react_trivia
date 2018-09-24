import React, { Component } from "react";
import "typeface-roboto";
import "../App.css";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

class Scoreboard extends Component {
  render() {
    const { score, time,} = this.props;
      return (
        <Grid className="scoreBoard">
          <Typography variant="display1" gutterBottom>
            Time:
            {time}
          </Typography>
          <Typography variant="display1" gutterBottom>
            Score:
            {score}
          </Typography>
        </Grid>
      );
  
  }
}

export default Scoreboard;
