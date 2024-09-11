import '../App.css';
import React from 'react';
interface Props {
    number: number
}

const NumberBall: React.FC<Props> = props =>{
    return <div>{props.number}</div>
}

export default NumberBall;