
import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import SingleDiscoveryCard from './SingleDiscoverCard';

export default class DiscoveryBox extends React.Component {

    discoveryCards = [
        {heading:"Things to do on your trip", btnText:"Experience" ,image:"https://stays.net/blog/wp-content/uploads/2018/12/experie%CC%82ncias-do-airbnb-tacos.jpg"},
        {heading:"Things to do from home", btnText:"Online Experience" ,image:"https://news.airbnb.com/wp-content/uploads/sites/4/2021/07/1.-Secrets-of-tiramisu-ice-cream-and-sorbet-edited-1.jpg?resize=1199%2C1602?w=1199"}
    ]
    render() { 
        return <Container>
            <h1>Discover Airbnb Experiences</h1>
            <Row>{
                this.discoverCards.map((card) =>(<SingleDiscoveryCard card={card}/>))
    }</Row>
        </Container>;
    }
}
 
 
