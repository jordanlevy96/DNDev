import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Folder from './components/Folder.jsx';
import Browser from './components/Browser.jsx';
console.log('App.js loading...');

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Folder root="Material Plane" contents={["Forgotten Realms", "Eberron", "Distant Stars"]}></Folder>
      </header>
      <Browser></Browser>
    </div>
  );
}

export default App;
