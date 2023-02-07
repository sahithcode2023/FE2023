import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestFunction from './Components/TestComponent';
 import NareshFunctionIndia from './Components/NareshComponent'
import NavigationBar from './Components/NavigationComponent';
import ArrayComponent from './Components/AArrayComponent';
import { ArrayComponentTwo } from './Components/AArrayComponent';
import { ArrayArrowFunction } from './Components/AArrayComponent';
import { ShowRoomMates } from './Components/AArrayComponent';
import ABStateComponent from './Components/ABStatecomponent'
function App() {
  const ele=document.createElement("h1");
  console.log(ele);
  const jsxEle=<h1>JSXEle</h1>;
  console.log(jsxEle);
  return (
    <div className="App">
      <ArrayComponent/>
      <ArrayComponentTwo/>
      <ArrayArrowFunction/>
      <ShowRoomMates/>
      <ABStateComponent/>
      <TestFunction/>
      <TestFunction/>
      <NavigationBar/>
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
