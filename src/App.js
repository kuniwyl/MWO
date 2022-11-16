import React from 'react';
import { useState } from 'react';

const App = () => {

  const [counter, setCounter] = useState(0);

  const add = () => {
    setCounter(counter + 1);
  }

  return (
    <div >
      <button onClick={add}>Click Me!!!</button>
      <p id='counter'>{counter}</p>
    </div>
  );
}

export default App;
