import React, { Component } from 'react';
import {Card, Col} from 'react-bootstrap'
import '../App.css'


class SingleCard extends React.Component {
    render() { 
        return <Col>
               
                <Card style={{ minWidth:"14rem", width: '100%', padding:"0", marginTop:"15px", borderRadius:"15px", overflow:"hidden", border:"none" }}>
                <Card.Img src={this.props.card.image} alt="Card image" />
                    
                    <div style={{backgroundColor:this.props.card.bgcolor,  padding:"30px 10px 70px 20px", margin:"0", textAlign:"left"}}>
                    <p className="h1 text-white">{this.props.card.title}</p>
                            <p className="h6 text-white">
                            {this.props.card.description}
                            </p>
                    </div>
                </Card>
                

                
        </Col>;
    }
}
 
export default SingleCard;