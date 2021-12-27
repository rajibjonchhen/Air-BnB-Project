import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown, Container, Dropdown} from 'react-bootstrap'
import {FiGlobe} from 'react-icons/fi'
import {FaUserCircle} from 'react-icons/fa'
import {GoThreeBars} from 'react-icons/go'
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
    
      <Nav.Link href="#deets" className="text-white">Become a Host</Nav.Link>
      <Nav.Link href="#deets" ><FiGlobe/></Nav.Link>
      <Dropdown>
  <Dropdown.Toggle variant="white" id="dropdown-basic">
    <span className="roundedBorder bgWhite text-dark w-100 p-2"> < GoThreeBars id="collasible-nav-dropdown"/> <FaUserCircle/></span>

  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </>);
    }
}

export default MyNavBar