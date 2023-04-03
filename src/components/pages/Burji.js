import React, {useRef, useState } from "react";
import backvid from "./Videos/newhotel.mp4";
import "./Burji.css";
import img1 from "./images/firstview.jpg";
import img2 from "./images/secondview.jpg";
import img3 from "./images/thirdview.jpg";
import img4 from "./images/fourthview.jpg";
import img5 from "./images/fifthview.jpg";
import img6 from "./images/sixthview.jpg";
import img7 from "./images/seventhview.jpg";
import img8 from "./images/eigthview.jpg";
import img9 from "./images/ninthview.jpg";
import img10 from "./images/tenthview.jpg";
import img11 from "./images/Hotelfood.jpg";
import img12 from "./images/Hotelservices.jpg";
import img13 from "./images/Servicetwo.jpg";
import img14 from "./images/user1.jpg";
import img15 from "./images/user2.jpg";
import img16 from "./images/user3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";



const Burji=()=> {
    return (
        <div className="burji">

               <div className="header">

               <video src={backvid} autoPlay loop muted/>

               <div className="textpart">
               <div className="text1">
                <h3>ADDIS ABABA</h3>
                <h1>Sheraton Addis Hotel</h1>
                <h2>A global Icon of African Luxury</h2>
               </div>

             </div>
            </div>


            <div className="body">
           <div className="bodyheader">
            <h2>4.7/5 Excellent</h2>
            <h2>4.7/5 Google</h2>
            <h2>4.5/5 Trip Advisor</h2>
            <h2>9.1/10 Booking.com</h2>
            <h2>9.1/10 Hotels.com</h2>
            <h2>4.7/5 Expedia</h2>
           </div>

         <div className="bodysec">
           <h1>SHERATON ADDIS OFFERS</h1>
           <h1>For our valued guests</h1>
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
 
 
 
         <div className="services">
            <div className="serviceone">
                <h3>WHERE MOMENTS ARE MADE</h3>
                <h1>An Unforgetable Experience</h1>
                <img src={img11} width="100%" height="600"/>
            </div>

            <div className="servicetwo">
                <h3>SUITS</h3>
                <h1>Sumptous Surroundings, Unforgetable Stays</h1>
                <img src={img12} width="100%" height="600"/>
            </div>

            <div className="servicethree">
                <h3>WELLNESS</h3>
                <h1>Your Quest for Wellness starts here</h1>
                <img src={img13} width="100%" height="600"/>
            </div>

         </div>

          <div className="testimonial-text">
          <h1>Meet our testimonials for our services:</h1>
          </div>

         <div className="testimonial-section">
         
          <div className="testimony1">
            <img src={img14} width="200px" height="200px"/>

            <div className="testtext1">
                <h2>David Johnson</h2>
                <h2>Our Customer</h2>
                <p>This hotel is the best hotel i have ever seen in mylife and 
                    i enjoyed my vacation with please with the most balanced 
                    price. the food service, rooms and the pools are amaizing and 
                    thanks sheraton addis hotel for your services.
                </p>
          </div>  
         </div>

          <div className="testimony2">
            <img src={img15} width="200px" height="200px"/>

            <div className="testtext2">
                <h2>Erica Smith</h2>
                <h2>Our Customer</h2>
                <p>This hotel is the best hotel i have ever seen in mylife and 
                    i enjoyed my vacation with please with the most balanced 
                    price. the food service, rooms and the pools are amaizing and 
                    thanks sheraton addis hotel for your services.
                </p>
          </div>  
         </div>

          <div className="testimony3">
            <img src={img16} width="200px" height="200px"/>

            <div className="testtext3">
                <h2>Mary Edwardo</h2>
                <h2>Our Customer</h2>
                <p>This hotel is the best hotel i have ever seen in mylife and 
                    i enjoyed my vacation with please with the most balanced 
                    price. the food service, rooms and the pools are amaizing and 
                    thanks sheraton addis hotel for your services.
                </p>
          </div>  
         </div>

         </div>



         
         <div className="login-section">
            <h1>Register Below to Get Newsletter:</h1>

               <form>
                <label>Your Firstname:</label>
                <input type="text" placeholder="Enter your firstname"/>
                <label>Your Lastname:</label>
                <input type="text" placeholder="Enter your Lastname"/>
                <label>Your Email:</label>
                <input type="Email" placeholder="Enter your Email"/>
                <label>Password:</label>  
                <input type="password" placehloder="Enter password"/>
                </form> 
               <button className="btn">Register</button>
         </div>




               <div className="contact-text">
               <h1>CONTACT</h1>
            <h2>Get in touch</h2>
               </div>

         <div className="contactfoot">
                  <div>
               <h1>Address</h1>
               Arat Kilo, Arada Sub-City
                  </div>
                  <div>
                    <h1>Email</h1>
                  sheratonaddis@gmail.com
                  </div>

                  <div>
                    <h1>telephone</h1>
                    +251-111-546-756
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
            <h6 className="heading">@Copyright Sheraton Addis International LLC 2023</h6>
        </div>
        </div>
    )
}


export default Burji;








