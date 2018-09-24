import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import "../App.css";

class Question extends Component {
  render() {
    return (
      <Grid className="question">
        <Typography variant="display2" gutterBottom align="center">
          {this.props.question.question}
        </Typography>
      </Grid>
    );
  }
}

export default Question;
