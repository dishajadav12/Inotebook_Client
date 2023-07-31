import React, { useEffect, useRef } from "react";
import "./about.css";

const Why = () => {
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
    <div ref={containerRef} className="about-Why-container ">
      <div className="why-content-1 text-center">
      <h2 className="my-3">Why Choose us?</h2>

      </div>
    <div className="why-content-2 d-flex justify-content-around my-3">
      <div className="why-sub-content" style={{backgroundColor:"rgba(244, 196, 187,0.6)"}}>
        <div className="sub-content-title"> Seamless Note-Taking</div> Our digital notebook offers a seamless note-taking
        process, making it easy for you to jot down ideas, create to-do lists,
        capture inspirations, and keep track of important information—all in one
        place.
      </div>
      <div className="why-sub-content" style={{backgroundColor:"rgba(221, 160, 149,0.7)"}}>
        <div className="sub-content-title">Easy Modification</div>  We understand that ideas evolve and thoughts change.
        That's why we've made it effortless to modify your notes. Edit,
        rearrange, or delete content with just a few clicks or taps, ensuring
        your notebook always reflects your latest insights.
      </div>
      <div className="why-sub-content" style={{backgroundColor:"rgba(255, 239, 234)"}}>
      <div className="sub-content-title">User-Friendly Interface</div> Our user-friendly interface is designed to cater to all
        users, regardless of their tech expertise. You don't need to be a
        tech-savvy individual to make the most out of our platform. Our
        intuitive layout ensures that you can get started right away.
</div>
</div>
<div className="why-content-2 d-flex justify-content-around my-3">

        <div className="why-sub-content "style={{backgroundColor:"rgba(198, 124, 111,0.4)"}}>     
          <div className="sub-content-title"> Multi-Platform Access</div> Access your digital notebook anytime, anywhere,
        and from any device. Whether you prefer to use your desktop computer,
        tablet, or smartphone, our platform offers a consistent and seamless
        experience across all devices.</div>

      <div className="why-sub-content" style={{backgroundColor:"rgba(250, 217, 209)"}}>
        <div className="sub-content-title">Safe and Secure Authentication</div> We take your data security seriously.
        Our safe authentication page ensures that your personal and sensitive
        information remains protected at all times. You can trust us with your
        data, knowing that we employ robust security measures to keep your notes
        safe from unauthorized access. 
        </div>
        <div className="why-sub-content" style={{backgroundColor:"rgba(175, 88, 73,0.5)"}}><div className="sub-content-title">Collaboration Made Easy</div>
        Share your notes
        with friends, colleagues, or teammates effortlessly. Collaborate on
        projects, brainstorm ideas together, and keep everyone on the same page
        with our easy-to-use sharing features.
      </div>
      </div>

    </div>
  );
};

export default Why;
