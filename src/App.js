import React, { useState } from "react";
import './App.css';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About/About';
import NoteState from './Context/notes/NoteState';
import Alert from './Components/Alert';
import Login from './Components/Login/Login';
import Signup from './Components/Login/Signup';
import NoteDetail from "./Components/NoteDetail";



function App() {
  const [alert, setAlert]= useState(null);
  const showAlert=(message,type)=>{
    setAlert({
     msg:message,
     type: type,
    })
    setTimeout(()=>{
     setAlert(null);
     
    },2000);
 }
  return (
    <NoteState>
    <BrowserRouter>
    <div className="navbar-container">
    <Navbar/>
    </div>
      <div className="route-container">
        <Routes>
            <Route exact path='/about' element={<About/>}/>
            <Route exact path='/' element={<Home showAlert={showAlert}/>}/>
            <Route exact path='/login' element={<Login showAlert={showAlert}/>}/>
            <Route exact path='/signup' element={<Signup showAlert={showAlert}/>}/>
            <Route exact path='/notedetail/:noteId' element={<NoteDetail showAlert={showAlert}/>}/>
        </Routes>
        </div>  
        <Alert alert={alert}/>
    </BrowserRouter>

    </NoteState>
  );
}

export default App;
