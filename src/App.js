import React, { useState } from 'react';
import DisplayPosts from './DisplayComponents/DisplayPosts/DisplayPosts';
import CreatePost from './DisplayComponents/DisplayPosts/AddPost/CreatePost';

function App() {

  const [entryName, setName] = useState([{listedName: 'John', text: 'copied text from Add Entry'}])


  return (
    <div >
      <DisplayPosts parentEntries={entryName} />
      <CreatePost />

    </div>
  );
}

export default App;
