import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown, Container, Dropdown, Row, Col} from 'react-bootstrap'
import {FiGlobe} from 'react-icons/fi'
import {FaUserCircle} from 'react-icons/fa'
import {GoThreeBars} from 'react-icons/go'
import '../components/CssFiles/navbar.css'
import brand from './brand.png'
import '../App.css'


class MyNavBar extends React.Component {


    render() { 
        return (
            <Container fluid  style={{position:'fixed',zIndex:'5'}}>
              <Row className="blackNav" style={{padding:"0 5%",backgroundColor:this.props.isScrolled? "white":"black"}}>
                <Col>
                  <Navbar collapseOnSelect expand="lg" style={{backgroundColor:"transparent", }} variant = `{this.props.isScrolled? "light":"dark"}`>
                          <Navbar.Brand href="#home"><img src="../components/assets/airbnb.svg" style={{width:"120px" }}/></Navbar.Brand>  
                          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                          <Navbar.Collapse className="d-flex justify-content-between" id="responsive-navbar-nav">
                            <Nav className="hideNavLinks ml-auto">
                              <Nav.Link href="#deets" className="text-white">Become a Host</Nav.Link>
                              <Nav.Link href="#deets" ><FiGlobe/></Nav.Link>
                              <Dropdown>
                                  <Dropdown.Toggle  id="dropdown-basic" >
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
            
            {/* <Row className="whiteNav" style={{padding:"0 5%",backgroundColor:"white", display:this.props.isScrolled? 'block':'none'}}>
                <Col>
                    <Navbar collapseOnSelect expand="lg" style={{backgroundColor:"white", }} variant="dark">
                          <Navbar.Brand href="#home"><img src="https://blogravenridgecottages.files.wordpress.com/2021/04/airbnb-logo.jpeg" style={{width:"120px" }}/></Navbar.Brand>  
                          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                          <Navbar.Collapse className="d-flex justify-content-between" id="responsive-navbar-nav">
                            <Nav className="hideNavLinks ml-auto">
                              <Nav.Link href="#deets" className="text-dark">Become a Host</Nav.Link>
                              <Nav.Link href="#deets" ><FiGlobe/></Nav.Link>
                              <Dropdown>
                                  <Dropdown.Toggle  id="dropdown-basic">
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
            </Row> */}

      </Container>);
    }
}

export default MyNavBar