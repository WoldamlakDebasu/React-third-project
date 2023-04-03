import React from 'react';
import './App.css';
import Navbar from "./components/Navbar.js";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Sheraton from './components/pages/Burji';
import Hotels from './components/pages/Hotels';
import Lifestyle from './components/pages/Lifestyle';
import Offers from './components/pages/Offers';
import Loyality from './components/pages/Loyality';
import Book from './components/pages/Book';
import Addis from './components/opages/Addis';
import Dubai from './components/opages/Dubai';
import Capri from './components/opages/Capri';
import Abudhabi from './components/opages/Abudhabi';
import Dining from './components/npages/Dining';
import Wellness from './components/npages/Wellness';
import Ocasion from './components/npages/Ocasion';
import Shop from './components/npages/Shop';
import Stories from './components/npages/Stories';
import Collect from './components/mpages/Collect';
import Exchange from './components/mpages/Exchange';
import Partners from './components/mpages/Partners';
import Memberoffer from './components/mpages/Memberoffer';
import Helpandsupport from './components/mpages/Helpandsupport';



import "swiper/css/bundle";
import "./styles.css";


function App() {
  return (
   <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Sheraton />}/>
      <Route path="/hotels" element={<Hotels />}/>
      <Route path="/lifestyle" element={<Lifestyle />}/>
      <Route path="/offers" element={<Offers />}/>
      <Route path="/loyality" element={<Loyality />}/>
      <Route path="/book" element={<Book />}/>
      <Route path="/addis" element={<Addis />}/>
      <Route path="/dubai" element={<Dubai />}/>
      <Route path="/abudhabi" element={<Abudhabi />}/>
      <Route path="/capri" element={<Capri />}/>
      <Route path="/dining" element={<Dining />}/>
      <Route path="/wellness" element={<Wellness/>}/>
      <Route path="/ocasion" element={<Ocasion />}/>
      <Route path="/shop" element={<Shop />}/>
      <Route path="/stories" element={<Stories />}/>
      <Route path="/collect" element={<Collect />}/>
      <Route path="/exchange" element={<Exchange />}/>
      <Route path="/memberoffer" element={<Memberoffer />}/>
      <Route path="/helpandsupport" element={<Helpandsupport />}/>

    </Routes>
   </Router>
  );
}


export default App;








