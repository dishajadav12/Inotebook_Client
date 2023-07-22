import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import AddNote from "./AddNote";
import "./Style.css";
const Notes = (props) => {
  let navigate= useNavigate();
  useEffect(() => {
    if(!localStorage.getItem('token')){
      navigate("/login");
    }
    else{
     navigate("/");
    }
    // eslint-disable-next-line
  }, []);


  return (
    <>
      <AddNote showAlert={props.showAlert} />
    </>
  );
};

export default Notes;
