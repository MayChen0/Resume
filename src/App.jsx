import React from "react";
import Navbar from "./component/navbar";
import Intro from "./component/intro";
import Experience from "./component/experience";
import "./App.scss";

const Resume = () => {
  return (
    <div className="resume">
      <Navbar className="resume__navbar" />
      <Intro className="resume__intro" />
      <Experience className="resume__experience" />
    </div>
  );
};

export default Resume;
