import React, { useContext } from "react";
import NoteContext from "../Context/notes/noteContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import "./Style.css";

const Noteitem = (props) => {
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  const { note, updateNotes } = props;

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
            <div className="card-title">{note.title}</div>
            <div className="btn-ed d-flex justify-content-between ">
              <FontAwesomeIcon
                icon={faPenToSquare}
                className="edit mx-2"
                onClick={() => {
                  updateNotes(note);
                }}
              />
              <FontAwesomeIcon
                icon={faTrashCan}
                className="delete "
                onClick={() => {
                  deleteNote(note._id);
                  props.showAlert("Note deleted successfully", "success");
                }}
              />
            </div>
          </div>
          <hr className="hr-title" />
          <div className="d-flex justify-content-between">

          <p className="card-subtitle date text-body-secondary">
            {formatDate(note.date)}
          </p>
          <p className="card-subtitle date text-body-secondary">
              {formatTime(note.date)}
            </p>
            </div>

          <div className="card-text">
            {note.description}
          </div>
            <p className="date-tag mb-2 text-body-secondary">{note.tag}</p>
           
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
