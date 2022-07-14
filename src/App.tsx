import React, { useState } from 'react';
import './App.css';
import { Counter, OnCounterValueChanged } from './components/Counter';
import { Tab, Tabs } from './components/Tabs';

function App() {
  return (
    <div className="App">
      <Tabs>
        <Tab label="Hallo">Hier kommt was</Tab>
        <Tab label="Welt">Hier kommt Welt</Tab>
      </Tabs>
    </div>
  );
}

export default App;
