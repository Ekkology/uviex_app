// src/components/Velocimeter.js
import React, { Component } from 'react';
import './Velocimeter.css';

class Velocimeter extends Component {
    constructor() {
        super();
        this.state = {
            speed: 0
        };
    }

    updateSpeed = () => {
        const speed = Math.floor(Math.random() * 100) + 1;
        this.setState({ speed });
    }

    componentDidMount() {
        this.updateSpeed();
        setInterval(this.updateSpeed, 1000);
    }

    render() {
        const { speed } = this.state;
        const rotation = `rotate(${speed * 3.6 - 180}deg)`;
        return (
            <div className="velocimeter">
                <div className="needle" style={{ transform: rotation }}></div>
                <div className="label">{speed}</div>
            </div>
        );
    }
}

export default Velocimeter;
