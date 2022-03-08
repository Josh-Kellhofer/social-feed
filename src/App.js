import React, { useState } from 'react';
import DisplayPosts from './DisplayComponents/DisplayPosts/DisplayPosts';
import CreatePost from './DisplayComponents/DisplayPosts/AddPost/CreatePost';
import './App.css';

function App() {

  const [entryName, setName] = useState([{listedName: 'John', text: 'copied text from Add Entry'}, {listedName: 'Mike', text: 'More text'}])

  function addNewPost(entry){
    let tempPost = [entry, ...entryName];
    setName(tempPost);
  }

  return (
    <div>
      <div className='border-box'>
        <div className='center'>
        <CreatePost addNewPost={addNewPost} />
      </div>
      </div>
      <div className='border-box'>
        <DisplayPosts parentEntries={entryName} />
      </div>

    </div>
  );
}

export default App;
