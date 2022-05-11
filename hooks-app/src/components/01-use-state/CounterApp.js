import React, { useState } from 'react'
import './counter.css'

export const CounterApp = () => {
  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
    counter4: 40
  });

  const { counter1, counter2 } = state;

  return (
    <>
     <h1>Counter: { counter1 | JSON }</h1>
     <h1>Counter2: { counter2 | JSON }</h1>

     <hr />

     <button 
        className='btn btn-primary'
        onClick={() => setState({
          ...state,
          counter2: counter2 + 1
        })}>
         +1
     </button>

    </>
  )
}
