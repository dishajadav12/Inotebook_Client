import React from "react";
import './Style.css'

const Alert = (props) => {
  const message =(word)=>{
    if (word==="danger"){
      word= "Error";
    }
  }
  return (
    <div style ={{height:'50px'}}>
   {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        {message(props.alert.type)}:{props.alert.msg}
</div>}
</div>
  );
};

export default Alert;