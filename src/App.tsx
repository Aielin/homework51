
import './App.css'
import {useState} from "react";
import NumberBalls from "./Components/NumberBalls.tsx";

const App = () =>  {
    const [numbers, setNumbers] = useState<number[]>(generateNumbers());

    return (
        <>
            <button type={"button"} onClick={() => setNumbers(generateNumbers())}>New numbers</button>
            <NumberBalls numbers={numbers} />
        </>
    )
}

const generateNumbers = () => Array.from({ length: 5 }, () => Math.floor(Math.random() * 100))

export default App
