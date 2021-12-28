import React, { Component } from 'react';
import Question from './Question';
import Answer from './Answer';
import QuestionProgress from './QuestionProgress';

export default class Questions extends Component {
    constructor(props) {
        super(props);
        this.state = {index:0, answer:null};  
    }

    setAnswer(i) {
        this.setState({answer: i})
    }

    next() {
        this.setState({answer: null, index: this.state.index + 1})
    }

    render() {
        const qs = this.props.questions; 
        const q = qs[this.state.index];
        console.log(qs)
        return(
            <div>
                <QuestionProgress questions={qs} index={this.state.index} />
                {this.state.index >= qs.length?"Klaar!":<div>
                <Question question={q} handleClick={(i) => this.setAnswer(i)} />
                <Answer question={q} answer={this.state.answer} handleNext={() => this.next()} />
                </div>}
            </div>
        );
      }
}