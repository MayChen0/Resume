import React from "react";
import "./contact.scss";
import { ReactComponent as BehanceIcon } from "../../../assets/image/behanceicon.svg";
import { ReactComponent as LinkedinIcon } from "../../../assets/image/linkedinicon.svg";
import { ReactComponent as MailIcon } from "../../../assets/image/mailicon.svg";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__container">
        <p>E-mail: mayflora777@gmail.com</p>
        <p>Mobile: +886 975831896</p>
        <div className="contact__container__icon">
          <div className="contact__container__icon__link">
            <a href="#">
              <BehanceIcon />
            </a>
            <p>portfolio</p>
          </div>
          <div className="contact__container__icon__link">
            <a href="#">
              <LinkedinIcon />
            </a>
            <p>Linkedin</p>
          </div>
          <div className="contact__container__icon__link">
            <a href="mailto:mayflora777@gmail.com">
              <MailIcon />
            </a>
            <p>Mail</p>
          </div>
        </div>
        <p>Copyright © 2023 MayChen. All rights reserved</p>
      </div>
    </div>
  );
};

export default Contact;
