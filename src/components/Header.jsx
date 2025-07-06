import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Header = ({ toggleDarkMode, darkMode }) => {
  return (
    <motion.nav
      className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="navbar-brand fw-bold fs-4"
            style={{ cursor: 'pointer' }}
          >
            Amir Kamel
          </Link>

        {/* Hamburger toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* 🌙 Dark Mode button for mobile (only shows on small screens) */}
        <button
          className="btn btn-sm btn-warning d-lg-none ms-2"
          onClick={toggleDarkMode}
        >
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="hero" spy={true} smooth={true} duration={500} className="nav-link" style={{ cursor: 'pointer' }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="about" spy={true} smooth={true} duration={500} className="nav-link" style={{ cursor: 'pointer' }}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="projects" spy={true} smooth={true} duration={500} className="nav-link" style={{ cursor: 'pointer' }}>
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="contact" spy={true} smooth={true} duration={500} className="nav-link" style={{ cursor: 'pointer' }}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* 🌙 Dark Mode button for desktop (only shows on large screens) */}
        <button
          className="btn btn-sm btn-warning d-none d-lg-block ms-3"
          onClick={toggleDarkMode}
        >
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
    </motion.nav>
  );
};

export default Header;
