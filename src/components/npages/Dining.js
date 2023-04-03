import React , {useState } from "react";
import "./Npages.css";
import img22 from "./nimages/dining.jpg";
import img23 from "../pages/images/Dining.jpg";
import img24 from "../pages/images/firstview.jpg";
import img25 from "../pages/images/seventhview.jpg";
import img26 from "../pages/images/Servicetwo.jpg";
import img1 from "../pages/images/firstview.jpg";
import img2 from "../pages/images/secondview.jpg";
import img3 from "../pages/images/thirdview.jpg";
import img4 from "../pages/images/fourthview.jpg";
import img5 from "../pages/images/fifthview.jpg";
import img6 from "../pages/images/sixthview.jpg";
import img7 from "../pages/images/seventhview.jpg";
import img8 from "../pages/images/eigthview.jpg";
import img9 from "../pages/images/ninthview.jpg";
import img10 from "../pages/images/tenthview.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";


const Dining = ()=> {
    return <div className="dining">
        
        <div className="firstdining">
       <h1>Our dining service is the best luxurious and most beautiful part of our services.</h1>
       
       <div className="diningheader">
        <div className="din-one">
        <h1>Our Hotels dining Service one.</h1>
          <p>Our Hotels service is the most luxurious service 
            in Ethiopian history and try it to enjoy our food 
            with yout family.
          </p>
          <img src={img23}/>
          
        </div>

        <div className="din-two">
        <h1>Our Hotels dining Service two.</h1>
          <p>Our Hotels service is the most luxurious service 
            in Ethiopian history and try it to enjoy our food 
            with yout family.
          </p>
          <img src={img24}/>
         
        </div>

        <div className="din-three">
        <h1>Our Hotels dining Service three.</h1>
          <p>Our Hotels service is the most luxurious service 
            in Ethiopian history and try it to enjoy our food 
            with yout family.
          </p>
          <img src={img25}/>
          
        </div>

        <div className="din-four">
        <h1>Our Hotels dining Service four.</h1>
          <p>Our Hotels service is the most luxurious service 
            in Ethiopian history and try it to enjoy our food 
            with yout family.
          </p>
          <img src={img26}/>
         
        </div>

       </div>
       </div>
       
       <div className="middle-footer">

       <div className="bodytext">    
        <h1>Book our services right below</h1>
       </div>
 
       <div className="bodyfooter">
         <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="firstfooter">
                <img src={img1} width="300" height="250" />
               <h1>Exceptional Staycation</h1>
               <h4>An iconic staycaption with exclusive savings for UAE residents only</h4>
            <ul>
                <li>Up to 20% off ourt Flexible Rate</li>
                <li>Butter service and Hemies amenities</li>
                <li>Access Talise Spa, Wild Wadi Waterpark and more</li>
                <li>Offer is available to UAE nationals and residents only</li>
                <li>All staying guests are required to present original valid identification</li>
            </ul>
            <a href="#">View Details</a><br/>
            <button>BOOK NOW</button>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="secondfooter">
                <img src={img2} width="300" height="250"/>
                <h1>Exceptional Sheraton Escapes</h1>
               <h4>Book your stay before 28 Feburary 2023 to enjoy up to 20% off.</h4>
            <ul>
                <li>USD 200 resort credit with each stay</li>
                <li>Complimentary daily breakfast</li>
                <li>Access Talise Spa, Wild Wadi Waterpark and more</li>
                
            </ul>
            <a href="#">View Details</a><br/>
            <button>BOOK NOW</button>
   
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="thirdfooter">
                <img src={img3} width="300" height="250"/>

                <h1>Exceptional Festive Moments</h1>
               <h4>Enjoy exceptional Festive Moments sat Sheraton Addis </h4>
            <ul>
                <li>A spectacular New Year's Eve fireworks display and exclusive live performance</li>
                <li>Special rates on one of our spectacular New Year's Eve dining experiences</li>
                <li>Complimentary daily breakfast</li>
                <li>World-renowned private butler service</li>
                <li>Sophisticated Hermis bathroom products</li>
            </ul>
            <a href="#">View Details</a><br/>
            <button>BOOK NOW</button>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="fourthfooter">
                 <img src={img4} width="300" height="250"/>

                 <h1>The Terrce Experience </h1>
               <h4>Book thisoffer and enjoy a complimentary luxury cabana on The Terrace</h4>
            <ul>
                <li>Indulgent daily breakfast</li>
                <li>Complimentary Luxury Cabana on The Terrace</li>
                <li>Butler service and Hermies armenities</li>
                <li>Access Talise Spa, Wild Wadi Waterpark and more</li>
            </ul>
            <a href="#">View Details</a><br/>
            <button>BOOK NOW</button>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="fifthfooter">
            <img src={img5} width="300" height="250"/>
            <h1>Stay and Dine</h1>
               <h4>Book an indulgent stay with exclusive dining included</h4>
            <ul>
                <li>Daily complimentary breakfast</li>
                <li>A choice of complimentary lunch for dinner</li>
                <li>Unlimited entery to Wild Wadi Waterpark</li>
            </ul>
            <a href="#">View Details</a><br/>
            <button>BOOK NOW</button>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="sixthfooter">
            <img src={img6} width="300" height="250"/>
             <h1>Sheraton Flexible rates</h1>
             <h4>Our standard rate offers the most flexible booking option</h4>
            <ul>
                <li>Indulgent daily breakfast</li>
                <li>Luxuries Hemies bathroom amenities</li>
                <li>World class butler service</li>
                <li>Access to our temprature- controlled pool and leisure facilities on The Terrace</li>
            </ul>
            <a href="#">View Details</a><br/>
            <button>BOOK NOW</button>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="seventhfooter">
            <img src={img7} width="300" height="250"/>
            <h1>Exceptional Staycation</h1>
            <h4>An iconic staycaption with exclusive savings for UAE residnts only</h4>
            <ul>
                <li>Up to 20% off our Flexible Rate</li>
                <li>BUtler service and HErmies amenities</li>
                <li>Access Talise Spa, Wild wadi Waterpark and more</li>
                <li>Offer is availableo to UAE nationals and residnets only</li>
                <li>All staying guests are requied to present origninal valid identification.</li>
            </ul>
            <a href="#">View Details</a><br/>
            <button>BOOK NOW</button>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="eighthfooter">
            <img src={img8} width="300" height="250"/>
            <h1>Exceptional Sheraton Escapes</h1>
            <h4>Book your stay before 28 Feburary 2023 to enjoy up to 20% off.</h4>
            <ul>
                <li>USD 200 resart credit with each stay</li>
                <li>Complimentary daily breakfast</li>
                <li>Access Talisa Spa, Wild Wadi Waterpark and more</li>
            </ul>
            <a href="#">View Details</a><br/>
            <button>BOOK NOW</button>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="ninthfooter">
            <img src={img9} width="300" height="250"/>
            <h1>THe Terrace Experience</h1>
            <h4>Book This offer and enjoy a complimentary luxury cabana on The Terrace</h4>
            <ul>
                <li>Indulgent daily breakfast</li>
                <li>Complimentary Luxury Cabana on The Terrace</li>
                <li>Butler sevice and Hermis amenities</li>
                <li>Access Talise Spa, Wild Wadi Waterpark and more</li>
            </ul>
            <a href="#">View Details</a><br/>
            <button>BOOK NOW</button>
            </div>

        </SwiperSlide>
        <SwiperSlide>
        <div className="tenthfooter">
            <img src={img10} width="300" height="250"/>

            <h1>Stay and Dine</h1>
          <h4>Book an indulgent stay with exclusive dining included</h4>
            <ul>
                <li>Daily complimentary breakfast</li>
                <li>A choice of complimentary lunch for dinner</li>
                <li>Unlimited entery to Wild Wadi Waterpark</li>
            </ul>

            <a href="#">View Details</a> <br/>
            <button>BOOK NOW</button>
            </div>
        </SwiperSlide>
      </Swiper>
          </div>

        </div>
       <div className="main-footer">
            <div className="first-footer">
              <ul>
                <li><a href="#">About Sheraton Group</a></li>
                <li><a href="#">Hotel Development</a></li>
                <li><a href="#">residencies</a></li>
                <li> <a href="#">Press Cetere</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">FAQs</a></li>
            </ul>  
            </div>

            <div className="second-footer">
                      <ul>
                        <li><a href="#">PRIVACY POLICY</a></li>
                        <li><a href="#">TERMS AND CONDITIONS</a></li>
                        <li><a href="#">PHISING </a></li>
                        <li><a href="#">CONTACT US</a></li>
                        <li><a href="#">COOKIES NOTICE</a></li>
                        <li><a href="#">COVID-19 UPDATES</a></li>
                      </ul>
            </div>

            <div className="third-footer">
            <h1> Sign Up to Sheraton Newsletter</h1>

            <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
        
            <li><a href="#"><i class="fa-brands fa-telegram"></i></a></li>
            
            <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>

            <li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
            </div>

        </div>

    </div>
}


export default Dining;





