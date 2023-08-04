import React, { useState } from 'react'

import AddPost from './Addpost'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

//const [showAddPost, setShowAddPost] = useState(false);

// const handleAddPostClick = () => {
//   setShowAddPost(!showAddPost);
// };

export default function Profile() {
  return (
    
      
    <div>
    {/* <button onClick={handleAddPostClick}>{showAddPost ? 'Cancel' : 'Add Post'}</button> */}
      <button>Add Post</button>
      <button>My Post</button>
      <button>Other's Profile</button>
    </div>
 
  )
}
