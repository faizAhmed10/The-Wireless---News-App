import React from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About';
import {Routes, Route } from "react-router-dom";

const App = () => {
    
    return <div>
    
      <Navbar/>
      <Routes>
        <Route path="/" element={<News country="in" category="general" heading="Top"/>}/>
        <Route path='/business' element={<News country="in"category="business" heading="Business"/>}/>
        <Route path='/sports' element={<News country="in"category="sports" heading="Sports"/>}/>
        <Route path='/entertainment' element={<News country="in"category="entertainment" heading="Entertainment"/>}/>
        <Route path='/science' element={<News country="in"category="science" 
        heading="Science"/>}/>
        <Route path='/health' element={<News country="in"category="health"
        heading="Health"/>}/>
        <Route path='/technology' element={<News country="in"category="technology" heading="Technology"/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>;

}
export default App;
