import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./menubar.scss";

const Menubar = () => {
  const [offset, setOffset] = useState(-45); // Default offset value

  const handleResize = () => {
    const screenWidth = window.innerWidth;

    setOffset(screenWidth <= 960 ? -90 : -45);
  };

  useEffect(() => {
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
        <Link to="top" smooth={true} onClick={() => scrollToSection("top")}>
          TOP
        </Link>
        <Link
          to="method"
          smooth={true}
          offset={offset}
          onClick={() => scrollToSection("method")}
        >
          METHOD
        </Link>
        <Link
          to="research"
          smooth={true}
          offset={offset}
          onClick={() => scrollToSection("research")}
          DESIGN
          METHOD
        >
          RESEARCH
        </Link>
        <Link
          to="design"
          smooth={true}
          offset={offset}
          onClick={() => scrollToSection("design")}
        >
          DESIGN
        </Link>
        <Link
          to="prototype"
          smooth={true}
          offset={offset}
          onClick={() => scrollToSection("prototype")}
        >
          PROTOTYPE
        </Link>
      </nav>
    </div>
  );
};

export default Menubar;
