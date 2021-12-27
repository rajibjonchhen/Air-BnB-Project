import React, { Component } from 'react';
import {Container, Row, Col, Card, ListGroup, ListGroupItem} from 'react-bootstrap';
import {GoSearch} from 'react-icons/go'
import '../App.css'

class MySearchBar extends React.Component {

    

    searchStyle = {
        borderRadius:"50%",
        fontSize:"25px", 
        backgroundColor:"red", 
        padding:"8px 16px",
        color:"white",
        boxSizing:"borderBox"
    }
    render() { 
        return <Container >
            <Row >
            <Col className=" bg-light d-flex justify-content-between roundedBorder m-0 p-0" >
                <div className = "d-flex align-items-start flex-column roundedBorder pl-5  p-2 w-100" >
                <span className="fontSize fontBold">Location</span>
                <span className="fontSize">Where are you going?</span>
                </div>
                <div className = "d-flex align-items-start flex-column roundedBorder pl-5 p-2 w-100">
                    <span className="fontSize fontBold">Check in</span>
                    <span className="fontSize">Add Dates</span>
                </div>
                <div className = "d-flex align-items-start flex-column roundedBorder pl-5 p-2 w-100">
                    <span className="fontSize fontBold">Check out</span>
                    <span className="fontSize">Add Dates</span>
                
                </div>
                <div className="d-flex justify-content-between roundedBorder pl-5 p-2 w-100">
                     <div className="d-flex  align-items-start flex-column ">
                    <span className="fontSize fontBold">Guests</span>
                    <span className="fontSize">Add guests</span>
                    </div>
                    <span style = {this.searchStyle}> <GoSearch/> </span>
                </div>
            </Col>
            </Row>
        </Container>
    }
}
 
export default MySearchBar;