import React from 'react'

export default function Card({item}) {
  return (
    <div>
        <div>{item.id}, {item.title}, {item.body}</div>
 {/* <div className="card" style="width: 18rem;">
     {/* <img src="..." className="card-img-top" alt="..."/> *}
  <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button className="btn btn-primary">Go somewhere</button>
  </div>
</div> */}
    </div>
  )
}
