import React from 'react'

export default function Card({item}) {
  return (
    <div>
        <div>{item.id}, {item.title}, {item.body}</div>
    </div>
  )
}
