import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
function App() {  const [showOptions, setShowOptions] = useState(false);

  const handleButtonClick = () => {
    setShowOptions(true);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> {!showOptions ? (
        <div>
          <h1>Main Screen</h1>
          <button onClick={handleButtonClick}>Show Options</button>
        </div>
      ) : (
        <div>
          <h1>New Options</h1>
          {/* Add your new options here */}
        </div>
      )}
    </div>
  );
}

export default App;
