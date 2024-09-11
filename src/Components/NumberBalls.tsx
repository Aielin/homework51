import '../App.css';
import React from 'react';
import NumberBall from "./NumberBall.tsx";
interface Props {
    numbers: Array<number>;
}

const NumberBalls: React.FC<Props> = props =>{
    return  props.numbers.map((number, index) => (<NumberBall number={number} key={index}  />))

}

export default NumberBalls;