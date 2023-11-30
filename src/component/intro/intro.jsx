import React from "react";
import ProfilePicture from "../../assets/image/profilePicture.jpg";
import "./intro.scss";
const Intro = () => {
  return (
    <div className="intro">
      <img
        src={ProfilePicture}
        alt="ProfilePicture"
        className="intro__profilepicture"
      />
    </div>
  );
};
export default Intro;
