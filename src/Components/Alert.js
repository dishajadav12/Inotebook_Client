import React from "react";
import './Style.css'

const Alert = (props) => {
  const message =(word)=>{
    if (word==="danger"){
      word= "Error";
    }
  }
  return (
    <div className="alert-box">
   {props.alert && <div className={`alert alert-dismissible fade-in show alert-container`} role="alert">
        {message}{props.alert.msg}
</div>}
</div>
  );
};

export default Alert;