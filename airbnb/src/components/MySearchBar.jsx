import React, { Component } from 'react';
import {Container, Row, Col, Card, ListGroup, ListGroupItem} from 'react-bootstrap';
import {GoSearch} from 'react-icons/go'
import '../App.css'

class MySearchBar extends React.Component {

    

    searchStyle = {
        borderRadius:"50%",
        fontSize:"30px", 
        backgroundColor:"red", 
        padding:"5% 5%",
        color:"white" }
    render() { 
        return <Container >
            <Row >
            <Col className=" bg-light d-flex justify-content-between roundedBorder" >
                <div className = "roundedBorder" >
                <p className="">Location</p>
                <p>Where are you going?</p>
                </div>
                <div className = "roundedBorder">
                    <p>Check in</p>
                    <p>Add Dates</p>
                </div>
                <div className = "roundedBorder">
                    <p>Check out</p>
                    <p>Add Dates</p>
                
                </div>
                <div className="d-flex roundedBorder">
                     <div>
                    <p>Guests</p>
                    <p>Add guests</p>
                    </div>
                    <span style = {this.searchStyle}> <GoSearch/> </span>
                </div>
            </Col>
            </Row>
        </Container>
    }
}
 
export default MySearchBar;