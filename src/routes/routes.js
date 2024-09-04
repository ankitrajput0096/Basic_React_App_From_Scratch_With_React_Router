//This is the starting point of the application

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../component/app.component';
import About from '../AboutUs/about';
import "../css/main.css";

export default () => {
 return (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>    
 )
}