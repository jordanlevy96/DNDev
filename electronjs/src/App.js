import React from 'react';
import logo from './logo.svg';
import './App.css';
import Folder from './components/Folder.js';
import Browser from './components/Browser.jsx';
console.log('App.js loading...');

function App() {
  const renderStuff = <div>
    <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload!
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a></div>

  return (
    <div className="App">
      <header className="App-header">
      <Folder root="Material Plane" contents={["Forgotten Realms", "Eberron"]}></Folder>
      </header>
      <Browser render={renderStuff}></Browser>
    </div>
  );
}

export default App;
