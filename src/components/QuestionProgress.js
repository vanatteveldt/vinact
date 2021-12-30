import React, { Component } from 'react';
import { Progress } from 'semantic-ui-react';

export default class QuestionProgress extends Component {
    render() {
        const n = this.props.questions.length;
        const i = this.props.ndone;
        const perc = 100 * i / n;
        let text = "Question: "+(this.props.index+1)+"/"+n
        if (i > 0) {
          text = (text + 
              " | Correct: "+ this.props.ncorrect + "/"+i+ 
              " | Score: "+Math.round(this.props.ncorrect / i * 100) + "%")
        }
        if (this.props.highscore) {
          text += " (PR: "+ this.props.highscore + " correct / " + Math.round(this.props.highscore / this.props.questions.length * 100) + "%)"
        }
        //const score = i>0?Math.round(this.props.ncorrect / i * 100)+"?"
        return <Progress percent={perc} color='green'>{text}</Progress>

      }
}