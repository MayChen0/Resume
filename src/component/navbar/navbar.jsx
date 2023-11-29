import React, { useCallback, useRef, useState } from "react";
import "./navbar.scss";
import Hamburger from "./hamburger";
const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isContactOpen, setContactOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleContactToggle = () => {
    setContactOpen(!isContactOpen);
  };
  const [isHamburgerOpen, setHamburgerOpen] = useState(false);
  const hamburgerRef = useRef(null);

  const handleHamburgerTrigger = useCallback((e) => {
    e.stopPropagation();
    setHamburgerOpen((value) => !value);
  }, []);

  return (
    <div className="mainHeader">
      <Hamburger
        active={isHamburgerOpen}
        onClick={handleHamburgerTrigger}
        ref={hamburgerRef}
      />

      <input type="checkbox" id="menuSwitch" checked={isHamburgerOpen} />

      <nav className="mainNav">
        <a href="#mainPage">ABOUT ME</a>
        <a href="#experience">EXPERIENCE</a>
        <a href="#portfolio">MY WORK</a>
        <a href="#contact">CONTACT ME</a>

        {/* <input type="checkbox" id="contactMe" checked={isContactOpen} />
        <label htmlFor="contactMe" onClick={handleContactToggle}>
          CONTACT ME
        </label>

        {isContactOpen && (
          <div className="contactPage">
            <div className="contact">
              <p>Contact me</p>
              <div className="link">
                <a href="mailto:p36104136@gs.ncku.edu.tw">
                  <img
                    src="https://lh3.googleusercontent.com/pw/AL9nZEXCwzhuDNqy5C2vpTnPDjA81YCmZgHezCH_zW2fRMX04H7vv8NTuHNUPYoJoLoH__A99lyH3DVGu4kcR-G-NTz1-E1a8_vjcc5OXaiSwqo9UTVECd6eqamXkJmOkY36vZKzH1kE_sFK2acPpNrmt0Uo=s512-no?authuser=1"
                    alt=""
                  />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100002496165986">
                  <img
                    src="https://lh3.googleusercontent.com/pw/AL9nZEUqGydh1e3cMg9SXDYsKrarDyXVBlERVwHXJhWxDsP7j5voo0ZPGQE4GTE2poeLUcnmz21JqXkd5Er6Xej8E8rvAP7UE8Ta-9f1UJ_CgDGx7mwHVtpH8WWyavfFgChRa_45HVn84HtjLouIvwAe33AD=s512-no?authuser=1"
                    alt=""
                  />
                </a>
                <a href="#">
                  <img
                    src="https://lh3.googleusercontent.com/pw/AL9nZEXC9PDMvoZpD_-JI7bheORCucjMHz9SuPSBKVlGphp7GUFILn2EdmbEpsOAR2nTfHTgelchl-o_57ILv7aCNnapQY7tE2Vbi5Vsykg_Jit4IzRLRFuhHr3oh_JDN4Chg0Ua-23GqvP1dKnao3IjnFRm=s512-no?authuser=1"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="contactback" id="contactBack"></div>
          </div>
        )} */}
      </nav>
    </div>
  );
};

export default Navbar;
