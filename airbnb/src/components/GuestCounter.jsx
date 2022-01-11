import React, { useState,useEffect } from "react";
import {FiPlusCircle, FiMinusCircle} from 'react-icons/fi'
import '../App.css'


const GuestCounter = (props)=>{

    const [counter,setCounter]= useState(0)

    useEffect(()=>{
        props.guestCounter(counter)
    },[counter])
    
        return <div className="d-flex justify-content-between align-items-center" style={{fontSize:'20px'}}>
            <span className="m-2 pointer" onClick={(e) => { counter>0 && setCounter(counter-1)}}><FiMinusCircle/> </span>
            <span className="m-2 w-100">{counter}</span>
            <span className="m-2 pointer" onClick={(e) => {setCounter(counter+1)}}><FiPlusCircle/></span>
        </div>;
    
}
 
export default GuestCounter;