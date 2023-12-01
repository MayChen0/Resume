import React from "react";
import ProfilePicture from "../../assets/image/profilePicture.jpg";
import CV from "../../assets/document/CV.pdf";
import "./intro.scss";
const Intro = () => {
  return (
    <div className="intro">
      <div className="intro__profilepicture">
        <img
          src={ProfilePicture}
          alt="ProfilePicture"
          className="intro__profilepicture__image"
        />
      </div>
      <div className="intro__text">
        <h1>Hello,</h1>
        <h1>I am May Chen</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad voluptas,
          ea illum illo aliquam neque aliquid magnam, odio impedit sunt
          consectetur a cumque fuga incidunt rem laborum, excepturi pariatur
          saepe.
        </p>
        <div className="intro__text__cvDownloadLink">
          <a
            href={CV}
            download="MayChenCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            CV
          </a>
        </div>
      </div>
    </div>
  );
};
export default Intro;
