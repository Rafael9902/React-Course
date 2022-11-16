import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {
  //first hook
  const [counter, setCounter] = useState(value);

  // handleadd
  const handleAdd = () => {
    setCounter( (c) => c + 1)
    //setCounter(counter + 1);
  }

  const handleSubstract = () => setCounter((c) => c - 1)

  const handleReset = () => setCounter(value)
    
  return (
    <>
      <h1>Counter App</h1>
      <h2>{counter} </h2>

      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSubstract}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}


CounterApp.propTypes = {
  value: PropTypes.number.isRequired
};

CounterApp.defaultProps = {
  value: 0
};

export default CounterApp;
