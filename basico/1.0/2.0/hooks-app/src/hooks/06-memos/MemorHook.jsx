import { useState } from "react";
import { useCounter } from "../../custom-hooks/useCounter";
import { Small } from "./Small";

export const MemoHook = () => {
  const { counter, increment } = useCounter(0);
  const [show, setShow] = useState(true);

  return (
    <>
      <h1>
        Counter: <Small value={counter} />
      </h1>

      <button onClick={() => increment()}>+1</button>
      <button onClick={() => setShow(!show)}>
        Show/Hide: {JSON.stringify(show)}
      </button>
    </>
  );
};
