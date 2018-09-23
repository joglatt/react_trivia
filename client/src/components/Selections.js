import React, { Component } from "react";
import Button from "@material-ui/core/Button";
class Selections extends Component {
  render() {
    const { handleSelection, question } = this.props;

    return (
      <div>
        <Button
          onClick={handleSelection}
          size="large"
          color="primary"
          value={question.a1}
        >
          {" "}
          {question.a1}{" "}
        </Button>
        <Button
          onClick={handleSelection}
          size="large"
          color="primary"
          value={question.a2}
        >
          {" "}
          {question.a2}{" "}
        </Button>
        <Button
          onClick={handleSelection}
          size="large"
          color="primary"
          value={question.a3}
        >
          {" "}
          {question.a3}{" "}
        </Button>
        <Button
          onClick={handleSelection}
          size="large"
          color="primary"
          value={question.a4}
        >
          {" "}
          {question.a4}{" "}
        </Button>
      </div>
    );
  }
}

export default Selections;
