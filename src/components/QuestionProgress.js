import React, { Component } from 'react';
import { Progress } from 'semantic-ui-react';

export default class QuestionProgress extends Component {
    render() {
        const n = this.props.questions.length;
        const i = this.props.index;
        const perc = 100 * i / n;
        return <Progress percent={perc} color='green'>{Math.min(n, i+1)}/{n}</Progress>
      }
}