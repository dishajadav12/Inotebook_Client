import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
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
    <CSSTransition in={true} appear={true} timeout={2000} classNames="slide1">

    <div className="addnote-container">
      <AddNote showAlert={props.showAlert} />
    </div>
    </CSSTransition>
  );
};

export default Notes;
