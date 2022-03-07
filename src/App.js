import React, { useState } from 'react';


function App() {

  const [entryName, setName] = useState([{listedName: 'John', text: 'copied text from Add Entry'}])


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
        <tbody>
          {entryName.map((name)=> {
            return (
              <tr>
                <td>{name.listedName}</td>
                <td>{name.text}</td>
              </tr>
            )
          })}
        </tbody>
        </table>
    </div>
  );
}

export default App;
