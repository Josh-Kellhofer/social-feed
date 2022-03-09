

const DisplayPosts = (props) => {
  return ( 
    <group>
        <thead>
         
        </thead>
        <tbody>
          {props.parentEntries.map((name)=> {
            return (
              <tr>
                <div className='form-group'>
                  <label>Post</label>
                    <td className='DisplayContainer'>
                      <div><p className='p'>{name.listedName}</p></div> 
                <div className='form-group'>
                  <div>{name.text}</div>
                      </div>
                    </td>
                    
                   </div>
              </tr>
            )
          })}
        </tbody>
        </group>
   );
}
                
                  
 
export default DisplayPosts;


