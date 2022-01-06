import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import  { Container, Row, Col } from 'react-bootstrap';

import 'react-datepicker/dist/react-datepicker.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavBar from './components/MyNavBar';
import MyJumbotron from './components/MyJumbotron';
import MyCards from './components/MyCards';
import MyFooter from './components/MyFooter';
import MySearchBar from './components/MySearchBar';
import InspirationSec from './components/InspirationSec';
import DiscoveryBox from './components/DiscoveryBox';



function App() {

 
  return (
    <Container className="App"  fluid>
<Row>
  <Col>
  <div className="bg-white">
  <MyNavBar/>
<MySearchBar/>
<MyJumbotron/>
  </div>
<div className="bg-white">
<MyCards/>
<DiscoveryBox/>
<InspirationSec/>
<MyFooter/>
</div>
  </Col>
</Row>
   
    </Container>
  );
}

export default App;
