
import React, { Component } from 'react';
import {Container, Jumbotron,} from 'react-bootstrap'
import jumboCard from '../jumboCard.png'
import frontpic from '../frontpic.png'
import '../App.css'


export default class MyJumbotron extends React.Component {

    jumboTextStyle ={
        color:"white",
        top:"50%",
        right:"0",
        height:"100vh",
        width:"100vw", 
        backgroundSize: 'cover',
        backgroundPosition:"center",
        backgroundRepeat:"none",
        backgroundRepeat:"none",    
    }

    frontpic ={
       
        height:"500vh",
        width:"50vw", 
        backgroundSize: 'cover',
        backgroundPosition:"center",
        backgroundRepeat:"none",
        backgroundRepeat:"none",    
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
                <Container className="jumbotron p-5" style={{backgroundColor:"black" }} >
                   <div className="position-relative">
                    <img src= {frontpic} style={{borderRadius:"15px" }} />
                  
                   <div className="position-absolute"  style={this.jumboTextStyle}>      
                    <h1>Not sure where to go? Perfect.</h1>
                   <button style={this.buttonStyle} >
                       I'm flexible
                   </button>
                   </div>
                   </div>

                <div className =" jumboPoster d-flex align-items-center"  style={{backgroundColor:"rgb(241,241,241)"}} >
                    <div className ="w-100" >
                        <p className ="h3">Introducing</p>
                        <h1>Airbnb <br/> Gift Cards</h1>
                        <button className = "roundedBorder text-white p-2 w-25" style={{backgroundColor:"black"}} >
                       shop now
                   </button>
                    </div>
                    <div className ="w-100">
                        <img src={jumboCard} className ="w-100"/>
                    </div>
                </div>
                </Container>
        </>);
    }
}
