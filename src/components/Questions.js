import React, { Component } from 'react';
import Question from './Question';
import Answer from './Answer';
import QuestionProgress from './QuestionProgress';
import Scoredial from './Scoredial'
import {  Grid, Segment, Image, Header } from 'semantic-ui-react'

export default class Questions extends Component {
    constructor(props) {
        super(props);
        this.pr = this.props.highscore;
        this.state = {index:0, answer:null, ndone:0, ncorrect:0, new_pr: false};  
    }

    setAnswer(i) {
        const correct=(i === this.props.questions[this.state.index].correct);
        const ndone=this.state.ndone + 1;
        const ncorrect=this.state.ncorrect + correct;
        let new_pr = this.state.new_pr;
        if ((ndone) >= this.props.questions.length) {
            new_pr = this.props.handleDone(ncorrect);
        }
        this.setState({answer: i, ndone: ndone, ncorrect: ncorrect, new_pr:new_pr})
    }

    next() {
        this.setState({answer: null, index: this.state.index + 1})
    }


    render() {
        const qs = this.props.questions; 
        const q = qs[this.state.index];
        if (this.state.index >= qs.length) {
            const url = (this.state.new_pr?"http://static.everypixel.com/ep-pixabay/0838/6004/0987/70229/8386004098770229812-cup.png"
                                          :"https://marketingsmokeandmirrors.files.wordpress.com/2018/07/shutterstock_142333726b.jpg")
            return <div>
                <QuestionProgress highscore={this.pr} questions={qs} ndone={this.state.ndone} index={this.state.index} ncorrect={this.state.ncorrect} />
                <Grid stackable columns="2">
                    <Grid.Column style={{paddingTop: "5em"}}>
                <Scoredial answer={this.state.answer} ncorrect={this.state.ncorrect} ndone={this.state.ndone} />
                    </Grid.Column>
                    <Grid.Column>
                    {this.state.new_pr?<Header as='h2' textAlign='center'>New PR!</Header>:""}
                <Image src={url} fluid={true}/>
                </Grid.Column>
                </Grid>
                </div>;
        }
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