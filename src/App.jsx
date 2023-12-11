import React from "react";
import Navbar from "./component/navbar";
import Intro from "./component/intro";
import Experience from "./component/experience";
import Work from "./component/work";
import "./App.scss";
import Contact from "./component/contact";

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

const Resume = () => {
  return (
    <div className="resume">
      <Navbar className="resume__navbar" />
      <Intro className="resume__intro" />
      <FadeInSection>
        <Experience className="resume__experience" />
      </FadeInSection>
      <FadeInSection>
        <Work className="resume__work" />
      </FadeInSection>
      <Contact className="resume__contact" />
    </div>
  );
};

export default Resume;
