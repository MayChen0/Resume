import React from "react";

import Navbar from "./component/navbar";
import Intro from "./component/intro";
import Experience from "./component/experience";
import Work from "./component/work";
import Contact from "./component/contact";
import FadeInSection from "./component/fadein";

import "./Resume.scss";

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
