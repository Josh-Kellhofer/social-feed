import React, { useState } from 'react';
import DisplayPosts from './DisplayComponents/DisplayPosts/DisplayPosts';
import CreatePost from './DisplayComponents/DisplayPosts/AddPost/CreatePost';

function App() {

  const [entryName, setName] = useState([{listedName: 'John', text: 'copied text from Add Entry'}, {listedName: 'Mike'}])

  function addNewPost(entry){
    let tempPost = [entry, ...entryName];
    setName(tempPost);
  }

  return (
    <div >
      <DisplayPosts parentEntries={entryName} />
      <CreatePost addNewPost={addNewPost} />

    </div>
  );
}

export default App;
