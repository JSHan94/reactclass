// import logo from './logo.svg';
// import './App.css';
import React, { useEffect, useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import { Homepage,Aboutpage,Signinpage } from 'pages';
import Navbar from 'components/Navigation/Navbar';
import Eventpage from 'pages/Eventpage';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/about" element={<Aboutpage/>}></Route>
        <Route path="/events" element={<Eventpage/>}></Route>
        <Route path="/signin" element={<Signinpage/>}></Route>
        {/* <Route path="users/*" element={<Users />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
