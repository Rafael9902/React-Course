import React from 'react'
import { useCounter } from '../../hooks/useCounter'

import './counter.css'

export const CounterCustomHook = () => {
    const { state, increment, decrement, reset } = useCounter();

    return (
        <>
            <h1>Counter Hook: { state }</h1>

            <hr />

            <button className='btn btn-success' onClick={() => increment(2)}>+ 1</button>
            <button className='btn btn-success' onClick={() => decrement(2)}>- 1</button>
            <button className='btn btn-danger'  onClick={reset}>Reset</button>
        </>
    )
}
