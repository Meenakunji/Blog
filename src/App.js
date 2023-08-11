// import logo from "./logo.svg";
import './App.css';

import "./index.css";
import React, {useState, useEffect} from "react";
import Navbar from "./Compnants/Navbar";
import Signup from "./Compnants/Signup";
import Login from './Compnants/Login';
import Dashboard from './Compnants/Dashboard';
import AddPost from './Compnants/AddPost';
import {TopPostComp} from './Compnants/toppost/TopPostComp';
import { RecommendedPost } from './Compnants/recommendedPost/RecommendedPost';

import { BrowserRouter as Router, Route, Routes, json } from 'react-router-dom';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    
    // fetch("https://dummyjson.com/posts/search?q=love")
    //   .then((res) => res.json())
    //   .then((res) => setData(res.posts));
    const postList = JSON.parse(window.localStorage.getItem('postList')) || {};
    const newData = Object.keys(postList).map((postKey)=>{
      return postList[postKey];
    })
    setData(newData);
  }, []);
  return (
    <Router>
     
     <Navbar setData={setData}/>

     <Routes>
          <Route  path="/" element={<Dashboard data={data} setData={setData}/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/addPost" element={<AddPost/>} />
          <Route path="/topPost" element={<TopPostComp data={data}/>}/>
          <Route path='/recommendedPosts' element = {<RecommendedPost data={data}/>}/>
          
      </Routes>


    </Router>




     
  );
}

export default App;