import React, { Component, useState } from 'react';
import {Container, Row, Col, Card, ListGroup, ListGroupItem} from 'react-bootstrap';
import {GoSearch} from 'react-icons/go'
import {MdArrowForwardIos} from 'react-icons/md'
import MyDatePicker from './MyDatePicker';
import '../App.css'
import '../components/CssFiles/searchBar.css'
import GuestCounter from './GuestCounter'

class MySearchBar extends React.Component {

    state = {
        isClicked:'0',
        displayToggle:"0",
        guestCount:0
       
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

  guestCounter (change){
    if(change=='+'){
        this.setState({guestCounter:this.state.guestCount+1})
        console.log("guest  count", this.state.guestCount)

    }else if(this.state.guestCount!==0){
        this.setState({guestCounter:this.state.guestCount-1})
        console.log("guest  count", this.state.guestCount)

    }
  }
    render() { 
        return (
            <Container  className="searchBar dRelative px-5" style={{margin:"110px auto 10px", width:"900px", padding:'30px', display:this.props.isScrolled? 'none':'block'}}>
          
            <Row className="d-flex  flex-column justify-content-center" >
                <Col className="d-flex  justify-content-around "> 
                    <div className="d-flex text-white text-left" style={{position:'absolute',zIndex:"6", bottom:"-40px", marginBottom:"45px", fontSize:"17px"}}>
                        <p href="#features" className="searchSec mx-3" >Place to stay <hr className='underline' style={{border:'1px solid white',width:"15px"}}/> </p>
                        <p href="#pricing" className="searchSec mx-3">Experience <hr className='underline' style={{border:'1px solid white',width:"15px"}}/></p>
                        <p href="#pricing" className="searchSec mx-3">Online Experiences <hr className='underline' style={{border:'1px solid white',width:"15px"}}/></p>
                    </div>
                </Col>
            <Col className=" dRelative bg-light d-flex justify-content-between roundedBorder m-0 p-0" >

                <div className = {` roundedBorder pl-4  p-2  w-100 pointer ${this.state.isClicked===1 && 'shadowOnRightEdge'}`}  >
                       
                       <div className = {`d-flex align-items-start flex-column  pr-5`}  
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
                                        minWidth:'400px',
                                       
                                        display:this.state.displayToggle==='add guest'? 'block':'none'
                            }}>
                           
                               
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <div className='d-flex flex-column text-left guestCounterStyle'>
                                                <span >Adults</span>
                                                <span>Ages 13 or above</span>
                                            </div>
                                            <GuestCounter guestCounter = {this.guestCounter} NumbOfGuest={this.state.guestCount}/>
                                        </div>
                                        <hr/>
                                        

                                        <div className='d-flex align-items-center justify-content-between '>
                                            <div className='d-flex flex-column text-left guestCounterStyle'>
                                                <span >Children</span>
                                                <span> Ages 2–12</span>
                                            </div>
                                            <GuestCounter guestCounter = {this.guestCounter} NumbOfGuest={this.state.guestCount}/>
                                        </div>

                                        <hr/>

                                        <div className='d-flex align-items-center justify-content-between'>
                                            <div className='d-flex flex-column text-left guestCounterStyle'>
                                                <span >Infants</span>
                                                <span> Under 2</span>
                                            </div>
                                        <GuestCounter guestCounter = {this.guestCounter} NumbOfGuest={this.state.guestCount}/>
                                        </div>

                                        <hr/>
                                        
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <div className='d-flex flex-column text-left guestCounterStyle'>
                                                <span>Pets</span>
                                                <span style={{textDecorationLine: 'underline', fontWeight:'bold',color:'black'}}> Bringing an assistance animal?</span>
                                            </div>
                                            <GuestCounter guestCounter = {this.guestCounter} NumbOfGuest={this.state.guestCount}/>
                                        </div>
                                       
                                    <hr/>
                                
                                <p style={{fontSize:'13px'}}>
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