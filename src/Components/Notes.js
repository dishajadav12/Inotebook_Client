import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NoteContext from "../Context/notes/noteContext";
import AddNote from "./AddNote";
import "./Style.css";
const Notes = (props) => {
  let navigate = useNavigate();
  const context = useContext(NoteContext);
  const { getNotes } = context;
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/about");
    } else {
      getNotes();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="addnote-container">
      <AddNote showAlert={props.showAlert} />
    </div>
  );
};

export default Notes;
