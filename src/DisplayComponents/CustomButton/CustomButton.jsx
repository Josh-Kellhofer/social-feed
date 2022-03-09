import React, { useState } from 'react';
import "./CustomButton.css";

const CustomButton = (props) => {

  const [buttonClass, setButtonClass] = useState("inactive");
  
  function handleClick(){
      if(buttonClass === "inactive"){
        setButtonClass("active");
      }
      else {
        setButtonClass("inactive");
      }
  }
    return (
      <div>
        <button className={buttonClass} onClick={handleClick}>{props.message}</button>
      </div>
    )
   
};

// export default CustomButton;

const CustomButton2 = (props) => {

  const [buttonClass, setButtonClass] = useState("inactive");
  
  function handleClick(){
      if(buttonClass === "inactive"){
        setButtonClass("activedis");
      }
      else {
        setButtonClass("inactive");
      }
  }
    return (
      <div>
        <button className={buttonClass} onClick={handleClick}>{props.message}</button>
      </div>
    )
}


export {
  CustomButton,
  CustomButton2,
}