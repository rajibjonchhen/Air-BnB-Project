
import React, { Component } from 'react';
import {Container, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap'
import '../App.css'


export default class MyFooter extends React.Component {

    footer = [
        [  "Support",
        "Help Center",
        "Safety information",
        "Cancellation options",
        "Our COVID-19 Response",
        "Supporting people with disabilities",
        "Report a neighborhood concern" ],

        ["Community",
        "Airbnb.org: disaster relief housing",
        "Support Afghan refugees",
        "Celebrating diversity & belonging",
        "Combating discrimination"],

        ["Hosting",
        "Try hosting",
        "AirCover: protection for Hosts",
        " Explore hosting resources",
        "Visit our community forum",
        "How to host responsibly"],

        ["About",
        "Newsroom",
        "Learn about new features",
        "Letter from our founders",
        " Careers",
        "Investors",
        "Airbnb Luxe"],
    ]
    render() { 
        return (<>
               <footer>
               <Container>
                   <Row>{
                        this.footer.map(lists =>(
                       <Col>
                       <ul className="list-unstyled text-left">{
                           lists.map(item =>(
                               <li className="my-3">{item}</li>
                               ))
                            } </ul>
                       </Col>
                        ))
                       }</Row>
                       </Container> 
               </footer>
        </>);
    }
}
