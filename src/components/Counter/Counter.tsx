import { useState } from 'react';
import { noop } from '../../util/noop';

export interface OnCounterValueChanged {
  (value: number): void;
}

export interface CounterProps {
  value?: number;
  onValueChanged?: OnCounterValueChanged;
}

export const Counter: React.FC<CounterProps> = ({ value = 100, onValueChanged = noop }) => {
  const increment = () => {
    onValueChanged(value + 1);
  };

  const decrement = () => {
    onValueChanged(value - 1);
  };

  return (
    <>
      <button onClick={decrement}>-</button>
      {value}
      <button onClick={increment}>+</button>
    </>
  );
};
