import React from "react";
import Notes from "./Notes";
import LeftNavbar from "../Components/LeftNavbar/LeftNavbar";
import './Style.css'

const Home = (props) => {
  const {showAlert} = props;
  return (
    <div className="container  d-flex justify-content-start">
            <div className="left-navbar">
        <LeftNavbar/>
      </div>
      <div className="home-container mx-3">
      <Notes showAlert={showAlert} />
      </div>
    </div>
  );
};

export default Home;
