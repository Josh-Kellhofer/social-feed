import React, { useState } from 'react';
import DisplayPosts from './DisplayComponents/DisplayPosts/DisplayPosts';
import CreatePost from './DisplayComponents/DisplayPosts/AddPost/CreatePost';
import './App.css';
// import CustomButton from './DisplayComponents/CustomButton/CustomButton';
// import CustomButton2 from './DisplayComponents/CustomButton/CustomButton';
import {CustomButton, CustomButton2} from './DisplayComponents/CustomButton/CustomButton';



function App() {

  
  const [entryName, setName] = useState([{listedName: '', text: ''}])

  function addNewPost(entry){
    let tempPost = [entry, ...entryName];
    setName(tempPost);
  }

  return (
    <div>
      <div className='border-box1'>
        <div className='center'>
        <CreatePost addNewPost={addNewPost} />
      </div>
      </div>
      <div className='border-box2'>
        <DisplayPosts parentEntries={entryName} />
        </div>
        <CustomButton message="Like!"/>
        <CustomButton2 message="Dislike!"/>
     </div>
      
      );
}


  



export default App;
