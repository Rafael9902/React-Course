import { useState } from "react";
import {CounterProps} from "./counter-by-props.interface";

export const CounterBy = ({ initialValue = 5 }: CounterProps) => {
    const [{ counter, clicks }, setCounterState] = useState({
        counter: initialValue,
        clicks: 0
    });

    const handleClick = (factor: number) => {
        setCounterState(({counter, clicks}) => ({
            counter: counter + factor,
            clicks: clicks + 1
        }))
    }

    return (
        <>
            <h1>Counter App</h1>
            <h2>Counter: {counter}</h2>
            <h2>Clicks: {clicks}</h2>

            <button onClick={() => handleClick(1)}>+1</button>
            <button onClick={() => handleClick(5)}>+5</button>
        </>
    )
}
