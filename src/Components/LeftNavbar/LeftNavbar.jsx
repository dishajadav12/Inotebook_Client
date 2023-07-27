import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Spinner from '../Spinner/Spinner'
import NoteContext from "../../Context/notes/noteContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./LeftNavbar.css";

const LeftNavbar = () => {
  const { notes } = useContext(NoteContext);
  const [isLoading, setIsLoading] = useState(false); // Change the initial state to false

  useEffect(() => {
    setIsLoading(true); // Show the loading spinner when the component mounts

    // Simulate an API call to fetch notes (Replace this with your actual fetch call)
    setTimeout(() => {
      setIsLoading(false); // Once the notes are fetched, set isLoading to false
    }, 300); // Example: Wait for 2 seconds to simulate API call

  }, []);

  if (isLoading) {
    return (
      <div className="main-container">
        <div className="loading-spinner"><Spinner/></div>
      </div>
    );
  }

  if (!notes || notes.length === 0) { // Check if notes is not null/undefined
    return (
      <div className="main-container">
        <Link to="/" className="add-note-option">
          <FontAwesomeIcon icon={faPlus} className="plus-symbol" />
          Add note
        </Link>
        <div className="container my-3 no-note-alert">No notes yet <br /> Unleash Your Thoughts...</div>
      </div>
    );
  }

  return (
    <div className="main-container">
      <Link to="/" className="add-note-option">
        <FontAwesomeIcon icon={faPlus} className="plus-symbol" />
        Add note
      </Link>
      <div className="note-title-container my-3">
        {notes.map((note) => (
          <div key={note._id}>
            <Link to={`/notedetail/${note._id}`} className="title-link" activeclass="active">
              {note.title}
            </Link>
            <hr className="hr-leftnav" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftNavbar;
