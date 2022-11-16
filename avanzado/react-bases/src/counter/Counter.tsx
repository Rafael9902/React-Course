import { useState } from "react";
import { CounterProps } from "./counter-props.interface";

export const Counter = ({ initialValue = 0 }: CounterProps) => {
    const [counter, setCounter] = useState(initialValue)
    const handleClick = () => setCounter(previous => previous + 1);

    return (
        <>
            <h1>Counter App</h1>
            <h2>Counter: {counter}</h2>
            <button onClick={handleClick}>+1</button>
        </>
    )
}