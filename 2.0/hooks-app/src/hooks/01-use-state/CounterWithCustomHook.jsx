import { useCounter } from "../../custom-hooks/useCounter";
import "./CounterApp.css";

export const CounterWithCustomHook = () => {
  const { counter, increment, decrement } = useCounter(5);

  return (
    <section className="counter__container">
      <h1 className="counter__title">Counter: {counter}</h1>

      <button className="counter__button" onClick={() => increment(2)}>
        +1
      </button>
      <button className="counter__button" onClick={() => decrement(2)}>
        -1
      </button>
    </section>
  )
};
