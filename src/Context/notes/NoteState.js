import React, { useState, useRef } from "react";
import LoadingBar from "react-top-loading-bar";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);
  const loadingBar = useRef(null);

  //Get all notes
  const getNotes = async () => {
    try {
      loadingBar.current.continuousStart(); // Show loading bar at the start of the API call
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });
      const json = await response.json();
      setNotes(json);
    } catch (error) {
      console.error("Error fetching notes:", error);
    } finally {
      loadingBar.current.complete(); // Hide loading bar when API call is complete
    }
  };
   // Add a note
   const addNote = async (title, description, tag) => {
    loadingBar.current.continuousStart();
    try {
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token'),
        },
        body: JSON.stringify({ title, description, tag }),
      });
      const note = await response.json();
      setNotes(notes.concat(note));
    } catch (error) {
      console.error("Error adding note:", error);
    } finally {
      loadingBar.current.complete();
    }
  };

  // Edit a note
  const editNote = async (id, title, description, tag) => {
    loadingBar.current.continuousStart();
    try {
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token'),
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
    } catch (error) {
      console.error("Error editing note:", error);
    } finally {
      loadingBar.current.complete();
    }
  };

  // Delete note
  const deleteNote = async (id) => {
    loadingBar.current.continuousStart();
    try {
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token'),
        },
      });
      const json = await response.json();
      console.log(json);

      const newNotes = notes.filter((note) => {
        return note._id !== id;
      });
      setNotes(newNotes);
    } catch (error) {
      console.error("Error deleting note:", error);
    } finally {
      loadingBar.current.complete();
    }
  };

  return (
    <>
    <LoadingBar color="rgb(190,129,131)" ref={loadingBar} />
    <NoteContext.Provider
      value={{ notes, addNote, editNote, deleteNote, getNotes}}
    >
      {props.children}
    </NoteContext.Provider>

    </>
  );
  
};

export default NoteState;
