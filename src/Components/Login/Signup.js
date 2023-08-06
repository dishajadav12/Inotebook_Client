import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {Canvas} from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial} from "@react-three/drei"
import Notes from './Notes1.png';
import LoadingBar from "react-top-loading-bar";
import './authStyle.css';

const Signup = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const loadingBar = useRef(null);
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      loadingBar.current.continuousStart(); // Show loading bar at the start of the API call
  
      const response = await fetch("http://localhost:5000/api/auth/createuser", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          password: credentials.password,
        }),
      });
  
      const json = await response.json();
      console.log(json);
  
      if (json.success) {
        localStorage.setItem("token", json.authtoken);
        navigate("/");
        props.showAlert("Successfully Signed up!", "success");
      } else {
        props.showAlert("Invalid credentials", "danger");
      }
    } catch (error) {
      console.error("Error during sign up:", error);
    } finally {
      loadingBar.current.complete(); // Hide loading bar when API call is complete
    }
  };
  
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="container log-sign-container">
        <LoadingBar color="#FF52A2" ref={loadingBar} />
      <div className="design-container">
    <h2 className="text-center">Collect Your Thoughts.</h2>
    <img className="signup-img img-fluid" src={Notes} alt="Your any time note taker" />

      <div className="img-animation-container">
        {/* 3d Modal */}
        <Canvas camera={{fov:25, position:[1,1,5]}}>
          <OrbitControls enableZoom={false} autoRotate />
          <ambientLight intensity={1.5}/>
          <directionalLight position={[3,2,1]} />
          <Sphere args={[1,100,200]} scale={1}>
          <MeshDistortMaterial
           color="rgba(190, 129, 131, 0.1)"
           attach="material"
           distort={0.3}
           speed={2}
          />
          </Sphere>
        </Canvas>
      </div>
      <h6 className="text-center" style={{color: "#555"}}>Unlock the art of hassle-free note-taking, all for free!</h6>

      </div>
      <div className="signup-container">
      <h2>  Sign up now to embark on your <br /> note-taking journey!</h2>
      <h4>  Sign up now to embark on your note-taking journey!</h4>

      <form onSubmit={handleSubmit} className="auth-form">
        <div className="my-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            value={credentials.name}
            onChange={onChange}
            id="name"
            name="name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={credentials.email}
            onChange={onChange}
            aria-describedby="emailHelp"
            required
          />
          <div id="emailHelp" className="form-text">
           <small> We'll never share your email with anyone else.</small>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            value={credentials.password}
            onChange={onChange}
            id="password"
            name="password"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            value={credentials.cpassword}
            onChange={onChange}
            id="cpassword"
            name="cpassword"
            required
          />
        </div>
        <button type="submit" className="btn signup-btn">
          Sign me Up
        </button>
      </form>
    </div>
  
    </div>

  );
};

export default Signup;
