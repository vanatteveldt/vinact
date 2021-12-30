import React, { Component } from 'react';
import { Progress } from 'semantic-ui-react';

export default class QuestionProgress extends Component {
    render() {
        const n = this.props.questions.length;
        const i = this.props.index;
        const perc = 100 * i / n;
        let text = "Progress: "+Math.min(n, i+1)+"/"+n
        if (i > 0) {
          text = (text + 
              " | Correct: "+ this.props.ncorrect + "/"+i+ 
              " | Score: "+Math.round(this.props.ncorrect / i * 100) + "%")
        }
        //const score = i>0?Math.round(this.props.ncorrect / i * 100)+"?"
        return <Progress percent={perc} color='green'>{text}</Progress>

      }
}