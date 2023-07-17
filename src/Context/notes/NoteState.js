import React, { useState } from "react";
import NoteContext from "./noteContext";
const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  //Get all notes
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhYTYyMTNmYjBkOTJkZjhjOWU1YWI5In0sImlhdCI6MTY4ODg4ODAzMn0.3U7sE-H-DMQeqA2vBtAVKZO-Ohz-lQBKs25GmZF5wrQ",
      },
    });
    const json = await response.json();
    setNotes(json);
  };

  // Add a note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhYTYyMTNmYjBkOTJkZjhjOWU1YWI5In0sImlhdCI6MTY4ODg4ODAzMn0.3U7sE-H-DMQeqA2vBtAVKZO-Ohz-lQBKs25GmZF5wrQ",
      },

      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);

    const note = {
      _id: "64ae591b60dfdsg5439933e3e639667",
      user: "64aa6213fb0d92df8c9e5ab9",
      title: title,
      description: description,
      tag: tag,
      date: "2023-07-12T07:41:15.917Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  // Edit a note
  const editNote = async (id, title, description, tag) => {
    //API call

    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhYTYyMTNmYjBkOTJkZjhjOWU1YWI5In0sImlhdCI6MTY4ODg4ODAzMn0.3U7sE-H-DMQeqA2vBtAVKZO-Ohz-lQBKs25GmZF5wrQ",
      },

      body: JSON.stringify({ title, description, tag }),
    });

    const json = await response.json();
    console.log(json);
    
    let newNotes = JSON.parse(JSON.stringify(notes))
    //Logic to edit a note
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;

      }
    }
    setNotes(newNotes);
  };

  // Delete note
  const deleteNote = async (id) => {
    //API call

    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhYTYyMTNmYjBkOTJkZjhjOWU1YWI5In0sImlhdCI6MTY4ODg4ODAzMn0.3U7sE-H-DMQeqA2vBtAVKZO-Ohz-lQBKs25GmZF5wrQ",
      },
    });
    const json = await response.json();
    console.log(json);

    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  return (
    <NoteContext.Provider
      value={{ notes, addNote, editNote, deleteNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
