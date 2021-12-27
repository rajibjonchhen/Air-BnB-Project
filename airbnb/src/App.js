import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavBar from './components/MyNavBar';
import MyJumbotron from './components/MyJumbotron';
import MyCards from './components/MyCards';
import MyFooter from './components/MyFooter';
import MySearchBar from './components/MySearchBar';
function App() {
  return (
    <div className="App bg-dark" style={{backgroundColor:"red"}}ß>
<MyNavBar/>
<MySearchBar/>
<MyJumbotron/>
<MyCards/>
<MyFooter  className="App-header"/>
   
    </div>
  );
}

export default App;
