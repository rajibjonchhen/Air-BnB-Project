import React, { Component } from 'react';
import {Container, Row, Card, Col} from 'react-bootstrap'
import '../App.css'


class InspirationSec extends React.Component {
    
inspirationListsArt =[
    ["Phoenix","Arizona"],["Hot Springs","Arkansas"],["Los Angeles","California"],["San Diego","California"],["San Francisco","California"],["Barcelona","Catalonia"],
    ["Prague","Czechia"],["Washington","District of Columbia"],["Keswick","England"],["London","England"],["Scarborough","England"],["Show more",]]
    
inspirationListsAdventure=[
    ["Lake Martin","Alabama"],["Banff","Alberta"],["Nerja","Andalucía"],["Greer","Arizona"],["Lake Havasu City","Arizona"],["Lake Powell","Arizona"],
    ["North Rim","Arizona"],["Payson","Arizona"],["Pinetop-Lakeside","Arizona"],["Red Rock","Arizona"],["Dinner Plain","Australia"],["Show more"]]
    
inspirationListsMountain =[
    ["Mentone","Alabama"],["Sedona","Arizona"],["Helen","Georgia"],["Pine Mountain","Georgia"],["Stone Mountain","Georgia"],["Island Park","Idaho"],
    ["Blue Mountains","New South Wales"],["Asheville","North Carolina"],["Blowing Rock","North Carolina"],["Boone","North Carolina"],["Hochatown","Oklahoma"],["Show more"]]

inspirationListsBeach = [
    ["Dauphin Island","Alabama"],["Fort Morgan","Alabama"],["Gulf Shores","Alabama"],["Bruny Island","Australia"],["Crescent Head","Australia"],["Gerringong",
    "Australia"],["Hamilton Island","Australia"],["Lancelin","Australia"],["Melbourne Beach","Australia"],["Moonta Bay","Australia"],["Ocean Grove","Australia"]]
    
    render() { 
        return <>
                <Container>
                    <Row>
                        <ul className='d-flex list-unstyled text-white justify-content-between'>
                            <li className="bg-secondary mx-2 p-1">Destinations for arts & culture</li>
                            <li className="bg-secondary mx-2 p-1">Destinations for outdoor adventure</li>
                            <li className="bg-secondary mx-2 p-1">Mountain cabins</li>
                            <li className="bg-secondary mx-2 p-1">Beach destinations</li>
                            <li className="bg-secondary mx-2 p-1">Popular destinations</li>
                            <li className="bg-secondary mx-2 p-1">Unique Stays</li>
                        </ul>
                    </Row>
                    <Row className='text-white'>{
                        this.inspirationListsArt.map((list,i) =>(
                        <Col>
                            <div className='d-flex flex-columns'>
                                <span>{list[0]}</span>
                                <span >{list[1]}</span>
                            </div>
                        </Col>
                        ))
                        }</Row>
                </Container>

                
        </>;
    }
}
 
export default InspirationSec;