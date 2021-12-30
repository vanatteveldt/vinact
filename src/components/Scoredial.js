import React, { Component } from 'react';
import ReactSpeedometer from "react-d3-speedometer"

export default class QuestionProgress extends Component {
    render() {
        const value = this.props.ndone === 0?50:Math.round(100 * this.props.ncorrect / this.props.ndone)
        const text = this.props.ndone === 0?"Let's go!":value+"% (" + this.props.ncorrect + "/" + this.props.ndone + ")" ;
        return <ReactSpeedometer maxValue={100} value={value} currentValueText={text}/>

      }
}