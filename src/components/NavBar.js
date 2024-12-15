import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo5-removebg-preview.png';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/github-svgrepo-com.svg";
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Mettre à jour l'état du body lorsque le menu est ouvert ou fermé
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setMenuOpen(false); // Ferme le menu
  };

  return (
    <Router>
      <Navbar 
        expand="md" 
        className={scrolled ? "scrolled" : ""} 
        expanded={menuOpen} // Lie l'état du menu avec `menuOpen`
        onToggle={() => setMenuOpen(!menuOpen)} // Gère le toggle du menu
      >
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Nour Assifar" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link>
                <HashLink
                  to="#home"
                  className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                  onClick={() => onUpdateActiveLink('home')}
                >
                  Home
                </HashLink>
              </Nav.Link>
              <Nav.Link>
                <HashLink
                  to="#formations"
                  className={activeLink === 'formations' ? 'active navbar-link' : 'navbar-link'}
                  onClick={() => onUpdateActiveLink('formations')}
                >
                  Formations
                </HashLink>
              </Nav.Link>
              <Nav.Link>
                <HashLink
                  to="#experiences"
                  className={activeLink === 'experiences' ? 'active navbar-link' : 'navbar-link'}
                  onClick={() => onUpdateActiveLink('experiences')}
                >
                  Experiences
                </HashLink>
              </Nav.Link>
              <Nav.Link>
                <HashLink
                  to="#projects"
                  className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                  onClick={() => onUpdateActiveLink('projects')}
                >
                  Projects
                </HashLink>
              </Nav.Link>
              <Nav.Link>
                <HashLink
                  to="#skills"
                  className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                  onClick={() => onUpdateActiveLink('skills')}
                >
                  Skills
                </HashLink>
              </Nav.Link>
              <Nav.Link>
                <HashLink
                  to="#contact"
                  className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'}
                  onClick={() => onUpdateActiveLink('contact')}
                >
                  Contact
                </HashLink>
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/nour-aassifar-b67617232?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                >
                  <img src={navIcon1} alt="Icon" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/profile.php?id=100057254664814"
                >
                  <img src={navIcon2} alt="Icon" />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/nour-aassifar3"
                >
                  <img src={navIcon3} alt="Icon" />
                </a>
              </div>
              <HashLink to="#connect">
                <button className="vvd">
                  <span>Let’s Connect</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
