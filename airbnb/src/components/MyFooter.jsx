
import React, { Component } from 'react';
import {Container, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap'
import '../App.css'
import { FaFacebookF, FaTwitter, FaInstagramSquare } from "react-icons/fa";
// import { TiSocialInstagram} from "react-icons/Ti";

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

    footerFootLeft = [
        [" © 2021 Airbnb, Inc.",
        "·Privacy",
        "·Terms",
        "·Sitemap",
        ],
        [],
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
                       <hr/>
                       <Row className="d-flex justify-content-between">
                           {/* <Col> */}
                                <ul className="list-unstyled text-left d-flex">{
                                    this.footerFootLeft.map(list => (
                                        <li className>{list}</li>
                                    ))
                                }
                                   
                                </ul>
                           {/* </Col> */}
                           {/* <Col> */}
                                <ul className="list-unstyled text-left d-flex">
                                    <li className = "mx-2">
                                        English (US)
                                    </li>
                                    <li className = "mx-2">
                                        € EUR
                                    </li>
                                    <li className = "mx-2">
                                            <FaFacebookF/>
                                    </li>
                                    <li className = "mx-2">
                                    <FaTwitter/> 
                                    </li>
                                    <li>
                                    <FaInstagramSquare/>
                                    </li>
                                </ul>
                           {/* </Col> */}
                       </Row>
                       </Container> 
               </footer>
        </>);
    }
}
