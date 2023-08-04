import React from 'react'
import "./card.css";

export default function Card({item}) {
  return (
    <div className = "card">
        <div className="card-header">

        <p>{item.id},  {item.title}</p>
        </div>
        <div class="card-content">
        <p> {item.body}</p>
        </div>
        <div class="card-footer">
        <p>{item.author}</p>
        <p>{item.likes}</p>
        </div>
 </div>
  )
}