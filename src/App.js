import React from 'react';
import { useState } from 'react';

const App = () => {

  const [counter, setCounter] = useState(0);

  const add = () => {
    setCounter(counter + 1);
  }

  const del = () => {
    setCounter(counter - 1);
  }

  return (
    <div >
      <button onClick={add}>Add</button>
      <button onClick={del}>Del</button>
      <p id='counter'>{counter}</p>
      <NOWYAAPP />
    </div>
  );
}

export default App;
