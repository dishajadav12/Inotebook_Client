import React from "react";
import IMAGE from './Notes2.png';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import {Canvas} from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial} from "@react-three/drei"
import "./about.css";

const Intro = () => {
  return (
    <div className=" about-Intro-container ">
      <div className="intro-content">
        <div className="intro-content-1">
        <h2 className="intro-heading mx-3">Welcome to our Digital Notebook!</h2> 
        <div className="intro-image-container">   
             <img src={IMAGE} alt="your digital notebook" className="intro-image" />
</div>
<div className="intro-img-animation-container">
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
           speed={1}
          />
          </Sphere>
        </Canvas>
      </div>
        </div>

        <div className="intro-content-2">
          <div className="container ">
            <b>At iNotebook,</b> <br />
            <div className="my-1 "> we have created a cutting-edge digital notebook  that
            allows you to take notes,  organize your thoughts,and stay
            productive like never before.  Our platform is designed to be
            intuitive, efficient,and secure, providing you with the ultimate
            note-taking experience.</div>
          </div>
          <Link to='/login' className="btn btn-get-started btn-animate button-start my-3">Get started <FontAwesomeIcon icon={faCaretRight} fade className="caret-right" /></Link>
        </div>
      </div>
      <div className="intro-curve"> </div>

    </div>
  );
};

export default Intro;
