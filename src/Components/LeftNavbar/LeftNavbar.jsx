import React, { useContext } from "react";
import NoteContext from "../../Context/notes/noteContext";
import { Link } from "react-router-dom";
import "./LeftNavbar.css";

const LeftNavbar = () => {
  const context = useContext(NoteContext);
  const { notes } = context;
  
  if (notes.length === 0) {
    return (
      <div className="main-container">
        <h5 className="title-container">My Notes</h5>
        <div className="container">No notes to display</div>
      </div>
    );
  }

  return (
    <div className="main-container">
      <h5 className="title-container">My Notes</h5>
      <div className="note-title-container">
        {notes.map((note) => {
          return (
            <div
              className="title" key={note._id}  
            >
            <Link to={`/notedetail`} >{note.title}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LeftNavbar;
