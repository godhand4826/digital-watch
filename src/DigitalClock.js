import React, { Component } from 'react';
import SevenSegment from './SevenSegment';
import './DigitalClock.css'
class DigitalClock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            digits: new Array(6).fill(8)
        }
    }
    componentDidMount() {
        setInterval(() => {
            const date = new Date().toString().split(" ")
            const time = date[4].split(":")
            const hour10 = time[0][0]
            const hour01 = time[0][1]
            const min10 = time[1][0]
            const min01 = time[1][1]
            const sec10 = time[2][0]
            const sec01 = time[2][1]
            this.setState({
                digits: [
                    hour10,
                    hour01,
                    min10,
                    min01,
                    sec10,
                    sec01
                ]
            })
        }, 1000)
    }
    render() {
        let digits = []
        for (let i = 0; i < this.state.digits.length; i++) {
            digits.push(<SevenSegment value={this.state.digits[i]} key={i} />)
        }
        return (<div className="clock">
            {digits}
        </div>);
    }
}

export default DigitalClock;