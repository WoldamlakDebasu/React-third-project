import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Secondropdown.css";


const Secondropdown=()=> {
    const [click, setClick] = useState(false);
    const handleClick= ()=> setClick(!click);


    return (
        <>
        <ul
         onClick={handleClick}
         className={click? "dropdown-menu clicked " : "dropdown-menu"}
         >
            <li><Link to="/dining" className="dropdown-link" onClick={()=>setClick(false)}>
                
                Dining
                </Link></li>
            <li><Link to="/wellness" className="dropdown-link" onClick={()=>setClick(false)}>
              
                Wellness
                
                </Link></li>
            <li><Link to="/ocasion" className="dropdown-link" onClick={()=>setClick(false)}>
            
                Occasion
                
                </Link></li>
            <li><Link to="/shop" className="dropdown-link" onClick={()=>setClick(false)}>
               
                Shop
                
                </Link></li>
            <li><Link to="/stories" className="dropdown-link" onClick={()=>setClick(false)}>
               
                Stories
                
                </Link></li>
        </ul>
        </>
    )
}


export default Secondropdown;









