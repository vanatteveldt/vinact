import React, { Component } from 'react';
import ReactSpeedometer from "react-d3-speedometer"

export default class QuestionProgress extends Component {
    render() {
        const i = this.props.index + (this.props.answer != null)
        console.log(i);
        const value = i == 0?50:Math.round(100 * this.props.ncorrect / i)
        const text = i == 0?"Let's go!":value+"% (" + this.props.ncorrect + "/" + i + ")" ;
        return <ReactSpeedometer maxValue={100} value={value} currentValueText={text}/>

      }
}