import React, { Component } from 'react';
import Question from './Question';
import Answer from './Answer';
import QuestionProgress from './QuestionProgress';
import Scoredial from './Scoredial'
import {  Segment } from 'semantic-ui-react'

export default class Questions extends Component {
    constructor(props) {
        super(props);
        this.pr = this.props.highscore;
        this.state = {index:0, answer:null, ndone:0, ncorrect:0};  
    }

    setAnswer(i) {
        const correct=(i === this.props.questions[this.state.index].correct);
        const ndone=this.state.ndone + 1;
        const ncorrect=this.state.ncorrect + correct;
        this.setState({answer: i, ndone: ndone, ncorrect: ncorrect})
        if ((ndone) >= this.props.questions.length) {
            this.props.handleDone(ncorrect);
        }
    }

    next() {
        this.setState({answer: null, index: this.state.index + 1})
    }


    render() {
        const qs = this.props.questions; 
        const q = qs[this.state.index];
        return(
            <div>
                <QuestionProgress highscore={this.pr} questions={qs} ndone={this.state.ndone} index={this.state.index} ncorrect={this.state.ncorrect} />
                {this.state.index >= qs.length?"Klaar!":<div>
                <Question question={q} answer={this.state.answer} handleClick={(i) => this.setAnswer(i)} />
                <Segment style={{ minHeight: "7em" }}><Answer question={q} answer={this.state.answer} handleNext={() => this.next()} /></Segment>
                </div>}
                <Scoredial answer={this.state.answer} ncorrect={this.state.ncorrect} ndone={this.state.ndone} />
            </div>
        );
      }
}