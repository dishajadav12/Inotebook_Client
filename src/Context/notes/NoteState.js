import React, {useState} from "react";
import NoteContext from "./noteContext";
const NoteState = (props) => {

    const notesInitial =
        [
            {
              "_id": "64aa775b0493e7041ee812a0",
              "user": "64aa6213fb0d92df8c9e5ab9",
              "title": "my first note",
              "description": "The things I have done today.",
              "tag": "personal",
              "date": "2023-07-09T09:01:15.839Z",
              "__v": 0
            },
            {
              "_id": "64aba39f190a51c136b06220",
              "user": "64aa6213fb0d92df8c9e5ab9",
              "title": "To Do list",
              "description": "The things I will do today.",
              "tag": "personal",
              "date": "2023-07-10T06:22:23.884Z",
              "__v": 0
            },
            {
              "_id": "64ae591b60d9933e3e639667",
              "user": "64aa6213fb0d92df8c9e5ab9",
              "title": "Dmart",
              "description": "Things I have to buy for home",
              "tag": "grocery",
              "date": "2023-07-12T07:41:15.917Z",
              "__v": 0
            },
            {
              "_id": "64aa775b0493435e7041ee812a0",
              "user": "64aa6213fb0d92df8c9e5ab9",
              "title": "my first note",
              "description": "The things I have done today.",
              "tag": "personal",
              "date": "2023-07-09T09:01:15.839Z",
              "__v": 0
            },
            {
              "_id": "64aba39f1432rew90a51c136b06220",
              "user": "64aa6213fb0d92df8c9e5ab9",
              "title": "To Do list",
              "description": "The things I will do today.",
              "tag": "personal",
              "date": "2023-07-10T06:22:23.884Z",
              "__v": 0
            },
            {
              "_id": "64ae591b60d5439933e3e639667",
              "user": "64aa6213fb0d92df8c9e5ab9",
              "title": "Dmart",
              "description": "Things I have to buy for home",
              "tag": "grocery",
              "date": "2023-07-12T07:41:15.917Z",
              "__v": 0
            }
          ]
    
    const [notes, setNotes] = useState(notesInitial);
    
    // Add a note
    const addNote = (title, description, tag)=>{
      console.log("Adding a new note")
        const note = {
          "_id": "64ae591b60dfdsg5439933e3e639667",
          "user": "64aa6213fb0d92df8c9e5ab9",
          "title": "ReactJS",
          "description": "Things I have to buy for home",
          "tag": "grocery",
          "date": "2023-07-12T07:41:15.917Z",
          "__v": 0
        } ;
        setNotes(notes.concat(note));
    }
    // Edit a note
    const editNote = ()=>{
      
    }
    // Delete note
    const deleteNote = ()=>{
      
    }
    return(

        <NoteContext.Provider value={{notes, addNote, editNote, deleteNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;