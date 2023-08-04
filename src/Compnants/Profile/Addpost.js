import React, { useState } from "react";

import "./Addpost.css";

const AddPost = () => {
  // State variables to store form data
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [featuredImage, setFeaturedImage] = useState("");
  const [text, setText] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [author, setAuthor] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can implement the logic to save the post data to your backend or perform any desired actions.
    // For this example, we will just log the data to the console.
    console.log({
      title,
      topic,
      featuredImage,
      text,
      dateTime,
      author,
    });
    // Clear form fields after submission
    setTitle("");
    setTopic("");
    setFeaturedImage("");
    setText("");
    setDateTime("");
    setAuthor("");
  };

  return (
    <div className="add-post-container">
      <h2>Add New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Topic:</label>
          <input type="text" value={topic} onChange={(e) => setTopic(e.target.value)} />
        </div>
        <div>
          <label>Featured Image:</label>
          <input type="text" value={featuredImage} onChange={(e) => setFeaturedImage(e.target.value)} />
        </div>
        <div className="textbox">
          <label>Text:</label>
          <textarea value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div>
          <label>Date-time when it was published:</label>
          <input type="datetime-local" value={dateTime} onChange={(e) => setDateTime(e.target.value)} />
        </div>
        <div>
          <label>Author:</label>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>

      
    </div>
  );
};

export default AddPost;
