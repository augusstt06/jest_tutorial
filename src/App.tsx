// import './App.css';

import { useState } from 'react';

import CountButton from './component/CountButton';
import CountView from './component/CountView';

function App() {
  const [count, setCount] = useState(0);
  const increase = () => setCount((prev) => prev + 1);
  const decrease = () => setCount((prev) => prev - 1);
  return (
    <main>
      <h2 data-testid='title-text'>Apply Jest</h2>
      <CountView count={count} />
      <CountButton increase={increase} decrease={decrease} />
    </main>
  );
}

export default App;
