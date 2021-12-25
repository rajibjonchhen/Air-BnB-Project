
import React, { Component } from 'react';
import {Container, Jumbotron,} from 'react-bootstrap'
import '../App.css'


export default class MyJumbotron extends React.Component {

    jumboStyle ={
        color:"white",
        top:"25%",
        right:"0",
        height:"100vh",
        width:"100vw", 
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
                <Container className="p-5" style={{backgroundColor:"black" }} fluid>
                   <div className="position-relative">
                    <img src= "https://a0.muscache.com/im/pictures/2459fa90-5f66-4198-a8f2-43d8f8783bc2.jpg?im_q=highq&im_w=720" style={{width:"1220px" }} />
                  
                   <div className="position-absolute"  style={this.jumboStyle}>      
                    <h1>Not sure where to go? Perfect.</h1>
                   <button style={this.buttonStyle} >
                       I'm flexible
                   </button>
                   </div>
                   </div>
                </Container>
        </>);
    }
}
