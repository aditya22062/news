
import './App.css';
import Navbar from './component/Navbar.js';
import News from './component/News';
import NewsItem from './component/NewsItem';
import React, { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
;



const App=()=> {
  
  return (

    <BrowserRouter>
    
      <Navbar/>
      <Routes>
        <Route path="/" element={<News   key="general" pageSize={9} country="in" category="general"/>}/>{/*yeh jo hum pass kr rhe hai as page size country category yeh hum aquire bhi kr rhe hai news component mein toh yeh props hai jo hum bhej rhe */}
        <Route path="/sports" element={<News   key="sports" pageSize={9} country='in' category='sports'/>}/>
        < Route path="/general" element={<News   key="general" pageSize={9} country='in' category='general'/>}/>
        < Route path="/business"element={<News   key="business" pageSize={9} country='in' category='business'/>}/>
        < Route path="/technology"element={<News   key="technology" pageSize={9} country='in' category='technology'/>}/>
        < Route path="/entertainment"element={<News   key="entertainment" pageSize={9} country='in' category='entertainment'/>}/>
        < Route path="/science"element={<News   key="science" pageSize={9} country='in' category='science'/>}/>
        < Route path="/health"element={<News   key="health" pageSize={9} country='in' category='health'/>}/>
      </Routes>

    </BrowserRouter>
    
  );
}

export default App;
