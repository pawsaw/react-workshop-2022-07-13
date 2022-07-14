import { useState } from 'react';

export const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setTimeout(() => {
      setCount((oldCount) => oldCount + 1);
    }, 2000);

    console.log({ count });
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <button onClick={decrement}>-</button>
      {count}
      <button onClick={increment}>+</button>
    </>
  );
};
