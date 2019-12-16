import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  const increase = () =>{
    setCount(count + 1)
  }
  const decrease = () =>{
    setCount(count - 1)
  }

  return (
    <div className="App">
      <h1>Avidor's cool counting app</h1>
      <h2>{count}</h2>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
    </div>
  );
}

export default App;
