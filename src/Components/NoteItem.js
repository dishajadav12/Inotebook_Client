import React, { useContext } from "react";
import NoteContext from "../Context/notes/noteContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import "./Style.css";

const Noteitem = (props) => {
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  const { note, updateNotes } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3" style={{ width: "18rem" }}>
        <div className="card-body">
          <div className="del-edit-btn d-flex justify-content-around">
            <h5 className="card-title">{note.title}</h5>
            <div className="btn-ed d-flex justify-content-around ">
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
          <h6 className="card-subtitle mb-2 text-body-secondary">
            {note.date}
          </h6>
          <div className="card-text">
            {note.description}
            <p className="date mb-2 text-body-secondary">{note.tag}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
