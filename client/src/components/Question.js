import React, { Component } from 'react';

class Question extends Component {
    render() {
        return (
            <div>
               {this.props.question.question}
            </div>
        );
    }
}

export default Question;