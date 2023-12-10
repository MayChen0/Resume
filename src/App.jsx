import React from "react";
import Navbar from "./component/navbar";
import Intro from "./component/intro";
import Experience from "./component/experience";
import Work from "./component/work";
import "./App.scss";
import Contact from "./component/contact";

const Resume = () => {
  return (
    <div className="resume">
      <Navbar className="resume__navbar" />
      <Intro className="resume__intro" />
      <Experience className="resume__experience" />
      <Work className="resume__experience" />
      <Contact className="resume__contact" />
    </div>
  );
};

export default Resume;
