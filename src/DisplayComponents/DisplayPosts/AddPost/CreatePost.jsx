import React, { useState } from 'react';


const CreatePost = (props) => {
  
  const [name, setFullName] = useState('');
  const [post, setPost] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    let newPost = {
      listedName: name,
      text: post
    };
    console.log(newPost)
    props.addNewPost(newPost)
  }

  return ( 
    <form onSubmit={handleSubmit}>
      <div className='form-group'>
      <label className='center'><h4>Name:</h4></label>
      <input type='text' value={name} onChange={(event) => setFullName(event.target.value)} />
      </div>
      <div className='form-group'>
      <label for ='textarea'><h4>Post</h4></label>
      <textarea class='form-control' id='textarea' rows="4" value={post} onChange={(event) => setPost(event.target.value)}></textarea>
      {/* <input type ='text' value={post} onChange={(event) => setPost(event.target.value)}  /> */}
      </div>
      <button type='submit'>Create Post</button>
    </form>
   );
}
 
export default CreatePost;