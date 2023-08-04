// components/Dashboard.js

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Card from "./Card.js"

export default function Dashboard({data}) {
  const isLoggedIn = window.localStorage.getItem('login_username_email'); 

  const navigate = useNavigate();
  const handleAddPost = () =>{
    navigate('/addPost');
  }

  

    const arr = data.map((item, index)=> (<Card item = {item}/>));
  console.log("arr", arr, "data", data);
  return (<div>
    {isLoggedIn ? <div><button onClick={handleAddPost}>Add Post</button> </div>: null}
    <div>post list</div>
    <div>{arr}</div>
  </div>);
}