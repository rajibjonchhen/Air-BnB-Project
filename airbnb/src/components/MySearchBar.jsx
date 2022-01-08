import React, { Component, useState } from 'react';
import {Container, Row, Col, Card, ListGroup, ListGroupItem} from 'react-bootstrap';
import {GoSearch} from 'react-icons/go'
import {MdArrowForwardIos} from 'react-icons/md'
import MyDatePicker from './MyDatePicker';
import '../App.css'

class MySearchBar extends React.Component {

    state = {
        isClicked:'0',
        displayToggle:"0"
       
    }


    searchStyle = {
        borderRadius:"50%",
        fontSize:"20px", 
        backgroundColor:"rgb(227,28,93)", 
        padding:"8px 16px",
        color:"white",
       
    }

    search = {
        backgroundColor:'rgb(227,28,93)',
        padding:"0px 4px"
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

displayToggle (section){
    if(this.state.displayToggle===section){
        this.setState({displayToggle:'0'})
    } else {
        this.setState({displayToggle:section})

    }
   
}

  isClickedToggle (number) {
    if(this.state.isClicked===number){
        this.setState({isClicked:'0'})
    } else {
        this.setState({isClicked:number})

    }
    
  }
    render() { 
        return (
            <Container  className="searchBar dRelative px-5" style={{margin:"100px auto 10px", width:"900px"}}>
          
            <Row className="d-flex  flex-column justify-content-center" >
                <Col className="d-flex  justify-content-around "> 
                    <div className="d-flex text-white text-left" style={{position:'absolute',zIndex:"3", bottom:"0", marginBottom:"35px", fontSize:"17px"}}>
                        <p href="#features" className="mx-3" >Place to stay</p>
                        <p href="#pricing" className="mx-3">Experience</p>
                        <p href="#pricing" className="mx-3">Online Experiences</p>
                    </div>
                </Col>
            <Col className=" dRelative bg-light d-flex justify-content-between roundedBorder m-0 p-0" >

                <div className = {` roundedBorder pl-4  p-2  w-100 pointer ${this.state.isClicked===1 && 'shadowOnRightEdge'}`}  >
                       
                       <div className = {`d-flex align-items-start flex-column  `}  
                            onClick={(e) =>{this.isClickedToggle(1);this.displayToggle('display location')}}>
                       <span className="fontSize fontBold" >Location</span>
                        <input className="fontSize" placeholder='Where are you going?'/>
                       </div>
                    
                        <div  className=" bg-light m-1 p-4" 
                                    style={{
                                        borderRadius:"20px",
                                        backgroundColor:"white",
                                        position:"absolute",
                                        left:"0",top:"75px", 
                                        zIndex:"10", 
                                        minWidth:'500px',
                                        minHeight:'150px',
                                        display:this.state.displayToggle==='display location'? 'block':'none'
                            }} >
                            <p style={{textAlign:"left", fontSize:"12px",fontWeight:'bold',}}>GO ANYWHERE, ANYTIME</p>
                            <div className = "d-flex justify-content-between" style={this.inIAmFlexiBtn}><span>I'm flexible</span><MdArrowForwardIos/></div>
                        </div>
                </div>
                            
                <div className = {`roundedBorder  pl-4  p-2  w-100 pointer ${this.state.isClicked===2 && 'shadowOnBothEdge'}`} >
                    <div className = {`d-flex align-items-start flex-column`}  
                        onClick={(e) =>{this.isClickedToggle(2); this.displayToggle('show calender')}}>
                    <span className="fontSize fontBold ">Check in</span>
                    </div>
                    {/* <span className="fontSize">Add Dates</span> */}
                    <div className='dAbsolute' 
                        style={{backgroundColor:"white",position:"absolute",left:"100px",top:"75px", zIndex:"10", minWidth:'500px',minHeight:'200px',display:this.state.displayToggle==='show calender'? 'block':'none'}}>
                        <MyDatePicker/>
                    </div>
                </div>

                <div className = {`roundedBorder  pl-4 p-2  w-100 pointer ${this.state.isClicked===3 && 'shadowOnBothEdge'}`}>
                    <div className = {`d-flex align-items-start flex-column`}
                        onClick={(e) =>{this.isClickedToggle(3); this.displayToggle('show calender')}}>
                    <span className="fontSize fontBold">Check out</span>
                    </div>
                    {/* <MyDatePicker/> */}
                   
                    {/* <span className="fontSize">Add Dates</span> */}
                
                </div>

                <div className={`roundedBorder pl-4 p-2  w-100 pointer ${this.state.isClicked===4 && 'shadowOnLeftEdge'}`} style={{minWidth:"260px"}} >
                     <div   className={`d-flex justify-content-between  align-items-start`} 
                        onClick={(e) =>{this.isClickedToggle(4); this.displayToggle('add guest')}}>
                    <div className='d-flex align-items-start flex-column '>
                    <span className="fontSize fontBold">Guests</span>
                    <span className="fontSize">Add guests</span>
                    </div>
                <div className="d-flex align-items-center roundedBorder" style={this.search}>
                    <span className='fontBold text-white pl-2'style={{display: this.state.displayToggle>'0'? 'block':'none'}}> Search</span>
                    <span style = {this.searchStyle}> <GoSearch/> </span>
                </div>
                    </div>
                    <div  className=" bg-light m-1 p-4 text-left" style={{
                                        borderRadius:"20px",
                                        backgroundColor:"white",
                                        position:"absolute",
                                        right:"0",
                                        top:"75px", 
                                        zIndex:"10", 
                                        minWidth:'500px',
                                        minHeight:'150px',
                                        display:this.state.displayToggle==='add guest'? 'block':'none'
                            }} >
                           
                                <ul className="list-unstyled ">
                                        <li>
                                        Adults
                                        </li>
                                        <li>
                                        Ages 13 or above
                                        </li>
                                        <hr/>

                                        <li>
                                        Children
                                        </li>
                                        <li>
                                        Ages 2–12
                                        </li>
                                        <hr/>

                                        <li>
                                        Infants
                                        </li>
                                        <li>
                                        Under 2
                                        </li>
                                        <hr/>

                                        <li>
                                        Pets
                                        </li>
                                        <li>
                                        Bringing an assistance animal?
                                        </li>
                                <hr/>
                                </ul>
                                <p>
                                If you're lucky enough to have more than 2 pets <br/> with you, be sure to let your host know.
                                </p>

                        </div>
                </div>
            </Col>
            </Row>
        </Container>
        )}
}
 
export default MySearchBar;