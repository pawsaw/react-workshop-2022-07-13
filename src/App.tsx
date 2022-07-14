import React from 'react';
import './App.css';
import { SimpleName } from './components/SimpleName';

let count = 0;

const Counter = () => {
  const increment = () => {
    count = count + 1;
    console.log({ count });
  };

  return (
    <button onClick={increment}>
      {count}
    </button>
  );
};


function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
