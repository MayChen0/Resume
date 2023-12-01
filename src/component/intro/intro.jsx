import React from "react";
import ProfilePicture from "../../assets/image/profilePicture.jpg";
import CV from "../../assets/document/CV.pdf";
import { ReactComponent as DownloadIcon } from "../../assets/image/downloadIcon.svg";
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
        <h2>Hello,</h2>
        <h2>I am May Chen</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad voluptas,
          ea illum illo aliquam neque aliquid magnam, odio impedit sunt
          consectetur a cumque fuga incidunt rem laborum, excepturi pariatur
          saepe.
        </p>
        <div className="intro__text__cvDownloadContainer">
          <div className="intro__text__cvDownloadLink">
            <a
              href={CV}
              download="MayChenCV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              &nbsp;&nbsp;C V
            </a>
            <DownloadIcon className="intro__text__cvDownloadLink__icon" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Intro;
