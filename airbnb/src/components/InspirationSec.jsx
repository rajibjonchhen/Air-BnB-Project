import React, { Component } from 'react';
import {Container, Row, Card, Col} from 'react-bootstrap'
import '../App.css'


class InspirationSec extends React.Component {
 state = {
     destinationArray:[]
 }   

 
 inspirationListsArt =[
["Phoenix","Arizona"],["Hot Springs","Arkansas"],["Los Angeles","California"],["San Diego","California"],["San Francisco","California"],["Barcelona","Catalonia"],
["Prague","Czechia"],["Washington","District of Columbia"],["Keswick","England"],["London","England"],["Scarborough","England"],["Show more"],
['Sherwood Forest','England'],['York','England'],['Paris','France'],['Rhodes','Greece'],['Nashville','Indiana'],['Dublin','Ireland'],['Florence','Italy'],['Rome','Italy'],
['Lisbon','Lisbon'],['Grande Isle','Louisiana'],['New Orleans','Louisiana'],['Marthas Vineyard','Massachusetts'],['South Haven','Michigan'],['Duluth','Minnesota'],
['Amsterdam','Netherlands'],['New York','New York'],['Nice','Provence-Alpes-Côte d Azur'],['Inverness','Scotland'],['Malaga','Spain'],['Valencia','Spain'],
['Split','Split-Dalmatia County'],['Nashville','Tennessee'],['Austin','Texas'],['Houston','Texas'],['Darthmouth','United Kingdom'],['Edinburgh','United Kingdom'],
['Liverpool','United Kingdom'],['St Ives','United Kingdom'],['Lake Powell','United States'],['Lake Anna','Virginia'],['Leavenworth','Washington'],['Seattle','Washington']
]
    
inspirationListsAdventure=[
    ["Lake Martin","Alabama"],["Banff","Alberta"],["Nerja","Andalucía"],["Greer","Arizona"],["Lake Havasu City","Arizona"],["Lake Powell","Arizona"],
    ["North Rim","Arizona"],["Payson","Arizona"],["Pinetop-Lakeside","Arizona"],["Red Rock","Arizona"],["Dinner Plain","Australia"],["Show more"]]
    
inspirationListsMountain =[
    ["Mentone","Alabama"],["Sedona","Arizona"],["Helen","Georgia"],["Pine Mountain","Georgia"],["Stone Mountain","Georgia"],["Island Park","Idaho"],
    ["Blue Mountains","New South Wales"],["Asheville","North Carolina"],["Blowing Rock","North Carolina"],["Boone","North Carolina"],["Hochatown","Oklahoma"],["Show more"]]

inspirationListsBeach = [
    ["Dauphin Island","Alabama"],["Fort Morgan","Alabama"],["Gulf Shores","Alabama"],["Bruny Island","Australia"],["Crescent Head","Australia"],["Gerringong",
    "Australia"],["Hamilton Island","Australia"],["Lancelin","Australia"],["Melbourne Beach","Australia"],["Moonta Bay","Australia"],["Ocean Grove","Australia"]]
inspirationListsPopular = [
["Canmore","Alberta"],["Benalmadena","Andalusia"],["Marbella","Andalusia"],["Mijas","Andalusia"],["Prescott","Arizona"],
["Scottsdale","Arizona"],["Tucson","Arizona"],["Jasper","Arkansas"],["Mountain View","Arkansas"],["Devonport","Australia"],["Mallacoota","Australia"]]
    
inspirationListsUnique = [
    ["Cabins","United States"],["Treehouses","United States"],["Glamping","United States"],["Tiny Houses","United States"],
["Beach Houses","United States"],["Campers and RVs","United States"],["Lakehouses","United States"]
]

componentDidMount = () => {
    this.setState({destinationArray:this.inspirationListsArt})
}


    render() { 
        return (
            <Container>
                    <Row>
                        <ul className='d-flex list-unstyled text-white justify-content-between ' >
                            <li className="bg-secondary mx-2 p-1" onClick = {(e) => {this.setState({destinationArray:this.inspirationListsArt})}}>Destinations for arts & culture</li>
                            <li className="bg-secondary mx-2 p-1" onClick = {(e) => {this.setState({destinationArray:this.inspirationListsAdventure})}}>Destinations for outdoor adventure</li>
                            <li className="bg-secondary mx-2 p-1" onClick = {(e) => {this.setState({destinationArray:this.inspirationListsMountain})}}>Mountain cabins</li>
                            <li className="bg-secondary mx-2 p-1" onClick = {(e) => {this.setState({destinationArray:this.inspirationListsBeach})}}>Beach destinations</li>
                            <li className="bg-secondary mx-2 p-1" onClick = {(e) => {this.setState({destinationArray:this.inspirationListsPopular})}}>Popular destinations</li>
                            <li className="bg-secondary mx-2 p-1" onClick = {(e) => {this.setState({destinationArray:this.inspirationListsUnique})}}>Unique Stays</li>
                        </ul>
                    </Row>
                    <Row className='text-white'>{
                        this.state.destinationArray.map((list,i) =>(
                            <Col sm={6} md={4} lg={3}>
                            <div className='d-flex flex-column my-4 text-left'>
                                <span>{list[0]}</span>
                                <span >{list[1]}</span>
                            </div>
                        </Col>
                        ))
                    }</Row>
                </Container>
                ) }
}
 
export default InspirationSec;