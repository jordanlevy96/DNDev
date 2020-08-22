import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Browser from './components/Browser.jsx';
import Nav from './components/navBar/nav';
console.log('App.js loading...');

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Nav></Nav>
      </header>
      <Browser></Browser>
    </div>
  );
}

export default App;
