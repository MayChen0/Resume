import React from "react";
import Navbar from "./component/navbar";
import Intro from "./component/intro";
import "./App.scss";

const Resume = () => {
  return (
    <div className="resume">
      <Navbar className="resume__navbar" />
      <Intro className="resume__intro" />
    </div>
  );
};

export default Resume;
