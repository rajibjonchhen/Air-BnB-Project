import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import '../components/CssFiles/discovery.css'

export default  class SingleDiscoveryCard extends React.Component {
    render() { 
        return (
        <div  style={{position:"relative"}}>
            <img src={this.props.card.image} />
            <div style={{position:"absolute",top:'20px',left:'20px'}}>
                <p className='h1'>Things to do <br/>{this.props.card.heading}</p>
                <button className="rounded-lg ">{this.props.card.btnText}</button>
            </div>
        </div>
            );
    }
}
 
