import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import brand from './brand.png'
import '../App.css'


class MyNavBar extends React.Component {
    render() { 
        return (<>
       <Navbar collapseOnSelect expand="lg" style={{backgroundColor:"black", }} variant="dark">
  <Navbar.Brand href="#home"><img src={brand} style={{width:"100px" }}/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">

    <Nav className="mr-auto">
      <Nav.Link href="#features" className="text-white">Place to stay</Nav.Link>
      <Nav.Link href="#pricing" className="text-white">Experience</Nav.Link>
      <Nav.Link href="#pricing" className="text-white">Online Experiences</Nav.Link>
     
    </Nav>
    <Nav>
    <NavDropdown title="=" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#deets">Become a Host</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </>);
    }
}

export default MyNavBar