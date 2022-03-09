import React, { useState } from 'react';
import DisplayPosts from './DisplayComponents/DisplayPosts/DisplayPosts';
import CreatePost from './DisplayComponents/DisplayPosts/AddPost/CreatePost';
import './App.css';
import {CustomButton, CustomButton2} from './DisplayComponents/CustomButton/CustomButton';

function App() {

  
  const [entryName, setName] = useState([{listedName: '', text: ''}])

  function addNewPost(entry){
    let tempPost = [entry, ...entryName];
    setName(tempPost);
  }

  return (
    // <nav className="nav">
    //   <div>Social Feed</div>
    // </nav>
    <div>
      <div className='border-box1'>
        <div className='center'>
        <CreatePost addNewPost={addNewPost} />
      </div>
      </div>
      <div className='border-box2'>
        <DisplayPosts parentEntries={entryName} />
        {/* <div<CustomButton message="Like!"/>
        <CustomButton2 message="Dislike!"/></div> */}
        </div>
        </div>
        
     
      
      );
}


  



export default App;
