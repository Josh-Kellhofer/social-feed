import React, { useState } from 'react';
import "./CustomButton.css";

const CustomButton = (props) => {

  const [buttonClassLike, setButtonClassLike] = useState("inactive");
  const [buttonClassDislike, setButtonClassDislike] = useState("inactive");
  
  function handleClickLike(){
      if(buttonClassLike === "inactive"){
        setButtonClassLike("active");
        setButtonClassDislike("inactive")
      }
      else {
        setButtonClassLike("inactive");
      }
  }

  function handleClickDislike(){
    if(buttonClassDislike === "inactive"){
      setButtonClassDislike("activedis");
      setButtonClassLike("inactive")
    }
    else {
      setButtonClassDislike("inactive");
    }
}

    return (
      <div>
        <button className={buttonClassLike} onClick={handleClickLike}>Like!</button>
        <button className={buttonClassDislike} onClick={handleClickDislike}>Dislike!</button>
      </div>
    )
   
};
export default CustomButton;
