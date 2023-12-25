import React, { useState, useLayoutEffect } from "react";
import { Link as Link2, animateScroll as scroll } from "react-scroll";
import { ReactComponent as BackIcon } from "../../../assets/image/backicon.svg";
import { Link as Link1 } from "react-router-dom";
import "./menubar.scss";

const Menubar = () => {
  const [offset, setOffset] = useState(-45); // Default offset value

  const handleResize = () => {
    const screenWidth = window.innerWidth;

    setOffset(screenWidth <= 960 ? -90 : -45);
  };

  useLayoutEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    if (sectionId === "top") {
      scroll.scrollToTop({
        duration: 800,
        offset: 0,
      });
    } else {
      scroll.scrollTo(sectionId, {
        duration: 800,
        offset: offset,
      });
    }
  };

  return (
    <div className="menubar">
      <nav className="menubar__nav">
        <Link2
          className="menubar__nav__top"
          to="top"
          smooth={true}
          onClick={() => scrollToSection("top")}
        >
          TOP
        </Link2>
        <Link2
          className="menubar__nav__method"
          to="method"
          smooth={true}
          offset={offset}
          onClick={() => scrollToSection("method")}
        >
          METHOD
        </Link2>
        <Link2
          className="menubar__nav__research"
          to="research"
          smooth={true}
          offset={offset}
          onClick={() => scrollToSection("research")}
          DESIGN
          METHOD
        >
          RESEARCH
        </Link2>
        <Link2
          className="menubar__nav__design"
          to="design"
          smooth={true}
          offset={offset}
          onClick={() => scrollToSection("design")}
        >
          DESIGN
        </Link2>
        <Link2
          className="menubar__nav__prototype"
          to="prototype"
          smooth={true}
          offset={offset}
          onClick={() => scrollToSection("prototype")}
        >
          PROTOTYPE
        </Link2>
        <Link2
          className="menubar__nav__end"
          to="end"
          smooth={true}
          offset={offset}
          onClick={() => scrollToSection("end")}
        >
          PRODUCT
        </Link2>
      </nav>
      <Link1 className="menubar__home" to="/Resume">
        <p>HOME</p>
        <BackIcon className="menubar__home__icon" />
      </Link1>
    </div>
  );
};

export default Menubar;
