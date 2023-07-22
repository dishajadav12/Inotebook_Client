import React, { useContext, useEffect, useRef, useState } from "react";
import NoteContext from "../Context/notes/noteContext";
import { useNavigate } from "react-router-dom";
import NoteItem from "./NoteItem";
import './Style.css'

const NoteDetail = (props) => {
    let navigate= useNavigate();
    const context = useContext(NoteContext);
    const { notes, getNotes, editNote } = context;
    useEffect(() => {
      if(!localStorage.getItem('token')){
        navigate("/login");
      }
      else{
    getNotes();
    }
      // eslint-disable-next-line
    }, []);

    const updateNotes = (currentNote) => {
        ref.current.click();
        setNotes({
          id: currentNote._id,
          etitle: currentNote.title,
          edescription: currentNote.description,
          etag: currentNote.tag,
        });
      };
      const ref = useRef(null);
      const refClose = useRef(null);
    
      const [note, setNotes] = useState({
        id: "",
        etitle: "",
        edescription: "",
        etag: "",
      });
    
    
    
    
      const handleSubmit = (e) => {
        editNote(note.id, note.etitle, note.edescription, note.etag);
        refClose.current.click();
        props.showAlert("Note updated successfully", "success");
      };
    
      const onChange = (e) => {
        setNotes({ ...note, [e.target.name]: e.target.value });
      };
  return (
    <div className="row" >
         <div className="modal-container">
        <button
          ref={ref}
          type="button"
          className="btn btn-primary d-none"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Launch demo modal
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Edit Note
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                {/* FOrm */}
                <form className="my-3">
                  <div className="form-group my-3">
                    <label htmlFor="etitle">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      id="etitle"
                      name="etitle"
                      value={note.etitle}
                      placeholder="Enter title"
                      onChange={onChange}
                      minLength={5}
                      required
                    />
                  </div>
                  <div className="form-group my-3">
                    <label htmlFor="edescription">Description</label>
                    <input
                      type="text"
                      className="form-control"
                      id="edescription"
                      name="edescription"
                      value={note.edescription}
                      placeholder="Write description"
                      onChange={onChange}
                      minLength={5}
                      required
                    />
                  </div>
                  <div className="form-group my-3">
                    <label htmlFor="etag">Tag</label>
                    <input
                      type="text"
                      className="form-control"
                      id="etag"
                      name="etag"
                      value={note.etag}
                      placeholder="ie. #general"
                      onChange={onChange}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  ref={refClose}
                >
                  Close
                </button>
                <button
                  disabled={
                    note.etitle.length < 5 || note.edescription.length < 5
                  }
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Update note
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="container">
          {notes.length === 0 && "No notes to display"}
        </div>
        {notes.map((note) => {
          return (
            <NoteItem
              key={note._id}
              note={note}
              showAlert={props.showAlert}
              updateNotes={updateNotes}
            />
          );
        })}
        </div>

  )
}

export default NoteDetail