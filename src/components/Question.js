import React, { Component } from 'react';
import { Button, Grid } from 'semantic-ui-react'

export default class Question extends Component {

    render() {
      console.log(this.props.answer);
        return(
            <div>
          <h1>{this.props.question.question}</h1>
          <Grid stackable columns={2}>
          {this.props.question.answers.map((q, i) => (
            <Grid.Column style={{padding:".5em"}}>
              <Button style={{width:"100%"}} basic={i != this.props.answer} 
                             color={this.props.answer==null?"":(this.props.question.correct==i?"green":"red")}
                             disabled={this.props.answer != null} 
                             key={i} 
                             onClick={(e) => this.props.handleClick(i, e)}
                      >
                {q}
              </Button>
            </Grid.Column>
          ))}
          </Grid>
          </div>
        );
      }
}