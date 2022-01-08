import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown, Container, Dropdown, Row, Col} from 'react-bootstrap'
import {FiGlobe} from 'react-icons/fi'
import {FaUserCircle} from 'react-icons/fa'
import {GoThreeBars} from 'react-icons/go'

import brand from './brand.png'
import '../App.css'


class MyNavBar extends React.Component {
    state = {
      isScrolled : true,
    }
    render() { 
        return (
            <Container fluid  style={{position:'fixed',zIndex:'5',marginBottom:'20px'}}>
              <Row style={{padding:"0 5%",backgroundColor:"black", display:!this.state.isScrolled? 'block':'none'}}>
                <Col>
                  <Navbar collapseOnSelect expand="lg" style={{backgroundColor:"black", }} variant="dark">
                          <Navbar.Brand href="#home"><img src="https://cdn.freebiesupply.com/images/large/2x/airbnb-logo-white-on-black.png" style={{width:"120px" }}/></Navbar.Brand>  
                          {/*red one "https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" */}
                          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                          <Navbar.Collapse className="d-flex justify-content-between" id="responsive-navbar-nav">
                            <Nav className="ml-auto">
                              <Nav.Link href="#deets" className="text-white">Become a Host</Nav.Link>
                              <Nav.Link href="#deets" ><FiGlobe/></Nav.Link>
                              <Dropdown>
                                  <Dropdown.Toggle  id="dropdown-basic" alignLeft>
                                    <span > < GoThreeBars/> <FaUserCircle/></span>
                                  </Dropdown.Toggle>

                                  <Dropdown.Menu id="dropdown-menu">
                                    <Dropdown.Item className = "fontBold" href="#/action-1">Sign Up</Dropdown.Item>
                                    <Dropdown.Item href="#/action-1">Log in</Dropdown.Item>
                                    <hr/>
                                    <Dropdown.Item href="#/action-2">Host your home</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Host an experience</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Help</Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                            </Nav>
                          </Navbar.Collapse>
                    </Navbar>

                </Col>
            </Row>
            
            <Row style={{padding:"0 5%",backgroundColor:"white", display:this.state.isScrolled? 'block':'none'}}>
                <Col>
                    <Navbar collapseOnSelect expand="lg" style={{backgroundColor:"white", }} variant="dark">
                          <Navbar.Brand href="#home"><img src="https://blogravenridgecottages.files.wordpress.com/2021/04/airbnb-logo.jpeg" style={{width:"120px" }}/></Navbar.Brand>  
                          {/*red one "https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" */}
                          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                          <Navbar.Collapse className="d-flex justify-content-between" id="responsive-navbar-nav">
                            <Nav className="ml-auto">
                              <Nav.Link href="#deets" className="text-dark">Become a Host</Nav.Link>
                              <Nav.Link href="#deets" ><FiGlobe/></Nav.Link>
                              <Dropdown>
                                  <Dropdown.Toggle  id="dropdown-basic" alignLeft>
                                    <span > < GoThreeBars/> <FaUserCircle/></span>
                                  </Dropdown.Toggle>

                                  <Dropdown.Menu id="dropdown-menu">
                                    <Dropdown.Item className = "fontBold" href="#/action-1">Sign Up</Dropdown.Item>
                                    <Dropdown.Item href="#/action-1">Log in</Dropdown.Item>
                                    <hr/>
                                    <Dropdown.Item href="#/action-2">Host your home</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Host an experience</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Help</Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                            </Nav>
                          </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>

      </Container>);
    }
}

export default MyNavBar