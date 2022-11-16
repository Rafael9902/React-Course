import { useState } from "react"
import './CounterApp.css';

export const CounterApp = () => {
  // const [ counter, setCounter ] = useState(0);
  // const handleAdd = () => setCounter(counter + 1);
  // const handleSubstract = () => setCounter(counter - 1);

  const [ state, setCounter] = useState({
    counter1: 0,
    counter2: 0,
    counter3: 0
  });

  const { counter1, counter2, counter3 } = state;

  const handleAdd = () => setCounter({
    ...state,  
    counter1: counter1 + 1,
  });

  const handleSubstract = () => setCounter(counter1 - 1);

  return (
    <section className='counter__container'>
      <h1 className='counter__title'>Counter1: { counter1 }</h1>
      <h2 className='counter__title'>Counter2: { counter2 }</h2>
      <h3 className='counter__title'>Counter3: { counter3 }</h3>

      <button className='counter__button' onClick={ handleAdd }>+1</button>
      <button className='counter__button' onClick={ handleSubstract }>-1</button>
    </section>
  )
}
