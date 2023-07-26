import React, { useContext } from "react";
import NoteContext from "../Context/notes/noteContext";
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import "./Style.css";

const NoteItem = (props) => {
  const context = useContext(NoteContext);
  const navigate = useNavigate();
  const { deleteNote, notes } = context;
  const { noteId } = useParams();

  // Find the note with the given ID
  const selectedNote = notes.find((note) => note._id === noteId);

  if (!selectedNote) {
    return (
      <div>
        <h2>Note not found</h2>
      </div>
    );
  }

  const { title, description, tag, _id, date } = selectedNote;

  // Function to format the date in DD\MM\YYYY format
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  // Function to format the time in hr:min format
  const formatTime = (dateString) => {
    const date = new Date(dateString);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  return (
    <div className="detail-container">
          <div>
            <h4 className="detail-title">{title}</h4>
          </div>
          <hr className="hr-title" />
          <div className="d-flex justify-content-start">
            <p className="card-subtitle date text-body-secondary">
              {formatDate(date)}
            </p>
            <p className="card-subtitle date text-body-secondary">
              {formatTime(date)}
            </p>
          </div>
          <div className="card-text my-3">{description}</div>
          <p className="date-tag mb-2 text-body-secondary">{tag}</p>
          <div className="btn-ed d-flex justify-content-start my-3 ">
            <button className="btn btn-editnote"   onClick={() => {
                  props.updateNotes(selectedNote); // Pass the selectedNote directly
                }}>   <FontAwesomeIcon
                icon={faEdit}
                className="edit mx-1"
              
              />Edit</button>
           <button className="btn btn-dark mx-1"  onClick={() => {
                  deleteNote(_id);
                  props.showAlert("Note deleted successfully", "success");
                  navigate('/');
                }}>
           <FontAwesomeIcon
                icon={faTrashAlt}
                className="delete "
              
              /> Delete
           </button>

            </div>
    </div>
  );
};

export default NoteItem;
