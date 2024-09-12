import '../App.css';
import React from 'react';

const NumberBall: React.FC<{ number: number }> = (props) => {
    return <div className="number-ball">{props.number}</div>;
};

export default NumberBall;
