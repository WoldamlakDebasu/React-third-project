import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dropdown.css";



const Dropdown= ()=> {

    const [click, setClick] = useState(false);
    const handleClick= ()=> setClick(!click);



    return (
        <>
        <ul 
        onClick={handleClick} 
        className={click? "Dropdown-menu clicked" : "Dropdown-menu"}
        >

            <li><Link to= "/addis" className="dropdown-link" onClick={()=>setClick(false)}>Addis Ababa, Sheraton</Link></li>
             <li><Link to="/dubai" className="dropdown-link" onClick={()=>setClick(false)}>Dubai, Burji Al Arab</Link></li>
             <li><Link to ="/abudhabi" className="dropdown-link" onClick={()=>setClick(false)}>Abu Dhabi, Jumierah</Link></li>
             <li><Link to="/capri" className="dropdown-link" onClick={()=>setClick(false)}>Capri, Capri Pallace</Link></li>
        
        </ul>
        </>
    )
}


export default Dropdown;








