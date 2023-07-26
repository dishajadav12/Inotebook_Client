import React, { useContext, useState } from "react";
import NoteContext from "../Context/notes/noteContext";
import './Style.css'


const AddNote = (props) => {
  const context = useContext(NoteContext);
  const {addNote } = context;
  
  const [note,setNotes] = useState({title: "", description: "", tag: " "})

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(note.title, note.description,note.tag);
    setNotes({title: "", description: "", tag: ""});
    props.showAlert("Note added!", "success");

  };
  const onChange = (e) => {
    setNotes({...note, [e.target.name]: e.target.value});
  };
  return (
    <div>
      <form className="my-3">
        <div className="form-group my-3">
          <input
            type="text"
            className="add-note-form"
            id="title"
            name="title"
            placeholder="Add a title"
            onChange={onChange}
            minLength={5}
            required
            value={note.title}
          />
        </div>
        <div className="form-group my-3">
          <input
            type="text"
            className="add-note-form-description"
            id="description"
            name="description"
            placeholder="Write description here..."
            onChange={onChange}
            minLength={5}
            required
            value={note.description}
          />
        </div>
        <div className="form-group my-3 tag-label">
          <h4>Tags</h4>
          <input
            type="text"
            className="form-control tag-input h-500"
            id="tag"
            name="tag"
            placeholder="add a tag"
            onChange={onChange}
            value={note.tag}
          />
        </div>
        <button disabled={note.title.length<5 || note.description.length<5 } type="submit" className="btn btn-addnote" onClick={handleSubmit}>
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
