import React, { Component } from "react";
import Button from "@material-ui/core/Button";
class Selections extends Component {
  render() {
    console.log(this.props.question);
    return (
      <div>
        <Button size="large" color="primary">
          {" "}
          {this.props.question.a1}{" "}
        </Button>
        <Button size="large" color="primary">
          {" "}
          {this.props.question.a2}{" "}
        </Button>
        <Button size="large" color="primary">
          {" "}
          {this.props.question.a3}{" "}
        </Button>
        <Button size="large" color="primary">
          {" "}
          {this.props.question.a4}{" "}
        </Button>
      </div>
    );
  }
}

export default Selections;
