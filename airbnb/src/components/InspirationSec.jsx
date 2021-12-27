import React, { Component } from 'react';
import {Container, Row, Card, Col} from 'react-bootstrap'
import '../App.css'


class InspirationSec extends React.Component {
    inspirationLists =[
        [
            "Phoenix",
            "Arizona",
        ],
        [
            "Hot Springs",
            "Arkansas",
        ],
        [
            "Los Angeles",
            "California",
        ],
        [
        "San Diego",
        "California",
        ],
        [
        "San Francisco",
        "California",
        ],
        [
        "Barcelona",
        "Catalonia",
        ],
        [
        "Prague",
        "Czechia",
        ],
        [
        "Washington",
        "District of Columbia",
        ],
        [
        "Keswick",
        "England",
        ],
        [
        "London",
        "England",
        ],
        [
        "Scarborough",
        "England",
        ],
        [
        "Show more",
         ]]
    render() { 
        return <>
                <Container>
                    <Row>
                        <ul className='d-flex list-unstyled text-white'>
                            <li>
                                Destinations for arts & culture
                            </li>
                            <li>
                                Destinations for outdoor adventure
                            </li>
                            <li>
                                Mountain cabins
                            </li>
                            <li>
                                Beach destinations
                            </li>
                            <li>
                                Popular destinations
                            </li>
                            <li>
                                Unique Stays
                            </li>
                        </ul>
                    </Row>
                    <Row className='text-white'>{
                        this.inspirationLists.map((list,i) =>(
                        <Col>
                        <div className='d-flex flex-columns'>
                            <span className='fontBold'>{list[0]}</span>
                            <span>{list[1]}</span>
                        </div>
                        </Col>
                        ))
                        }</Row>
                </Container>

                
        </>;
    }
}
 
export default InspirationSec;