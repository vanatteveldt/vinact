import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'

export default class Answer extends Component {

    render() {
        if (this.props.answer === null) {
            return <div>Kies het goede antwoord!</div>
        } else {
            const given = this.props.question.answers[this.props.answer];
            const ci = this.props.question.correct;
            const correct = this.props.question.answers[ci];
            const wascorrect = this.props.answer === ci;
            const text = (wascorrect?<span>YEAH! Het antwoord {given} klopt!</span>:
                    <span>Helaas, jouw antwoord was {given}, maar het goede antwoord was {correct}</span>)


            return <div>
                {text}<br/>
                <Button onClick={this.props.handleNext}>En doorrrr</Button>
            </div>
        }
        
      }
}