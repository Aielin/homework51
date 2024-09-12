import './App.css'
import {useState} from "react";
import NumberBalls from "./Components/NumberBalls.tsx";

const App = () =>  {
    const [numbers, setNumbers] = useState<number[]>([5, 11, 16, 23, 32]);

    const generateNumbers = () => {
        const numbers = new Set<number>();
        while (numbers.size < 5) {
            const randomNumber = Math.floor(Math.random() * (36 - 5 + 1)) + 5;
            numbers.add(randomNumber);
        }
        return Array.from(numbers).sort((a, b) => a - b);
    };

    return (
        <>
            <button type={"button"} onClick={() => setNumbers(generateNumbers())}>New numbers</button>
            <div className= "number-ball-container">
                <NumberBalls numbers={numbers} />
            </div>
        </>
    );
};

export default App
