// import React from 'react'
// import Card from './Card'
// const AddPost = () => {
//   return (
//     <div>
//         <Card item = {{
//           title:"title", 
//           body: 'body',

        
//         }
          
//           }/>
//       need to add post 
//     </div>
//   )
// }

/* eslint-disable jsx-a11y/role-supports-aria-props */
import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom'
import "./addPost.css";
const AddPost = () => {
    const [formData, setFormData] = useState({ title: '', body: '', imageLink:'' })
    const navigate = useNavigate();
    const handleChange = (e) => {
        setFormData(p => {
          return { ...p, [e.target.name]: e.target.value }
        })
      }
    const handleCreate = ()=>{
        const postList = window.localStorage.getItem('postList');
        const newPostList = {...(JSON.parse(postList) ||{}), [uuidv4()]: formData}
        window.localStorage.setItem('postList', JSON.stringify(newPostList));
        navigate('/');
    }
  return (
    <div className="addPost">
      <div className="addPost__container">
        <h2 className='addPost_create'>Add a New Post</h2>
        <div className='addPost__label'>Title</div>
        <input type="text"  name='title' value={formData.title} onChange={handleChange} />
        <div className='addPost__label'>Body</div>
        <textarea type='textarea' row = "3" className='inputTextArea'  name='body' value={formData.body} onChange={handleChange} />
        <div className='addPost__label'>Image Link</div>
        <input type="text"  name='imageLink' value={formData.imageLink} onChange={handleChange} />
        <button onClick={handleCreate}>Add Post</button>

      </div>
    </div>
  )
}

export default AddPost;
