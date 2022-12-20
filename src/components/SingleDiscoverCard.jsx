import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import '../components/CssFiles/discovery.css'

export default  class SingleDiscoveryCard extends React.Component {

    experienceBtn = {
        backgroundColor:"white",
        color:"black",
        fontSize:"16px",
        borderRadius:"10px",
        padding:"15px 30px",
        fontWeight:"600",
        border:"none",
        
    }
    render() { 
        return (
            <Col sm={12} md={6}>
                <div  style={{position:"relative",overflow:"hidden",borderRadius:"15px",color:'white'}}>
                    <img style={{width:'100%'}}src={this.props.card.image} />
                    <div className="text-left" style={{position:"absolute",top:'50px',left:'50px'}}>
                        <h1 >Things to do <br/>{this.props.card.heading}</h1>
                        <button  className="experienceBtn  rounded-lg ">{this.props.card.btnText}</button>
                    </div>
                </div>
            </Col>
            );
    }
}
 
