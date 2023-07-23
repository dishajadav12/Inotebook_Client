import React, { useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import NoteContext from "../Context/notes/noteContext";
import AddNote from "./AddNote";
import "./Style.css";
const Notes = (props) => {
  let navigate= useNavigate();
  const context = useContext(NoteContext);
  const {  getNotes} = context;
  useEffect(() => {
    if(!localStorage.getItem('token')){
      navigate("/login");
    }
    else{
  getNotes();
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
