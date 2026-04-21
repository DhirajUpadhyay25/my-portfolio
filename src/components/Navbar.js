import { useState } from "react";
import { Link } from "react-router-dom";
import resume from "../Photos/resume.pdf";
import '../CssCodes/Navbar.css';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* ===== NAVBAR ===== */}
       <nav className="navbar-custom">
        <div className="nav-container container">

          {/* Logo */}
          <Link className="logo" to="/">
            <div className="logo-circle">DU</div>
            Portfolio
          </Link>

          {/* Hamburger */}
          <button className="menu-btn" onClick={() => setIsOpen(true)}>
            ☰
          </button>

          {/* Desktop Menu */}
          <div className="desktop-menu">
            <Link to="/AboutMe" className="nav-link-liquid">About Me</Link>
            <Link to="/#Skills" className="nav-link-liquid">Skills</Link>
            <Link to="/Project" className="nav-link-liquid">Projects</Link>
            <Link to="/Services" className="nav-link-liquid">Services</Link>
            <Link to="/Contact" className="nav-link-liquid">Contact</Link>
          </div>

          {/* Right Buttons */}
          <div className="desktop-buttons">
            <a href={resume} target="_blank" rel="noreferrer " className=" btn btn-primary px-4 py-2 fw-bolder" >Resume</a>
            <Link to="/Contact" className=" btn btn-outline-secondary px-4 py-2 fw-bolder nav-link-liquid">Hire Me</Link>
          </div>

        </div>
      </nav>

      {/* ===== OVERLAY ===== */}
      {isOpen && <div className="overlay" onClick={closeMenu}></div>}

      {/* ===== MOBILE SIDEBAR ===== */}
      <div className={`sidebar ${isOpen ? "active" : ""}`}>

        {/* Header */}
        <div className="sidebar-header">
          <Link to="/" onClick={closeMenu} className="logo">
            <div className="logo-circle">DU</div>
            Portfolio
          </Link>

          <button className="close-btn" onClick={closeMenu}>✖</button>
        </div>

        {/* Links */}
        <ul className="menu">
          <li><Link to="/AboutMe" onClick={closeMenu} className="nav-link-liquid">👤About Me</Link></li>

          <li>
            <Link
              to="/#Skills" className="nav-link-liquid" >
              💻Skills
            </Link>
          </li>

          <li><Link to="/Project" onClick={closeMenu} className="nav-link-liquid">{"</>"} Projects</Link></li>
          <li><Link to="/Services" onClick={closeMenu} className="nav-link-liquid"> 💻Services</Link></li>
          <li><Link to="/Contact" onClick={closeMenu} className="nav-link-liquid">✉️Contact</Link></li>
        </ul>

        {/* Footer */}
        <div className="sidebar-footer">
          <a href={resume} target="_blank" rel="noreferrer" className=" btn btn-primary fw-bolder text-light">Resume</a>
          <Link to="/Contact" onClick={closeMenu} className=" btn bg-warning fw-bolder">Hire Me</Link>
        </div>

      </div>
    </>
  );
};

export default Navbar;