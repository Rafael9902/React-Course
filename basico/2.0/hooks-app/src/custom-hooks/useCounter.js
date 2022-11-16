import { useState } from "react";

export const useCounter = ( initialValue = 10 ) => {
    const [ counter, setCounter ] = useState(initialValue);

    const increment = ( factor = 1 )  => setCounter(counter + factor);
    const decrement = ( factor = 1 ) => (counter - factor) > 0 && setCounter(counter - factor);

    return {
        counter,
        increment,
        decrement
    }
}
