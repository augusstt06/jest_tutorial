import { useState } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState<number>(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => [setCounter(counter - 1)];
  return (
    <div>
      <h2>Jest Tutorial</h2>
      <p>{counter}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
