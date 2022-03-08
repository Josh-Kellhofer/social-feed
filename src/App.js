import React, { useState } from 'react';
import DisplayPosts from './DisplayComponents/DisplayPosts/DisplayPosts';

function App() {

  const [entryName, setName] = useState([{listedName: 'John', text: 'copied text from Add Entry'}])


  return (
    <div >
      <DisplayPosts parentEntries={entryName} />

    </div>
  );
}

export default App;
