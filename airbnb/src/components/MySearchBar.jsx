import React, { Component, useState } from 'react';
import {Container, Row, Col, Card, ListGroup, ListGroupItem} from 'react-bootstrap';
import {GoSearch} from 'react-icons/go'
import {MdArrowForwardIos} from 'react-icons/md'
import MyDatePicker from './MyDatePicker';
import '../App.css'

class MySearchBar extends React.Component {

    state = {
        displayLocation:'false',
        displayCalender:'false',
    }


    searchStyle = {
        borderRadius:"50%",
        fontSize:"25px", 
        backgroundColor:"red", 
        padding:"8px 16px",
        color:"white",
        boxSizing:"borderBox"
    }
    


  
    render() { 
        return (
            <Container  className="searchBar dRelative" >
          
            <Row className="d-flex  flex-column text-white" style={{top:"-170px"}}>
                <Col className="d-flex  justify-content-around "> 
                    <div className="d-flex text-left   dAbsolute">
                        <p href="#features" className="mx-3">Place to stay</p>
                        <p href="#pricing" className="mx-3">Experience</p>
                        <p href="#pricing" className="mx-3">Online Experiences</p>
                    </div>
                </Col>
            <Col className=" dRelative bg-light d-flex justify-content-between roundedBorder m-0 p-0" >
                <div className = "d-flex align-items-start flex-column roundedBorder pl-5  p-2 w-100" onClick={(e) =>this.setState({display:!this.state.displayLocation})} >
                
                        <span className="fontSize fontBold">Location</span>
                        <input className="fontSize" placeholder='Where are you going?'/>
                    
                        <div  className=" bg-light roundedBorder m-1 p-4" style={{backgroundColor:"white",position:"absolute",left:"0",top:"75px", zIndex:"10", minWidth:'500px',minHeight:'200px',display:this.state.displayLocation? 'none':'block'}} >
                            <p>GO ANYWHERE, ANYTIME</p>
                            <div className = "d-flex justify-content-between roundedBorder p-4 border-outline-primary "><span>I'm flexible</span><MdArrowForwardIos/></div>
                        </div>
                </div>
                <div className = "d-flex align-items-start flex-column roundedBorder pl-5 p-2 w-100" onClick={(e) =>this.setState({display:!this.state.displayCalender})} >
                    <span className="fontSize fontBold">Check in</span>
                    {/* <span className="fontSize">Add Dates</span> */}
                    <div className='dAbsolute' style={{backgroundColor:"white",position:"absolute",left:"0",top:"75px", zIndex:"10", minWidth:'500px',minHeight:'200px',display:this.state.displayCalender? 'none':'block'}}>
                        <MyDatePicker/>
                    </div>
                </div>
                <div className = "d-flex align-items-start flex-column roundedBorder pl-5 p-2 w-100">
                    <span className="fontSize fontBold">Check out</span>
                    {/* <MyDatePicker/> */}
                   
                    {/* <span className="fontSize">Add Dates</span> */}
                
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
        )}
}
 
export default MySearchBar;