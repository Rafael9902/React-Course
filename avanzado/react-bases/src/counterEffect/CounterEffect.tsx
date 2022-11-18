import { useState, useEffect, useRef } from "react"
import { gsap } from 'gsap';

const MAXIMUM_COUNTER = 10;

export const CounterEffect = () => {
  const [counter, setCounter] = useState(5);
  const handleClick = () => {
    setCounter((prev) => Math.min(prev + 1, MAXIMUM_COUNTER));
  } 
  const counterElement = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if(counter < 10) return;

    console.log('effect');
    const timeline = gsap.timeline();

    timeline.to(counterElement.current, { y: -10, duration: 0.2, ease: 'ease.out'})
            .to(counterElement.current, { y: 0, duration: 1, ease: 'bounce.out'})
            
  }, [counter])
  
  return (
    <>
      <h1>Counter:</h1>
      <h2 ref={ counterElement }>{ counter }</h2>
      <button onClick={ handleClick }>
        +1
      </button>
    </>
  )
}
