
import React from 'react';
import {Container, Row, Col, ListGroup, ListGroupItem} from 'react-bootstrap'
import '../App.css'
import { FaFacebookF, FaTwitter, FaInstagramSquare } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import  "../components/CssFiles/footer.css";

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

    footerFoot = [
        [" © 2021 Airbnb, Inc.","· Privacy","· Terms","· Sitemap"],
        [ <FiGlobe/>,"English (US)"," € EUR", <FaFacebookF/>, <FaTwitter/> ,<FaInstagramSquare/>]]

    render() { 
        return (<>
               <footer>
               <Container  style={{backgroundColor:"rgb(247,247,247)", padding:'20px 0'}} fluid>
                   <Row  className="footerElements text-left" style={{margin:"0 4%"}}>{
                        this.footer.map((lists,i) =>(
                       <Col  key={i}  lg={4} xl={3}>
                       <span style={{fontSize: '15px',fontWeight:'600',borderRadius:'50px',textAlign:'left'}}>{lists[0]}</span>
                       <ul key={lists} className=" list-unstyled text-left">{
                           lists.slice(1).map(item =>(
                               <li key={item}className="my-3">{item}</li>
                               ))
                            } </ul>
                            <hr/>
                       </Col>
                        ))
                       }</Row>
                       <hr/>
                       <Row style={{margin:"0 4%"}} className="d-flex justify-content-between" >{
                           this.footerFoot.map((lists,j) =>(
                               <ul key={j} className=" text-left list-unstyled text-left d-flex">{
                                   lists.map(list => (
                                       <li key={list} className="mx-2">{list}</li>
                                       ))
                                    }</ul>
                                    ))
                      }</Row>
                       </Container> 
               </footer>
        </>);
    }
}
