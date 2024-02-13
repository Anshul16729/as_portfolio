import React from "react";
import { Link as ScrollLink } from "react-scroll";

const SideNavLinks = ({ navLinks }) => {
  return (
    <nav id="navbar" className="nav-menu navbar">
      <ul>
        <li>
          {/* {navLinks.map((items) => {
            return (
              <ScrollLink
                to={items.linkTo}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={items.className}
                >
                <i className={items.iconClassName}></i>{" "}
                <span>{items.linkTitle}</span>
              </ScrollLink>
            );
          })} */}

          <li>
            <ScrollLink
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link active pointer"
            >
              <i className="bx bx-home"></i> <span>Home</span>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link pointer"
            >
              <i className="bx bx-user"></i> <span>About</span>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="resume"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link pointer"
            >
              <i className="bx bx-file-blank"></i> <span>Resume</span>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link pointer"
            >
              <i className="bx bx-book-content"></i> <span>Portfolio</span>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link pointer"
            >
              <i className="bx bx-server"></i> <span>Services</span>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="nav-link pointer"
            >
              <i className="bx bx-envelope"></i> <span>Contact</span>
            </ScrollLink>
          </li>
        </li>
      </ul>
    </nav>
  );
};

export default SideNavLinks;
