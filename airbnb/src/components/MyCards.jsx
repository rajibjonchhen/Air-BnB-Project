

import React, { Component } from 'react';
import {Container, Row, Col, Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import {BsChevronLeft} from 'react-icons/bs'
import {BsChevronRight} from 'react-icons/bs'
import img1 from '../components/assets/card1.png'
import img2 from '../components/assets/card2.png'
import img3 from '../components/assets/card3.png'
import img4 from '../components/assets/card4.png'
import '../App.css'
import SingleCard from './SingleCard';


export default class MyCards extends React.Component {
    cards = [
        {"image":img1, "title":"Porto","description":"274 kilometer away", "bgcolor":"rgb(188,25,109)"},
        {"image":img2, "title":"Coimbra","description":"176 kilometer away", "bgcolor":"rgb(221,49,80)"},
        {"image":img3, "title":"Covilha","description":"74 kilometer away", "bgcolor":"rgb(204,44,74)"},
        {"image":img4, "title":"Evora","description":"104 kilometer away", "bgcolor":"rgb(217,58,48)"},
    ]
    render() { 
        return (
                   <Container className='MyCards text-dark' fluid>
                     <Row className="d-flex justify-content-between align-items-center" >
                     <span className='h1 text-left mt-5 mb-3'>Inspiration for your next trip</span>
                        
                        <div className='h4 mt-5 mb-3'>
                        <span><BsChevronLeft/></span>
                        <span><BsChevronRight/></span>
                        </div>
                     </Row>
                   <Row className="d-flex no-wrap row-cols-1  row-cols-md-2 row-cols-lg-4" style={{flexWrap:"none",overflow:"scroll"}}>{
                       this.cards.map((card,i) =>(
                           <SingleCard key={i} card = {card} />
                           ) )
                        }</Row>
                   </Container>
                );
    }
}


