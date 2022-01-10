import React from "react";
import {FiPlusCircle, FiMinusCircle} from 'react-icons/fi'
import '../App.css'
class GuestCounter extends React.Component {
  
    
    render() { 
        return <div className="d-flex justify-content-between align-items-center" style={{fontSize:'20px'}}>
            <span className="m-2 pointer" onClick={(e) => this.props.guestCounter('-')}><FiMinusCircle/> </span>
            <span className="m-2">{this.props.NumbOfGuest}</span>
            <span className="m-2 pointer" onClick={(e) => this.props.guestCounter('+')}><FiPlusCircle/></span>
        </div>;
    }
}
 
export default GuestCounter;