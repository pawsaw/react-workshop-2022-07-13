import { useCounter } from '../../util/counter';

export interface CounterProps {}

export const Counter: React.FC<CounterProps> = () => {
  const { count, increment } = useCounter();

  return (
    <>
      {count}
      <button onClick={increment}>+</button>
    </>
  );
};
