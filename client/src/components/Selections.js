import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import "../App.css";
import Context from "../Context.js";
class Selections extends Component {
  render() {
    return (
      <div>
        <Grid item xs={12}>
          <Button
            onClick={handleSelection}
            size="large"
            color="primary"
            value={question.a1}
          >
            {" "}
            {question.a1}{" "}
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            onClick={handleSelection}
            size="large"
            color="primary"
            value={question.a2}
          >
            {" "}
            {question.a2}{" "}
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            onClick={handleSelection}
            size="large"
            color="primary"
            value={question.a3}
          >
            {" "}
            {question.a3}{" "}
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            onClick={handleSelection}
            size="large"
            color="primary"
            value={question.a4}
          >
            {" "}
            {question.a4}{" "}
          </Button>
        </Grid>
      </div>
    );
  }
}

export default Selections;
