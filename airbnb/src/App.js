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
import QuestionAboutHosting from './components/QuestionAboutHosting';



class App extends React.Component {

  state = {
    isScrolled : false,
   
  }
// 
listenScrollEvent = e => {
if (window.scrollY > 400) {
  this.setState({isScrolled: 'true'})
} else {
  this.setState({isScrolled: 'false'})
}
}

componentDidMount() {
window.addEventListener('scroll', this.listenScrollEvent)
}

// 
 render(){
   return (
     <Container className="App m-0 p-0"  fluid>
      <Row>
        <Col>
        <MyNavBar isScrolled={this.state.isScrolled}/>
        <div  style={{padding:"0 5%",backgroundColor:"black"}}>
      <MySearchBar isScrolled={this.state.isScrolled}/>
      <MyJumbotron/>
        </div>
      <div className="bg-white" style={{padding:"0 5%"}}>
      <MyCards/>
      <DiscoveryBox/>
      <QuestionAboutHosting/>
      <InspirationSec/>
      </div>
      <MyFooter/>
        </Col>
      </Row>
        
    </Container>
  );
}
}

export default App;
