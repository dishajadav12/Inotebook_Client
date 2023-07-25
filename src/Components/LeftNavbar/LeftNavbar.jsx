import React, { useContext } from "react";
import { Link } from "react-router-dom";
import NoteContext from "../../Context/notes/noteContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./LeftNavbar.css";

const LeftNavbar = () => {
  const { notes } = useContext(NoteContext);

  if (notes.length === 0) {
    return (
      <div className="main-container">
        <div className="title-container">My Notes</div>
        <div className="container">No notes to display</div>
      </div>
    );
  }

  return (
    <div className="main-container">
           <Link to="/" className="add-note-option"><FontAwesomeIcon icon={faPlus} className="plus-symbol" />Add note</Link>
      <div className="note-title-container my-3">
        {notes.map((note) => (
          <div key={note._id}>
            <Link to={`/notedetail/${note._id}`} className="title-link">{note.title}</Link>
            <hr />
          </div>
        ))}
      </div> 
    </div>
  );
};

export default LeftNavbar;
