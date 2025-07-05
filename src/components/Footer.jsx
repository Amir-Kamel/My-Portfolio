import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-4">
            <h5 className="fw-bold">Amir Kamel Kamal Ghabrial</h5>
            <p>
              Software Engineer
              <br />
              Based in Egypt — available worldwide 🌍
            </p>
          </div>
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="#about" className="text-decoration-none text-light">About</a></li>
              <li><a href="#projects" className="text-decoration-none text-light">Projects</a></li>
              <li><a href="#contact" className="text-decoration-none text-light">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Connect</h6>
            <div className="d-flex gap-3">
              <a href="https://github.com/Amir-Kamel" className="text-light fs-5" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/amir-kamel-kamal/" className="text-light fs-5" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://www.facebook.com/AmirAldhlab" className="text-light fs-5" target="_blank" rel="noreferrer">
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
        <hr className="bg-secondary" />
        <p className="text-center mb-0 small">&copy; {new Date().getFullYear()} Amir Kamel. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
