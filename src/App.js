// import logo from "./logo.svg";
import './App.css';

import "./index.css";
import React from "react";
import Navbar from "./Compnants/Navbar";
import Signup from "./Compnants/Signup";
import Login from './Compnants/Login';
import Dashboard from './Compnants/Dashboard';
import DummyDataComponent from './Compnants/Dummy';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Profile from './Compnants/Profile/Profile';

function App() {
  return (
    // router starts here 
    <Router>
     
     <Navbar/>
     <Profile/>
     


     <Routes>
          <Route  path="/" element={<Dashboard/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
      </Routes>


    </Router>




     
  );
}

export default App;
