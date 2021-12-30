import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
export default class QuestionSetPicker extends Component {
    render() {
        return(
<Menu fluid vertical tabular>
{this.props.options.map((obj, i) => {
    let text = obj.name;
    const pr = this.props.highscores[obj.name];
    if (pr !== undefined) {
        const score = Math.round(100 * pr / obj.questions.length)
        text = text + " (PR: "+score+"%)";
    }
    return <Menu.Item key={i} name={text} active={this.props.selected === obj} 
                    onClick={() => this.props.handlePick(obj)}>
                        {text}
                        </Menu.Item>
})}
        
          </Menu>
        );
    } 
}