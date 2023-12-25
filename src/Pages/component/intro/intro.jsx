import React from "react";
import ProfilePicture from "../../../assets/image/profilePicture.jpg";
import ProfilePicturePad from "../../../assets/image/profilePicture-lg.jpg";
import CV from "../../../assets/document/CV.pdf";
import { ReactComponent as DownloadIcon } from "../../../assets/image/downloadIcon.svg";
import "./intro.scss";
const Intro = () => {
  return (
    <div className="intro">
      <picture className="intro__profilepicture">
        <source media="(min-width: 1024px)" srcSet={`${ProfilePicture} `} />
        <source media="(max-width: 1024px)" srcSet={`${ProfilePicturePad} `} />

        <img
          src={ProfilePicture}
          alt="ProfilePicture"
          className="intro__profilepicture__image"
        />
      </picture>
      <div className="intro__text">
        <h2>Hello,</h2>
        <h2>I am May Chen</h2>
        <p>
          I bring hands-on experience in front-end engineering complemented by a
          strong design foundation. Proficient in interdisciplinary
          communication, I proactively seek opportunities for continuous
          learning. I firmly believe that collaboration with individuals from
          diverse backgrounds has the potential to spark innovation and achieve
          truly unique accomplishments.
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
