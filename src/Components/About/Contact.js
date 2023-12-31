import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import IMAGE3 from "./community.png";

import "./about.css";

const Contact = () => {
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
    <div ref={containerRef}  className="contact-main">
      <div className=" about-Contact-container">
        <h4>Start taking notes today, and make your ideas come to life!</h4>
        <h2>Contact Us At</h2>
        <a className="contact-link" href="mailto:inotebook@gmail.com">
          inotebook@gmail.com
        </a>
        <h2 className="my-3">Join our Community!</h2>
        <a className="contact-link" href="mailto:inotebook@gmail.com">
          inotebookcommunity@gmail.com
        </a>
      </div>
      <div className="copyright-container">
        <FontAwesomeIcon icon={faCopyright} /> 2023 inotebook.co
      </div>

      <div className="community-image-container">
        <img
          src={IMAGE3}
          alt="your digital notebook"
          className="community-image"
        />
      </div>
      <div className="contact-curve-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#efcacd"
            fillOpacity="1"
            d="M0,32L40,58.7C80,85,160,139,240,176C320,213,400,235,480,224C560,213,640,171,720,144C800,117,880,107,960,122.7C1040,139,1120,181,1200,181.3C1280,181,1360,139,1400,117.3L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="contact-curve-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#efcacd"
            fillOpacity="0.3"
            d="M0,128L40,117.3C80,107,160,85,240,64C320,43,400,21,480,26.7C560,32,640,64,720,96C800,128,880,160,960,165.3C1040,171,1120,149,1200,122.7C1280,96,1360,64,1400,48L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="contact-curve-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#efcacd"
            fillOpacity="0.5"
            d="M0,32L34.3,48C68.6,64,137,96,206,117.3C274.3,139,343,149,411,176C480,203,549,245,617,261.3C685.7,277,754,267,823,250.7C891.4,235,960,213,1029,186.7C1097.1,160,1166,128,1234,122.7C1302.9,117,1371,139,1406,149.3L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Contact;
