

const DisplayPosts = (props) => {
  return ( 
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
          {props.parentEntries.map((name)=> {
            return (
              <tr>
                <td>{name.listedName}</td>
                <td>{name.text}</td>
              </tr>
            )
          })}
        </tbody>
        </table>
   );
}
 
export default DisplayPosts;


