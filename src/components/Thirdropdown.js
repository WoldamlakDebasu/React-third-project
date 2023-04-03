import React , { useState } from "react";
import {Link} from "react-router-dom";
import "./Thirdropdown.css";



const Thirdropdown=()=> {

    const [click, setClick]= useState(false);
    const handleClick= ()=> setClick(!click);



    return (
        <>
        <ul 
        onClick={handleClick}
        className={click? "dropdown-menu clicked": "dropdown-menu"}
        >
    <li><Link to="/collect" className="dropdown-link" onClick={()=>setClick(false)}>
       
        <h1>Collect</h1>
        </Link></li>
    <li><Link to="/exchange" className="dropdown-link" onClick={()=>setClick(false)}>
 
        <h1>Exchange</h1>
        </Link></li>
    <li><Link to="/partners" className="dropdown-link" onClick={()=>setClick(false)}>
   
        <h1>Partners</h1>
        </Link></li>
    <li><Link to="/members" className="dropdown-link" onClick={()=>setClick(false)}>
        
        <h1>Member Offers</h1>
        </Link></li>
    <li><Link to="/help" className="dropdown-link" onClick={()=>setClick(false)}>
        <h1>Help and Support</h1>
        </Link></li>
        </ul>
        </>
    )
}

export default Thirdropdown;