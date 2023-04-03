import React, { useState } from "react";
import "./Fourthdropdown.css";
import { Link } from 'react-router-dom';
import img15 from "./pages/images/Dining.jpg";
import img16 from "./pages/images/newimage.jpg";
import img17 from "./pages/images/reception.jpg";
import img18 from "./pages/images/oldreception.jpg";
import img19 from "./pages/images/newreception.jpg";



const Fourthdropdown=()=> {

    const [click, setClick]= useState(false);
    const handleClick= ()=> setClick(!click);

    

    return <>
    <ul
    onClick={handleClick}
    className= {click? "dropdown-menu clicked": "dropdown-menu4"}
    >
<li><Link to="/aboutsher" className="dropdown-link" onClick={()=> setClick(false)}>
    <img src={img15} width="200" height="200"/>
      <h3>ABOUT SHERATON ONE</h3>
      <a href="#">View More</a>
    </Link></li>
<li><Link to="/collectsher" className="dropdown-link" onClick={()=> setClick(false)}>
    <img src={img16} width="200" height="200"/>
       <h3>COLLECT</h3>
       <a href="#">View More</a>
    </Link>
</li>
<li><Link to="/exchange" className="dropdown-link" onClick={()=> setClick(false)}>
    <img src={img17} width="200" height="200"/>
    <h3>EXCHANGE</h3>
    <a href="#">View More</a>
    </Link>
</li>
<li><Link to="/memebership" className="dropdown-link" onClick={()=> setClick(false)}>
    <img src={img18} width="200" height="200"/>
    <h3>MEMBER OFFERS</h3>
    <a href="#">View More</a>
    </Link></li>
<li><Link to="/help" className="dropdown-link" onClick={()=> setClick(false)}>
    <img src={img19} width="200" height="200"/>
    <h3>HELP AND SUPPORT</h3>
    <a href="#">View More</a>
    </Link></li>
    </ul>
    </>
}


export default Fourthdropdown;







