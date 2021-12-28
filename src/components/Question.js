import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'

export default class Question extends Component {

    render() {
        return(
            <div>
          <h1>{this.props.question.question}</h1>
          {this.props.question.answers.map((q, i) => {
              return <Button key={i} onClick={(e) => this.props.handleClick(i, e)}>{q}</Button>;
          })}
          </div>
        );
      }
}