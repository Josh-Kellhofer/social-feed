

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
                  <div className="grid-item"><h3>Post By:</h3></div>
                  <div className="grid-item">{name.listedName}</div>
                  {/* <div className="grid-item">3</div>
                  <div className="grid-item">4</div>
                  <div className="grid-item">5</div>
                  <div className="grid-item">6</div> */}
                  {/* <div className="grid-item">7</div>
                  <div className="grid-item">8</div>
                  <div className="grid-item">9</div> */}
                <div className="grid-item">
                  
                     {/* <div><p className="grid item">{name.listedName}</p></div>  */}
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


