

const DisplayPosts = (props) => {
  return ( 
    <group>
        <thead>
         
        </thead>
        <tbody>
          {props.parentEntries.map((name)=> {
            return (
              <tr>
                <div className="grid-container">
                <div className="grid-item">
                  <label>Post</label>
                    {/* <td className='DisplayContainer'></td> */}

                      <div><p className="grid item">{name.listedName}</p></div> 
                <div className='form-group'>
                  <div>{name.text}</div>
                  
                  </div>
                      </div>
                    
                    
                   </div>
              </tr>
            )
          })}
        </tbody>
        </group>
   );
}
                
                  
 
export default DisplayPosts;


