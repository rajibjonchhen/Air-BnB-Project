import React, { Component } from 'react';
import {Container, Row, Col, Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import '../App.css'

class MySearchBar extends React.Component {
    render() { 
        return <Container className="bg-light">
            <Row >
            <Col className="d-flex">
                <div>
                <p className="">Location</p>
                <p>Where are you going?</p>
                </div>
                <div>
                    <p>Check in</p>
                    <p>Add Dates</p>
                </div>
                <div>
                    <p>Check out</p>
                    <p>Add Dates</p>
                
                </div>
                <div>
                    <p>Guests</p>
                    <p>Add guests</p>
                    <span> </span>
                </div>
            </Col>
            </Row>
        </Container>
    }
}
 
export default MySearchBar;