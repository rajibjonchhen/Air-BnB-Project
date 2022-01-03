import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import  { Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavBar from './components/MyNavBar';
import MyJumbotron from './components/MyJumbotron';
import MyCards from './components/MyCards';
import MyFooter from './components/MyFooter';
import MySearchBar from './components/MySearchBar';
import InspirationSec from './components/InspirationSec';
function App() {
  return (
    <Container className="App" style={{backgroundColor:"black"}} fluid>
<MyNavBar/>
<MySearchBar/>
<MyJumbotron/>
<MyCards/>
    <InspirationSec/>
<MyFooter />
   
    </Container>
  );
}

export default App;
