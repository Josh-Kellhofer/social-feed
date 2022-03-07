import React, { useState } from 'react';


function App() {

  const [Name, setName] = useState([{name: 'John', text: 'copied text from Add Entry'}])


  return (
    <div >
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Post</th>
            <th>Like</th>
            <th>Dislike</th>
            </tr>
        </thead>
        </table>
    </div>
  );
}

export default App;
