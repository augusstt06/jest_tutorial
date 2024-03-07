// import './App.css';

import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState<number>(0);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/todos')
      .then((res) => res.json())
      .then((res) => setTodos(res.todos));
  }, []);
  return (
    <main>
      <h2 data-testid='title-text'>Apply Jest</h2>
      <div>
        <button onClick={() => setCount(count + 1)}>count is {count}</button>
      </div>
      {todos.length && <div>Todo List : {todos.length}</div>}
    </main>
  );
}

export default App;
