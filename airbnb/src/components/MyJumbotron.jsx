
import React, { Component } from 'react';
import {Container,Row, Col} from 'react-bootstrap'
import jumboCard from '../jumboCard.png'
import jumboPic from './assets/jumboPic.png'
import '../App.css'


export default class MyJumbotron extends React.Component {

    jumboTextStyle ={
        position:"absolute",
        color:"white",
        bottom:"20%",
        left:"25%"
    }

    buttonStyle = {
        color:"purple",
        borderRadius:"30px",
        fontSize:"20px",
        fontWeight:"600",
        padding:"10px 20px"
    }
    
    render() { 
        return (<>
                <Container className="jumbotron dRelative p-5" style={{backgroundColor:"black" }} fluid>
                    <Row>
                        <Col>
                        
                   <div className="dRelative">
                    <img className="w-100" src= {jumboPic} style={{borderRadius:"15px" }} />
                   <div  style={this.jumboTextStyle}>      
                    <h1>Not sure where to go? Perfect.</h1>
                   <button style={this.buttonStyle} >
                       I'm flexible
                   </button>
                   </div>
                   </div>

                </Col>
                    </Row>
               
                    <Row>
                        <Col>
                        <div className ="jumboPoster d-flex align-items-center"  style={{backgroundColor:"rgb(241,241,241)"}} >
                        <div className ="w-100" >
                        <p className ="h3">Introducing</p>
                        <h1>Airbnb <br/> Gift Cards</h1>
                        <button className = "roundedBorder text-white p-2" style={{backgroundColor:"black",minWidth:"150px"}} >
                       shop now
                   </button>
                    </div>
                    <div className ="w-100">
                        <img src={jumboCard} className ="w-100"/>
                    </div>
                </div>
                        
                        </Col>
                    </Row>
                </Container>
        </>);
    }
}
