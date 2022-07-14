import React, { useState } from 'react';
import './App.css';
import { Counter, OnCounterValueChanged } from './components/Counter';

function App() {
  const [counterValue, setCounterValue] = useState(300);
  const onCounterValueChanged: OnCounterValueChanged = (value: number) => setCounterValue(value);

  return (
    <div className="App">
      <Counter value={counterValue} onValueChanged={onCounterValueChanged} />
      <p>Parent says: {counterValue}</p>
    </div>
  );
}

export default App;
