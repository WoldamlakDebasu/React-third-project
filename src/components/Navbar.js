import React, {useState} from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";
import Dropdown from './Dropdown';
import Secondropdown from './Secondropdown';
import Thirdropdown from './Thirdropdown';
import Fourthdropdown from "./Fourthdropdown";


const Navbar= ()=> {
    const [click, setClick]= useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [secondropdown, setSecondropdown] = useState(false);
    const [thirdropdown, setThirdropdown] = useState(false);
    const [fourthdropdown, setFourthdropdown]= useState(false);


    
const closeMobileMenu = ()=> setClick(false);


  return (
    <div className="navbar">
        <nav className="nav-list">
            <div className="firstlist">
            <ul className="nav-links">

               <li>
                <Link to= "/" className="nav-links" onClick={closeMobileMenu}>SHERATON ADDIS</Link>
                </li>

               <li
               onMouseEnter= {()=> setDropdown(true)}
               onMouseLeave = {()=> setDropdown(false)}
               >
                <Link to= "/hotels" className="nav-links" onClick={closeMobileMenu}>Hotels <i class="fa-solid fa-caret-down"></i></Link>

                {dropdown && <Dropdown />}
                </li>

               <li 
               onMouseEnter={()=> setSecondropdown(true)}
               onMouseLeave = {()=> setSecondropdown(false)}
               >
                <Link to= "/lifestyle" className="nav-links" onClick={closeMobileMenu}>Lifestyle <i class="fa-solid fa-caret-down"></i></Link>

                {secondropdown && <Secondropdown />}
                </li>


               <li
               onMouseEnter={()=> setThirdropdown(true)}
               onMouseLeave ={()=> setThirdropdown(false)}
               >

                <Link to= "/offers" className="nav-links" onClick={closeMobileMenu}>Offers <i class="fa-solid fa-caret-down"></i></Link>

                {thirdropdown && <Thirdropdown />}
                </li>

               <li
               onMouseEnter= {()=> setFourthdropdown(true)}
               onMouseLeave= {()=> setFourthdropdown(false)}
               >
                <Link to= "/loyality" className="nav-links" onClick={closeMobileMenu}> Loyality<i class="fa-solid fa-caret-down"></i> </Link>

                {fourthdropdown && <Fourthdropdown />}
                </li>

               <li className="book">
                <Link to= "/book" className="nav-link" onClick={closeMobileMenu}> BOOK NOW </Link>
                </li>


                <li>
                <input className="ser" type="text" placeholder="Search..."/><i class="fa-solid fa-magnifying-glass"></i>
                </li>

               </ul> 
              </div>


              <div className="seclist">
               <ul className="navsec-lists">
                <li><a href="#">A luxury collection</a></li>
                <li><a href="#">OFFERS</a></li>
                <li><a href="#">DINING</a></li>
                <li><a href="#">SUITES</a></li>
                <li><a href="#">EXPERIENCES</a></li>
                <li><a href="#">WELLNESS</a></li>
                <li><a href="#">EVENTS</a></li>
                <li><a href="#">GIFTS</a></li>
                </ul>
                </div>

            </nav>
        </div>
    )
}


export default Navbar;









