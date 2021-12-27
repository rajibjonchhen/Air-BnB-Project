import React, { Component } from 'react';
import {Card} from 'react-bootstrap'
import '../App.css'


class SingleCard extends React.Component {
    render() { 
        return <>
                <Card style={{ width: '15rem', padding:"0", margin:"0" }}>
                <Card.Img src={this.props.card.image} alt="Card image" />
                    
                    <Card.Body style={{backgroundColor:this.props.card.bgcolor,  padding:"0", margin:"0"}}>
                    <Card.Title>{this.props.card.title}</Card.Title>
                            <Card.Text>
                            {this.props.card.description}
                            </Card.Text>
                    </Card.Body>
                </Card>
        </>;
    }
}
 
export default SingleCard;