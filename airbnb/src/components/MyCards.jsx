

import React, { Component } from 'react';
import {Container, Row, Col, Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import img1 from '../components/assets/card1.png'
import img2 from '../components/assets/card2.png'
import img3 from '../components/assets/card3.png'
import img4 from '../components/assets/card4.png'
import '../App.css'
import SingleCard from './SingleCard';


export default class MyCards extends React.Component {
    cards = [
        {"image":img1, "title":"Porto","description":"274 kilometer away", "bgcolor":"rgb(188,25,109)"},
        {"image":img2, "title":"Coimbra","description":"174 kilometer away", "bgcolor":"rgb(221,49,80)"},
        {"image":img3, "title":"Covilha","description":"74 kilometer away", "bgcolor":"rgb(204,44,74)"},
        {"image":img4, "title":"Evora","description":"104 kilometer away", "bgcolor":"rgb(217,58,48)"},
    ]
    render() { 
        return (
                   <Container className='MyCards'>
                        <h1 className='text-white text-left'>Inspiration for your next trip</h1>
                   <Row>{
                       this.cards.map((card,i) =>(
                           <SingleCard card = {card} />
                           ) )
                        }</Row>
                   </Container>
                );
    }
}


