import React, { useContext } from "react";
import { Link } from "react-router-dom";
import NoteContext from "../../Context/notes/noteContext";
import "./LeftNavbar.css";

const LeftNavbar = () => {
  const { notes } = useContext(NoteContext);

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
      <h5>My Notes</h5>
      <div className="note-title-container my-3">
        {notes.map((note) => (
          <div key={note._id}>
            <Link to={`/notedetail/${note._id}`} className="title-link">{note.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftNavbar;
