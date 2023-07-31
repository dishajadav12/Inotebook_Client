import React, { useEffect, useRef } from "react";
import "./about.css";
import IMAGE2 from './vision-img.png';
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei"

const Vision = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const options = {
      threshold: 0.2 // Adjust the threshold as needed (from 0 to 1)
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("about-container-animation");
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, options);

    const target = containerRef.current;
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

 return (
  <div ref={containerRef} className="about-Vision-container d-flex justify-content-around">
          <div className="intro-curve-2"> </div>

  <div className="vision-content-1">
      <div>
        <b>At iNotebook,</b>  our vision is to empower individuals and teams with <br /> an
        innovative and reliable digital notebook that enhances productivity <br /> and
        creativity. We believe that efficient note-taking should  be  <br /> accessible
        to everyone, and our platform strives to achieve this  <br /> by providing a
        feature-rich and user-friendly experience.
      </div>
      <div>
        Join us on this journey of organization, productivity, and creativity. <br />
       <div className="my-3">Experience the power of digital note-taking and unlock your full
        potential <br /> with iNotebook.</div>
      </div>
      </div>

      <div className="vision-content-2">
        <h2 className="our-vision-heading">Our Vision</h2>
        <div className="vision-image-container">
          <img src={IMAGE2} alt="your digital notebook" className="vision-image" />
        </div>
        <div className="vision-img-animation-container">
          {/* 3d Modal */}
          <Canvas camera={{ fov: 25, position: [1, 1, 5] }}>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1.5} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={1}>
              <MeshDistortMaterial
                color="rgba(219,120,118,0.4)"
                attach="material"
                distort={0.4}
                speed={0.5}
              />
            </Sphere>
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default Vision;