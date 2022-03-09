import './DisplayPost.css'
import CustomButton from '../CustomButton/CustomButton'


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
                  <div className="grid-item"><h3>Post By:<br></br><br></br> {name.listedName}</h3></div>
                  <div className="grid-item">{name.text}</div>
                  <div ><CustomButton/>
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


