
import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import SingleDiscoveryCard from './SingleDiscoverCard';
import img1 from '../components/assets/discoveryimage1.png'
import img2 from '../components/assets/discoveryimage2.png'

export default class DiscoveryBox extends React.Component {

    discoveryCards = [
        {heading:" on your trip", btnText:"Experience" ,image:img1},
        {heading:"from home", btnText:"Online Experience" ,image:img2}
    ]
    render() { 
        return <Container className='text-white' fluid
        >
            <h1 className="text-left">Discover Airbnb Experiences</h1>
            <Row>{this.discoveryCards.map((card,i) =>(<SingleDiscoveryCard key={i} card={card}/>))}</Row>
        </Container>;
    }
}
 
 
