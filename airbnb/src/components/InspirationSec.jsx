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
["Lake Martin","Alabama"],["Banff","Alberta"],["Nerja","Andalucía"],["Greer","Arizona"],["Lake Havasu City","Arizona"],["Lake Powell","Arizona"],["North Rim","Arizona"],["Payson",
"Arizona"],["Pinetop-Lakeside","Arizona"],["Red Rock","Arizona"],["Dinner Plain","Australia"],["Show more"],["Streaky Bay","Australia"],["Emerald Lake","British Columbia"],["Vancouver Island",
"British Columbia"],["Victoria","British Columbia"],["Idyllwild-Pine Cove","California"],["Mammoth Lakes","California"],["Palm Desert","California"],["Shaver Lake","California"],
["South Lake Tahoe","California"],["Cultus Lake","Canada"],["Georgian Bay","Canada"],["Manitoulin Island","Canada"],["Ottawa River","Canada"],["The Blue Mountains","Canada"],
["West Kelowna","Canada"],["Gran Canaria","Canary Islands"],["Lanzarote","Canary Islands"],["Castle Hill","Canterbury"],["Aspen","Colorado"],["Colorado Springs","Colorado"],
["Denver","Colorado"],["Durango","Colorado"],["Estes Park","Colorado"],["Grand Lake","Colorado"],["Keystone","Colorado"],["Vail","Colorado"],
["Winter Park","Colorado"],["Salcombe","England"],["Swanage","England"],["Cape Coral","Florida"],["Blue Ridge","Georgia"],["Jekyll Island","Georgia"],["Lake Lanier","Georgia"],["Corfu",
"Greece"],["McCall","Idaho"],["Clear Lake","Iowa"],["Lough Eske","Ireland"],["Lake Cumberland","Kentucky"],["Portland","Maine"],["South Portland","Maine"],["Deep Creek Lake","Maryland"],
["Lake Michigan Beach","Michigan"],["Lakeside","Michigan"],["Torch Lake","Michigan"],["Traverse City","Michigan"],["Upper Peninsula of Michigan","Michigan"],["Branson","Missouri"],
["Lake of the Ozarks","Missouri"],["Big Sky","Montana"],["West Yellowstone","Montana"],["Mount Charleston","Nevada"],["Cloudcroft","New Mexico"],["Red River","New Mexico"],["Bellingen",
"New South Wales"],["Brunswick Heads","New South Wales"],["Adirondack Mountains","New York"],["Lake Placid","New York"],["Niagara Falls","New York"],["Bald Head Island","North Carolina"],
["Bryson City","North Carolina"],["Emerald Isle","North Carolina"],["Lake Gaston","North Carolina"],["Lake Lure","North Carolina"],["Lake Norman of Catawba","North Carolina"],
["Mount Airy","North Carolina"],["Mountain","North Carolina"],["Oak Island","North Carolina"],["Geneva-on-the-Lake","Ohio"],["Medicine Park","Oklahoma"],["Turner Falls",
"Oklahoma"],["Algonquin Park","Ontario"],["Muskoka Lakes","Ontario"],["Tobermory","Ontario"],["Bend","Oregon"],["Crater Lake","Oregon"],["Northern Oregon Coast Range","Oregon"],
["Sunriver","Oregon"],["Lake Harmony","Pennsylvania"],["Mount Pocono","Pennsylvania"],["Mont-Tremblant","Quebec"],["Aviemore","Scotland"],["Isle of Mull","Scotland"],["Robe","South Australia"],
["Mountain Rest","South Carolina"],["St Helens","Tasmania"],["Big Bend National Park","Texas"],["Canyon Lake","Texas"],["Lake Austin","Texas"],["Lake Buchanan","Texas"],["Betws-y-Coed",
"United Kingdom"],["Filey","United Kingdom"],["Fort Williams","United Kingdom"],["Loch Lomond","United Kingdom"],["Port Isaac","United Kingdom"],["Moab","Utah"],["Mount Zion",
"Utah"],["Moraira","Valencian Community"],["Inverloch","Victoria"],["Metung","Victoria"],["Mount Buller","Victoria"],["Port Campbell","Victoria"],["Wilsons Promontory","Victoria"],
["Shenandoah","Virginia"],["Smith Mountain Lake","Virginia"],["Snowdon","Wales"],["Lake Chelan","Washington"],["Lake Crescent","Washington"],["Lake Quinault","Washington"],
["Quinault","Washington"],["Skamania","Washington"],["Snowshoe","West Virginia"],["Lake Geneva","Wisconsin"],["Wisconsin Dells","Wisconsin"],["Yellowstone National Park","Wyoming"]]
    
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