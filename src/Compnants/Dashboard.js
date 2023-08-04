import React, { useState, useEffect } from "react";

import Card from "./Card.js"

// import postList from "./DummyData/postList.js"

export default function Dashboard() {
  const [data, setData] = useState([]);

 
  // useEffect(() => {
  //   fetch("https://dummyjson.com/posts/search?q=love")
  //     .then((res) => res.json())
  //     .then((res) => setData(res.posts));
  // }, []);

  //   const arr = data.map((item, index)=> (<Card item = {item}/>));
  // console.log(arr);
  // return (<div> {arr}   </div>);
}
