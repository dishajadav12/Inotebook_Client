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
    <div className="col-md-3">
      <div className="card mx-3 my-3" style={{ width: "100%" }}>
        <div className="card-body">
          <div className="del-edit-btn d-flex justify-content-between">
            <div className="card-title">{title}</div>
            <div className="btn-ed d-flex justify-content-between ">
              <FontAwesomeIcon
                icon={faEdit}
                className="edit mx-2"
                onClick={() => {
                  props.updateNotes(selectedNote); // Pass the selectedNote directly
                }}
              />
              <FontAwesomeIcon
                icon={faTrashAlt}
                className="delete "
                onClick={() => {
                  deleteNote(_id);
                  props.showAlert("Note deleted successfully", "success");
                  navigate('/');
                }}
              />
            </div>
          </div>
          <hr className="hr-title" />
          <div className="d-flex justify-content-between">
            <p className="card-subtitle date text-body-secondary">
              {formatDate(date)}
            </p>
            <p className="card-subtitle date text-body-secondary">
              {formatTime(date)}
            </p>
          </div>
          <div className="card-text">{description}</div>
          <p className="date-tag mb-2 text-body-secondary">{tag}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
