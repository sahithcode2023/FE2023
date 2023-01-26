import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestFunction from './Components/TestComponent';
 import NareshFunctionIndia from './Components/NareshComponent'
function App() {
  return (
    <div className="App">
      <TestFunction/>
      <TestFunction/>
      <NareshFunctionIndia/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='RED'>
          Edit <code>src/App.tsx</code> and save to reload.
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
      <div className='RED'>Another Div </div>
      
   
   
    </div>
    
  );
}

export default App;
