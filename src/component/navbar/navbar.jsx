import React, { useCallback, useRef, useState, useEffect } from "react";
import "./navbar.scss";
import Hamburger from "./hamburger";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [isHamburgerOpen, setHamburgerOpen] = useState(false);

  const hamburgerRef = useRef(null);

  const handleHamburgerTrigger = useCallback((e) => {
    e.stopPropagation();
    setHamburgerOpen((value) => !value);
  }, []);

  const scrollToSection = (sectionId) => {
    scroll.scrollTo(sectionId, {
      duration: 800,
    });
  };

  useEffect(() => {
    const closeHamburger = (e) => {
      if (hamburgerRef.current && !hamburgerRef.current.contains(e.target)) {
        setHamburgerOpen(false);
      }
    };
    document.body.addEventListener("click", closeHamburger);

    return () => {
      document.body.removeEventListener("click", closeHamburger);
    };
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
        <Link
          to="intro"
          smooth={true}
          onClick={() => scrollToSection("intro")}
          offset={-45}
        >
          ABOUT ME
        </Link>
        <Link
          to="experience"
          smooth={true}
          onClick={() => scrollToSection("experience")}
          offset={-120}
        >
          EXPERIENCE
        </Link>
        <Link
          to="work"
          smooth={true}
          onClick={() => scrollToSection("work")}
          offset={-120}
        >
          MY WORK
        </Link>
        <Link
          to="contact"
          smooth={true}
          onClick={() => scrollToSection("contact")}
        >
          CONTACT ME
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
