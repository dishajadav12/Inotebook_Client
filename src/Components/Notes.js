import React, { useContext, useEffect, useRef, useState } from "react";
import NoteContext from "../Context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

const Notes = () => {
  const context = useContext(NoteContext);
  const { notes, getNotes } = context;
  
  const [note,setNotes] = useState({etitle: "", edescription: "", etag: ""})
  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);
  const ref = useRef(null);

  const updateNotes = (currentNote) => {
    ref.current.click();
    setNotes({etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  const onChange = (e) => {
    setNotes({...note, [e.target.name]: e.target.value});
  };

  return (
    <>
      <AddNote />
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
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit} >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h2>My Notes</h2>
        {notes.map((note) => {
          return (
            <NoteItem key={note._id} note={note} updateNotes={updateNotes} />
          );
        })}
      </div>
    </>
  );
};

export default Notes;
