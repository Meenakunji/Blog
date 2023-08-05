import React from 'react'
import "./card.css";

export default function Card({item}) {
  return (

    
    <div className = "card">
        <div className="card-header">

        <p>Title: {item.title}</p>
        <p>Topic: {item.topic}</p>
        </div>
        <div className="card-content">
        <p>Description: {item.body}</p>
        <p>Tags: {item.tags} </p>
        </div>
        <div className="card-footer">
        <p>Author: {item.author}</p>
        <p>like: {item.likes}</p>
        </div>
        <div className="card-footer">
        <p>Date: {item.date}</p>
        <p>Reading time: {item.reading_time}</p>
        </div>
    </div>
   
  )
}