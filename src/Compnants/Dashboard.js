// components/Dashboard.js

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Card from "./Card.js"

import "./card.css";
import "./styles/dashboard.css"

export default function Dashboard({data}) {
  const isLoggedIn = window.localStorage.getItem('login_username_email'); 

  const navigate = useNavigate();
  const handleAddPost = () =>{
    navigate('/addPost');
  }
  const handleTopPostClick = () => {
    navigate('/topPost');
  }
  const handleRecommendedClick = () => {
    navigate('/recommendedPosts');
  }

  
   
    const arr = data.map((item, index)=> (<Card  item = {item}/>));
    
  //console.log("arr", arr, "data", data);
  return (<div>
    <div className="headerContainer">
    {isLoggedIn ? <div><button onClick={handleAddPost}>Add Post</button> </div>: null}
    <div><button onClick={handleTopPostClick}>Top Post</button></div>
    <div><button onClick={handleRecommendedClick}>Recommended post</button></div>
    <div>post list</div>
    </div>
 
    <div className = "cardbox">{arr}</div>
  </div>);
}