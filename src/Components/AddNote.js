import React, { useContext, useState } from "react";
import NoteContext from "../Context/notes/noteContext";
import './Style.css'


const AddNote = () => {
  const context = useContext(NoteContext);
  const {addNote } = context;
  
  const [note,setNotes] = useState({title: "", description: "", tag: " "})

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(note.title, note.description,note.tag);
    setNotes({title: "", description: "", tag: ""});
  };
  const onChange = (e) => {
    setNotes({...note, [e.target.name]: e.target.value});
  };
  return (
    <div>
      <h1>Add a Note</h1> 
      <form className="my-3">
        <div className="form-group my-3">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="Enter title"
            onChange={onChange}
            minLength={5}
            required
            value={note.title}
          />
        </div>
        <div className="form-group my-3">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            placeholder="Write description"
            onChange={onChange}
            minLength={5}
            required
            value={note.description}
          />
        </div>
        <div className="form-group my-3">
          <label htmlFor="tag">Tags</label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            placeholder="ie. #general"
            onChange={onChange}
            value={note.tag}
          />
        </div>
        <button disabled={note.title.length<5 || note.description.length<5 } type="submit" className="btn btn-primary" onClick={handleSubmit}>
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
