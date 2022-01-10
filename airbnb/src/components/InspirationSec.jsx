import React, { Component } from 'react';
import {Container, Row, Card, Col} from 'react-bootstrap'
import '../App.css'


class InspirationSec extends React.Component {
 state = {
     destinationArray:[],
     displayNumberOfItems:"12",
     displayShowMore:"true",
     
 }   

 
 inspirationListsArt =[
["Phoenix","Arizona"],["Hot Springs","Arkansas"],["Los Angeles","California"],["San Diego","California"],["San Francisco","California"],["Barcelona","Catalonia"],
["Prague","Czechia"],["Washington","District of Columbia"],["Keswick","England"],["London","England"],["Scarborough","England"],
['Sherwood Forest','England'],['York','England'],['Paris','France'],['Rhodes','Greece'],['Nashville','Indiana'],['Dublin','Ireland'],['Florence','Italy'],['Rome','Italy'],
['Lisbon','Lisbon'],['Grande Isle','Louisiana'],['New Orleans','Louisiana'],['Marthas Vineyard','Massachusetts'],['South Haven','Michigan'],['Duluth','Minnesota'],
['Amsterdam','Netherlands'],['New York','New York'],['Nice','Provence-Alpes-Côte d Azur'],['Inverness','Scotland'],['Malaga','Spain'],['Valencia','Spain'],
['Split','Split-Dalmatia County'],['Nashville','Tennessee'],['Austin','Texas'],['Houston','Texas'],['Darthmouth','United Kingdom'],['Edinburgh','United Kingdom'],
['Liverpool','United Kingdom'],['St Ives','United Kingdom'],['Lake Powell','United States'],['Lake Anna','Virginia'],['Leavenworth','Washington'],['Seattle','Washington']
]
    
inspirationListsAdventure=[
["Lake Martin","Alabama"],["Banff","Alberta"],["Nerja","Andalucía"],["Greer","Arizona"],["Lake Havasu City","Arizona"],["Lake Powell","Arizona"],["North Rim","Arizona"],["Payson",
"Arizona"],["Pinetop-Lakeside","Arizona"],["Red Rock","Arizona"],["Dinner Plain","Australia"],["Streaky Bay","Australia"],["Emerald Lake","British Columbia"],["Vancouver Island",
"British Columbia"],["Victoria","British Columbia"],["Idyllwild-Pine Cove","California"],["Mammoth Lakes","California"],["Palm Desert","California"],["Shaver Lake","California"],
["South Lake Tahoe","California"],["Cultus Lake","Canada"],["Georgian Bay","Canada"],["Manitoulin Island","Canada"],["Ottawa River","Canada"],["The Blue Mountains","Canada"],
["West Kelowna","Canada"],["Gran Canaria","Canary Islands"],["Lanzarote","Canary Islands"],["Castle Hill","Canterbury"],["Aspen","Colorado"],["Colorado Springs","Colorado"],
["Denver","Colorado"],["Durango","Colorado"],["Estes Park","Colorado"],["Grand Lake","Colorado"],["Keystone","Colorado"],["Vail","Colorado"],["Winter Park","Colorado"],
["Salcombe","England"],["Swanage","England"],["Cape Coral","Florida"],["Blue Ridge","Georgia"],["Jekyll Island","Georgia"],["Lake Lanier","Georgia"],["Corfu","Greece"],
["McCall","Idaho"],["Clear Lake","Iowa"],["Lough Eske","Ireland"],["Lake Cumberland","Kentucky"],["Portland","Maine"],["South Portland","Maine"],["Deep Creek Lake","Maryland"],
["Lake Michigan Beach","Michigan"],["Lakeside","Michigan"],["Torch Lake","Michigan"],["Traverse City","Michigan"],["Upper Peninsula of Michigan","Michigan"],["Branson","Missouri"],
["Lake of the Ozarks","Missouri"],["Big Sky","Montana"],["West Yellowstone","Montana"],["Mount Charleston","Nevada"],["Cloudcroft","New Mexico"],["Red River","New Mexico"],["Bellingen",
"New South Wales"],["Brunswick Heads","New South Wales"],["Adirondack Mountains","New York"],["Lake Placid","New York"],["Niagara Falls","New York"],["Bald Head Island","North Carolina"],
["Bryson City","North Carolina"],["Emerald Isle","North Carolina"],["Lake Gaston","North Carolina"],["Lake Lure","North Carolina"],["Lake Norman of Catawba","North Carolina"],
["Mount Airy","North Carolina"],["Mountain","North Carolina"],["Oak Island","North Carolina"],["Geneva-on-the-Lake","Ohio"],["Medicine Park","Oklahoma"],["Turner Falls",
"Oklahoma"],["Algonquin Park","Ontario"],["Muskoka Lakes","Ontario"],["Tobermory","Ontario"],["Bend","Oregon"],["Crater Lake","Oregon"],["Northern Oregon Coast Range","Oregon"],
["Sunriver","Oregon"],["Lake Harmony","Pennsylvania"],["Mount Pocono","Pennsylvania"],["Mont-Tremblant","Quebec"],["Aviemore","Scotland"],["Isle of Mull","Scotland"],["Robe","South Australia"],["Mountain Rest","South Carolina"],["St Helens","Tasmania"],["Big Bend National Park","Texas"],["Canyon Lake","Texas"],["Lake Austin","Texas"],["Lake Buchanan","Texas"],["Betws-y-Coed","United Kingdom"],["Filey","United Kingdom"],["Fort Williams","United Kingdom"],["Loch Lomond","United Kingdom"],["Port Isaac","United Kingdom"],
["Moab","Utah"],["Mount Zion","Utah"],["Moraira","Valencian Community"],["Inverloch","Victoria"],["Metung","Victoria"],["Mount Buller","Victoria"],["Port Campbell","Victoria"],
["Wilsons Promontory","Victoria"],["Shenandoah","Virginia"],["Smith Mountain Lake","Virginia"],["Snowdon","Wales"],["Lake Chelan","Washington"],["Lake Crescent","Washington"],
["Lake Quinault","Washington"],["Quinault","Washington"],["Skamania","Washington"],["Snowshoe","West Virginia"],["Lake Geneva","Wisconsin"],["Wisconsin Dells","Wisconsin"],
["Yellowstone National Park","Wyoming"]]
    
inspirationListsMountain =[
["Mentone","Alabama"],["Sedona","Arizona"],["Helen","Georgia"],["Pine Mountain","Georgia"],["Stone Mountain","Georgia"],["Island Park","Idaho"],["Blue Mountains","New South Wales"],
["Asheville","North Carolina"],["Blowing Rock","North Carolina"],["Boone","North Carolina"],["Hochatown","Oklahoma"],["Pigeon Forge","Tennessee"],["Townsend","Tennessee"],["Wears Valley",
"Tennessee"],["Cabins","West Virginia"]
]

inspirationListsBeach = [
["Dauphin Island","Alabama"],["Fort Morgan","Alabama"],["Gulf Shores","Alabama"],["Bruny Island","Australia"],["Crescent Head","Australia"],["Gerringong","Australia"],["Hamilton Island",
"Australia"],["Lancelin","Australia"],["Melbourne Beach","Australia"],["Moonta Bay","Australia"],["Ocean Grove","Australia"],["Majorca","Balearic Islands"],["Big Sur","California"],
["Bodega Bay","California"],["Cambria","California"],["Cayucos","California"],["Huntington Beach","California"],["La Jolla Shores Beach","California"],["Laguna Beach",
"California"],["Long Beach","California"],["Malibu","California"],["Mission Beach","California"],["Newport Beach","California"],["Oceanside","California"],["Palm Springs","California"],["Pismo Beach","California"],["Santa Cruz","California"],["Santa Monica","California"],["Sea Ranch","California"],["Playa Blanca","Canarias"],["Fuerteventura","Canary Islands"],["Puerto del Carmen","Canary Islands"],["Tenerife","Canary Islands"],["Ayia Napa","Cyprus"],["Bethany Beach","Delaware"],["Dewey Beach","Delaware"],["Blackpool","England"],["Isle of Wight","England"],["Newquay","England"],["Weymouth","England"],["Albufeira","Faro District"],["Alys Beach","Florida"],["Anna Maria Island","Florida"],["Boca Grande","Florida"],["Bradenton","Florida"],["Cape San Blas","Florida"],["Captiva","Florida"],["Clearwater Beach","Florida"],["Cocoa Beach","Florida"],["Daytona Beach","Florida"],["Destin","Florida"],["Englewood","Florida"],["Fort Lauderdale","Florida"],["Fort Myers Beach","Florida"],["Fort Walton Beach","Florida"],["Grayton Beach","Florida"],["Gulf of Mexico","Florida"],["Indian Rocks Beach","Florida"],["Islamorada","Florida"],["Jacksonville Beach","Florida"],["Key Largo","Florida"],["Madeira Beach","Florida"],["Marathon","Florida"],["Marco Island","Florida"],["Mexico Beach","Florida"],["Miami Beach","Florida"],["Miami","Florida"],["Miramar Beach","Florida"],["Naples","Florida"],["Navarre Beach","Florida"],["New Smyrna Beach","Florida"],["Okaloosa Island","Florida"],["Panama City Beach","Florida"],["Pensacola Beach","Florida"],["Perdido Key","Florida"],["Rosemary Beach","Florida"],["Saint George Island","Florida"],["Santa Rosa Beach","Florida"],["Sarasota","Florida"],["Seagrove Beach","Florida"],["Seaside","Florida"],["South Beach","Florida"],["St. Augustine Beach","Florida"],["St. Pete Beach","Florida"],["Tampa","Florida"],["West Palm Beach","Florida"],["Bora Bora","French Polynesia"],["Tybee Island","Georgia"],["Honolulu","Hawaii"],["Kailua-Kona","Hawaii"],["Kapalua","Hawaii"],["Kauai","Hawaii"],["Kihei","Hawaii"],["Ko Olina Beach","Hawaii"],["Maui","Hawaii"],["Topsail Island","Hawaii"],["Old Orchard Beach","Maine"],["Wells","Maine"],["Cape Cod","Massachusetts"],["Nantucket","Massachusetts"],["Biloxi","Mississippi"],["Avalon","New Jersey"],["Jersey Shore","New Jersey"],["North Wildwood","New Jersey"],["Ocean City","New Jersey"],["Sea Isle City","New Jersey"],
["Stone Harbor","New Jersey"],["Hyams Beach","New South Wales"],["Fire Island","New York"],["Montauk","New York"],["Ocean Beach","New York"],["Atlantic Beach","North Carolina"],
["Carolina Beach","North Carolina"],["Corolla","North Carolina"],["Holden Beach","North Carolina"],["Kitty Hawk","North Carolina"],["Kure Beach","North Carolina"],["Nags Head","North Carolina"],["Ocean Isle Beach","North Carolina"],["Sunset Beach","North Carolina"],["Surf City","North Carolina"],["Wilmington","North Carolina"],["Wrightsville Beach","North Carolina"],["Grand Bend","Ontario"],["Sauble Beach","Ontario"],["Wasaga Beach","Ontario"],["Cannon Beach","Oregon"],["Seaside","Oregon"],["Carvoeiro","Portugal"],["Gold Coast","Queensland"],["Moreton Island","Queensland"],["Block Island","Rhode Island"],["Puerto Penasco","Sonora"],["Charleston Oceanfront Villas, Folly Beach","South Carolina"],["Edisto Beach","South Carolina"],["Folly Beach","South Carolina"],["Fripp Island","South Carolina"],["Isle of Palms","South Carolina"],["Kiawah Island","South Carolina"],["Myrtle Beach","South Carolina"],["Pawleys Island","South Carolina"],["Seabrook Island","South Carolina"],["Sullivan's Island","South Carolina"],["Surfside Beach","South Carolina"],["Alicante","Spain"],["Costa Adeje","Spain"],["Costa Del Sol","Spain"],["Fuengirola","Spain"],["Los Cristianos","Spain"],["Corpus Christi","Texas"],["Port Aransas","Texas"],["South Padre Island","Texas"],["Surfside Beach","Texas"],["Bournemouth","United Kingdom"],["New Quay","United Kingdom"],["Anglesea","Victoria"],["Abersoch","Wales"],["Seabrook","Washington"],["Jurien Bay","Western Australia"]
]


inspirationListsPopular = [
["Canmore","Alberta"],["Benalmadena","Andalusia"],["Marbella","Andalusia"],["Mijas","Andalusia"],["Prescott","Arizona"],["Scottsdale","Arizona"],["Tucson","Arizona"],["Jasper","Arkansas"],["Mountain View","Arkansas"],["Devonport","Australia"],["Mallacoota","Australia"],["Ibiza","Balearic Islands"],["Anaheim","California"],["Monterey","California"],["Paso Robles","California"], ["Santa Barbara","California"],["Sonoma","California"],["La Serena","Coquimbo"],["Dubai","Dubai"],["Birmingham","England"],["Brighton","England"],["Bude","England"],["Newcastle upon Tyne","England"],["Padstow","England"],["South West England"],["England","Whitby"],["England","Fort Myers"],["Florida","Jacksonville"],["Florida","Kissimmee"],["Florida",
"Longboat Key"],["Florida","Orlando"],["Florida","St Petersburg"],["Florida","St. Augustine"],["Florida","The Villages"],["Florida","Dahlonega"],["Georgia","Crete"],["Greece","Mykonos"],["Greece","Santorini"],["Greece","Oahu"],["Hawaii","Capri"],["Italy","Bar Harbor"],["Maine","Mackinac Island"],["Michigan","St. Joseph"],["Michigan","Larsmont"],["Minnesota","Las Vegas"],["Nevada","Madrid"],["New Mexico","Santa Fe"],["New Mexico","Bermagui"],["New South Wales","Evans Head"],["New South Wales","Sawtell"],["New South Wales","Young"],["New South Wales","Ocracoke"],["North Carolina","Florence"],["Oregon","Lakeside"],["Oregon","Lincoln City"],["Oregon","Paphos"],["Paphos","Maleny"],["Queensland","Stanthorpe"],["Queensland","Newport"],
["Rhode Island","Glasgow"],["Scotland","Scottish Highlands"],["Scotland","St Andrews"],["Scotland","McLaren Vale"],["South Australia","Wallaroo"],["South Australia","Charleston"]
["South Carolina"],["Hvar","Split-Dalmatia County"],["Saint John","St. John"],["Chattanooga","Tennessee"],["Concan","Texas"],["Fredericksburg","Texas"],["New Braunfels","Texas"],["Rockport","Texas"],["Waco","Texas"],["Forest of Dean District","United Kingdom"],["Jersey","United Kingdom"],["Lyme Regis","United Kingdom"],["Manchester","United Kingdom"],["Seaview","United Kingdom"],["Southwold","United Kingdom"],["Staithes","United Kingdom"],["Wells-next-the-Sea","United Kingdom"],["St. George","Utah"],["Benidorm","Valencian Community"],["Barwon Heads","Victoria"],["Castlemaine","Victoria"],["Healesville","Victoria"],["Marysville","Victoria"],["Sorrento","Victoria"],["Chincoteague","Virginia"],["Williamsburg","Virginia"],["Hay-on-Wye","Wales"],["Llandudno","Wales"],["Tenby","Wales"],

]
    
inspirationListsUnique = [
    ["Cabins","United States"],["Treehouses","United States"],["Glamping","United States"],["Tiny Houses","United States"],
["Beach Houses","United States"],["Campers and RVs","United States"],["Lakehouses","United States"]
]

componentDidMount = () => {
    this.setState({destinationArray:this.inspirationListsArt})

}

passArray =function(category){
this.setState({destinationArray:category})
}

componentDidUpdate(prevProps, prevState) {
    if (prevState.displayNumberOfItems !== this.state.displayNumberOfItems) {
        this.setState({ displayShowMore:"false"})
    }
  }

