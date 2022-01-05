import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import '../components/CssFiles/discovery.css'

export default  class SingleDiscoveryCard extends React.Component {
    render() { 
        return (
            <Col sm={12} md={6}>
                <div  style={{position:"relative",overflow:"hidden",borderRadius:"15px"}}>
                    <img style={{width:'100%'}}src={this.props.card.image} />
                    <div style={{position:"absolute",top:'20px',left:'20px'}}>
                        <h1 >Things to do <br/>{this.props.card.heading}</h1>
                        <button className="rounded-lg ">{this.props.card.btnText}</button>
                    </div>
                </div>
            </Col>
            );
    }
}
 
