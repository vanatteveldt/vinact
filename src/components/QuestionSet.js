import React, { Component } from 'react';
import Questions from './Questions';
import { Grid, Segment } from 'semantic-ui-react';
import QuestionSetPicker from './QuestionSetPicker'

function shuffleArray(array) {
    return array
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
}

export default class QuestionSet extends Component {
    constructor(props) {
        super(props);
        const highscores = JSON.parse(window.localStorage.getItem('highscores')) || {}
        this.state = {
            questionset: Object.values(this.props.questions)[0], 
            key: 1,
            highscores: highscores,        
        };  
    }

    changeSet(questionset) {
        this.setState({questionset: questionset, key:this.state.key + 1});
    }

    setScore(score) {
        const q = this.state.questionset["name"]
        const prev = this.state.highscores[q]
        console.log({prev:prev, score:score, update: (prev === undefined || prev < score)})
        if (prev === undefined || prev < score) {
            const highscores = {...this.state.highscores, [q]: score}
            window.localStorage.setItem('highscores', JSON.stringify(highscores));
            this.setState({highscores: highscores})
        }
    }

    render() {
        const questions = shuffleArray(this.state.questionset["questions"])
        return(
              <Grid stackable columns={2}>
              <Grid.Column stretched width={4}>
                <QuestionSetPicker 
                    selected={this.state.questionset} 
                    options={Object.values(this.props.questions)} 
                    handlePick={(qs) => this.changeSet(qs)}
                    highscores={this.state.highscores}/>
              </Grid.Column>
              <Grid.Column stretched width={12}>
                  <Segment><b>{this.state.questionset['name']}</b>
              <Questions 
                  highscore={this.state.highscores[this.state.questionset['name']]} 
                  questions={questions} 
                  key={this.state.key} 
                  handleDone={(score) => this.setScore(score)}></Questions>
              </Segment>
        
              </Grid.Column>
              </Grid>
        );
    } 
}