    render() { 
        return (
            <Container className='bg-white mt-5 'fluid>
                <p className="h3 text-left mt-5 mb-3">Inspiration for future getaways</p>
                    <Row style={{position:'relative', overflow:"scroll", fontSize:"15px", marginBottom:'0'}} >
                        <ul className='d-flex list-unstyled  justify-content-between'  >
                            <li className=" mx-2 pointer " onClick = {(e) => {this.passArray(this.inspirationListsArt)}}><span className="h p-3 hoverGrey">Destinations for arts & culture</span> <hr className='underline' style={{border:'1px solid black',width:"100%",display: this.state.destinationArray===this.inspirationListsArt? 'block':'none'}}/></li>
                            <li className=" mx-2 pointer" onClick = {(e) => {this.passArray(this.inspirationListsAdventure)}}><span className="h p-3 hoverGrey">Destinations for outdoor adventure </span><hr className='underline' style={{border:'1px solid black',width:"100%",display: this.state.destinationArray===this.inspirationListsAdventure? 'block':'none'}}/></li>
                            <li className=" mx-2 pointer" onClick = {(e) => {this.passArray(this.inspirationListsMountain)}}><span className="h p-3 hoverGrey">Mountain cabins </span><hr className='underline' style={{border:'1px solid black',width:"100%",display: this.state.destinationArray===this.inspirationListsMountain? 'block':'none'}}/></li>
                            <li className=" mx-2 pointer" onClick = {(e) => {this.passArray(this.inspirationListsBeach)}}><span className="h p-3 hoverGrey">Beach destinations </span><hr className='underline' style={{border:'1px solid black',width:"100%",display: this.state.destinationArray===this.inspirationListsBeach? 'block':'none'}}/></li>
                            <li className=" mx-2 pointer" onClick = {(e) => {this.passArray(this.inspirationListsPopular)}}><span className="h p-3 hoverGrey">Popular destinations </span><hr className='underline' style={{border:'1px solid black',width:"100%",display: this.state.destinationArray===this.inspirationListsPopular? 'block':'none'}}/></li>
                            <li className=" mx-2 pointer" onClick = {(e) => {this.passArray(this.inspirationListsUnique)}}><span className="h p-3 hoverGrey">Unique Stays </span><hr className='underline' style={{border:'1px solid black',width:"100%",display: this.state.destinationArray===this.inspirationListsUnique? 'block':'none'}}/></li>
                        </ul>
                    <hr style={{position:'absolute', zIndex:'10', top:'25px', left:'7px', border:'1px solid rgb(225,225,225)', width:'92%'}}/>
                    </Row>
                    <Row>{
                        this.state.destinationArray.slice(0,this.state.displayNumberOfItems).map((list,i) =>(<>
                            <Col   key={i.toString()} xs={6} sm={4} md={3} lg={3} xl={3}>{
                                
                            i===11&&this.state.displayNumberOfItems==="12"? (<div  key={i} className='d-flex flex-column my-4 text-left pointer'
                            style={{display:this.state.displayShowMore? "block":"none"}} 
                            onClick = {(e) => {this.setState({displayNumberOfItems:this.state.destinationArray.length, displayShowMore:"false"})}}>
                            
                            <span style={{fontSize:"14px",fontWeight:"600",textDecoration:"underline"}}>Show more</span></div> ):(<div className='d-flex flex-column my-4 text-left'>
                            <span style={{fontSize:"14px"}}>{list[0]}</span> 
                            <span style={{fontSize:"14px",color:"grey"}}>{list[1]}</span>
                            </div>)
                            }</Col>
                         
                         
                          </>
                        
                        ))}</Row>
                </Container>
                ) }
}
 
export default InspirationSec;