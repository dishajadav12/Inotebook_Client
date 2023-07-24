import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import NoteContext from "../Context/notes/noteContext";

const Test = () => {
    const { notes } = useContext(NoteContext);
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

  const { title, description, tag } = selectedNote;

  return (
    <div>
      {/* Displaying the note details */}
      <h2>{title}</h2>
      <p>{description}</p>
      <span>{tag}</span>
    </div>
  );
}

export default Test;
