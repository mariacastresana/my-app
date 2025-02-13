import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const sum = () => {
    setCount(count+1);
  };
  const nombre= "Hugo Reyes"
  const elemento= <h1>Hello, {nombre} </h1>
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{count}</p>
        <button onClick={sum}>add</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{elemento}</p>
        <p>
          <strong>hola </strong>
          {2*5}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
