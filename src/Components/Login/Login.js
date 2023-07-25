import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Canvas} from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial} from "@react-three/drei"
import Notes from './Notes1.png';
import './authStyle.css';

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      props.showAlert("Successfully Loged in!", "success");
      navigate("/");
    } else {
      props.showAlert("Invalid credentials", "danger");
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="container d-flex justify-content-between log-sign-container">
      <div className="login-container mt-2">
        <h2>Login to continue to i<span className='span-navbar-brand'>N</span>otebook
</h2>
        <form onSubmit={handleSubmit} className="auth-form mt-3">
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
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
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
            />
          </div>
          <button type="submit" className="btn login-btn my-3">
            Login
          </button>
        </form>
        <div className="bottom-text my-3">
       <h4>Welcome back to the realm of boundless creativity.</h4>
       <h4>Let's dive into your world of notes, dreams, and ideas!</h4>
        </div>
      </div>
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
    </div>
  );
};

export default Login;
