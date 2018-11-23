import React, { Component } from 'react';
import "./SevenSegment.css"
class SevenSegment extends Component {
    constructor(props) {
        super(props);
        this.TABLE = {
            // t, lt, rt, m, lb, rb, b
            0: [true, true, true, false, true, true, true],
            1: [false, false, true, false, false, true, false],
            2: [true, false, true, true, true, false, true],
            3: [true, false, true, true, false, true, true],
            4: [false, true, true, true, false, true, false],
            5: [true, true, false, true, false, true, true],
            6: [true, true, false, true, true, true, true],
            7: [true, false, true, false, false, true, false],
            8: [true, true, true, true, true, true, true],
            9: [true, true, true, true, false, true, true]
        }

    }
    render() {
        const value = this.props.value

        let bars = []
        for (let i = 0; i < 7; i++) {
            const show = this.TABLE[value][i]
            bars.push(<span className={"bar" + i + (show ? " show" : "")}
                key={i} ></span>)
        }

        return (<div className="digit">
            {bars}
        </div>);
    }
}

export default SevenSegment;