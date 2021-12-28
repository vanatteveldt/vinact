import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
export default class QuestionSetPicker extends Component {
    render() {
        return(
<Menu fluid vertical tabular>
{this.props.options.map((obj, i) => (
                    <Menu.Item key={i} name={obj.name} active={this.props.selected == obj} 
                    onClick={() => this.props.handlePick(obj)}/>
                    ))}
        
          </Menu>
        );
    } 
}