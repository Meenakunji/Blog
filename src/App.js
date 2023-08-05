
// import logo from "./logo.svg";
import './App.css';

import "./index.css";
import React, {useState, useEffect} from "react";
import Navbar from "./Compnants/Navbar";
import Signup from "./Compnants/Signup";
import Login from './Compnants/Login';
import Dashboard from './Compnants/Dashboard';
import AddPost from './Compnants/AddPost';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [data, setData] = useState([]);

  const imagearray = ["njksk", ]

  useEffect(() => {
    fetch("https://dummyjson.com/posts/search?q=love")
      .then((res) => res.json())
      .then((res) => {
            
           
            const newArray = (res.posts || []).map((item, index)=>{
              return {...item, 
                       likes: parseInt(Math.random()*100),
                       reading_time: parseInt(Math.random()*50)+"min",
                        date : parseInt(Math.random()*10)+ "Aug, 20"+parseInt(Math.random()*20),
                       author : "Author"+index+1,
                       imagelink: imagearray[index],
                       
              } 
            })
            //console.log(JSON.stringify(newArray), JSON.parse(JSON.stringify(newArray)));

            setData(newArray);

      }
    );

  }, []);
  return (
    <Router>
     
     <Navbar setData={setData}/>

     <Routes>
          <Route  path="/" element={<Dashboard data={data} setData={setData}/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/addPost" element={<AddPost/>} />
          
      </Routes>


    </Router>




     
  );
}

export default App;