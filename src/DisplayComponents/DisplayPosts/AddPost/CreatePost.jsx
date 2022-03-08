import React, { useState } from 'react';


const CreatePost = (props) => {
  
  const [name, setFullName] = useState('');
  const [post, setPost] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    let newPost = {
      name: name,
      post: post
    };
    console.log(newPost)
    props.addNewPost(newPost)
  }

  return ( 
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input type='text' value={name} onChange={(event) => setFullName(event.target.value)} />
      <label>Post</label>
      <input type ='post' value={post} onChange={(event) => setPost(event.target.value)}  />
      <button type='submit'>Create Post</button>
    </form>
   );
}
 
export default CreatePost;