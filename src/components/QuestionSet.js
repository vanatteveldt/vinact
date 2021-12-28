import React, { Component } from 'react';
import Questions from './Questions';
import { Grid, Segment } from 'semantic-ui-react';
import QuestionSetPicker from './QuestionSetPicker'

export default class QuestionSet extends Component {
    constructor(props) {
        super(props);
        this.state = {questionset: Object.values(this.props.questions)[0]};  
    }

    changeSet(questionset) {
        this.setState({questionset: questionset});
    }

    render() {
        console.log(this.state.questionset["questions"]);

        return(
              <Grid>
              <Grid.Column stretched width={4}>
                <QuestionSetPicker 
                    selected={this.state.questionset} 
                    options={Object.values(this.props.questions)} 
                    handlePick={(qs) => this.changeSet(qs)}/>
              </Grid.Column>
              <Grid.Column stretched width={12}>
                  <Segment><b>{this.state.questionset['name']}</b>
              <Questions questions={this.state.questionset["questions"]}></Questions>
              </Segment>
        
              </Grid.Column>
              </Grid>
        );
    } 
}