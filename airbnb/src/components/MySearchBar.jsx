import React, { Component, useState } from 'react';
import {Container, Row, Col, Card, ListGroup, ListGroupItem} from 'react-bootstrap';
import {GoSearch} from 'react-icons/go'
import {MdArrowForwardIos} from 'react-icons/md'
import MyDatePicker from './MyDatePicker';
import '../App.css'

class MySearchBar extends React.Component {

    state = {
        displayLocation:true,
        displayCalender:false,
        isClicked1:false,
        isClicked2:false,
        isClicked3:false,
        isClicked4:false,
    }


    searchStyle = {
        borderRadius:"50%",
        fontSize:"25px", 
        backgroundColor:"red", 
        padding:"8px 16px",
        color:"white",
        boxSizing:"borderBox"
    }

    
    
    inIAmFlexiBtn= {
        color:"purple",
        borderRadius:"30px",
        fontSize:"20px",
        fontWeight:"600",
        padding:"10px 20px",
        border:"1px solid rgb(221,221,221)",
        boxShadow:"0px 0px 4px 1px rgb(221,221,221)"
    }

  
    render() { 
        return (
            <Container  className="searchBar dRelative" style={{margin:"10px auto", width:"900px"}}>
          
            <Row className="d-flex  flex-column justify-content-center" >
                <Col className="d-flex  justify-content-around "> 
                    <div className="d-flex text-white text-left" style={{position:'absolute',zIndex:"3", bottom:"0", marginBottom:"27px", fontSize:"17px"}}>
                        <p href="#features" className="mx-3" >Place to stay</p>
                        <p href="#pricing" className="mx-3">Experience</p>
                        <p href="#pricing" className="mx-3">Online Experiences</p>
                    </div>
                </Col>
            <Col className=" dRelative bg-light d-flex justify-content-between roundedBorder m-0 p-0" >

                <div className = "d-flex align-items-start flex-column roundedBorder pl-5  p-2 w-100 shadowOnRightEdge"  onClick={(e) =>this.setState({displayLocation:!this.state.displayLocation, isClicked1:!this.state.isClicked1})}>
                
                        <span className="fontSize fontBold" >Location</span>
                        <input className="fontSize" placeholder='Where are you going?'/>
                    
                        <div  className=" bg-light m-1 p-4" style={{
                                        borderRadius:"20px",
                                        backgroundColor:"white",
                                        position:"absolute",
                                        left:"0",top:"75px", 
                                        zIndex:"10", 
                                        minWidth:'500px',
                                        minHeight:'150px',
                                        display:this.state.displayLocation?'block':'none'
                            }} >
                            <p style={{textAlign:"left", fontSize:"12px",fontWeight:'bold',}}>GO ANYWHERE, ANYTIME</p>
                            <div className = "d-flex justify-content-between" style={this.inIAmFlexiBtn}><span>I'm flexible</span><MdArrowForwardIos/></div>
                        </div>
                </div>
                <div className = "d-flex align-items-start flex-column roundedBorder pl-5 p-2 w-100 shadowOnBothEdge" onClick={(e) =>this.setState({displayCalender:!this.state.displayCalender})} >
                    <span className="fontSize fontBold ">Check in</span>
                    {/* <span className="fontSize">Add Dates</span> */}
                    <div className='dAbsolute' style={{backgroundColor:"white",position:"absolute",left:"100px",top:"75px", zIndex:"10", minWidth:'500px',minHeight:'200px',display:this.state.displayCalender?'block':'none'}}>
                        <MyDatePicker/>
                    </div>
                </div>
                <div className = "d-flex align-items-start flex-column roundedBorder pl-5 p-2 w-100 shadowOnBothEdge">
                    <span className="fontSize fontBold">Check out</span>
                    {/* <MyDatePicker/> */}
                   
                    {/* <span className="fontSize">Add Dates</span> */}
                
                </div>
                <div className="d-flex justify-content-between roundedBorder pl-5 p-2 w-100 shadowOnLeftEdge">
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