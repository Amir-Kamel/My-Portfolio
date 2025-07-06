// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import { FaDownload } from 'react-icons/fa';


const Hero = () => {
  return (
  <section className="hero-section d-flex flex-column align-items-center justify-content-center text-center vh-100 text-light px-3" id="hero">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        className="max-w-3xl"
      >
        <h1 className="display-4 fw-bold mb-2">
          Hey, I'm Amir Kamel
        </h1>

        {/* Decorative underline */}
        <div
          style={{
            width: '80px',
            height: '4px',
            backgroundColor: '#ffc107', // gold color accent
            margin: '0 auto 1.5rem',
            borderRadius: '2px',
          }}
        />

        <p className="lead mb-4">
          A Passionate Software Engineer.
        </p>

        {/* Call to action button scrolls to projects section */}
       <a
          href="/Amir Kamel Kamal_Resume.pdf"
          download
          className="btn btn-warning btn-lg mb-4"
          aria-label="Download Resume"
        >
          Download My Resume <FaDownload />
        </a>


        {/* Social icons */}
        <div className="d-flex justify-content-center gap-4 fs-4">
          <a
            href="https://github.com/Amir-Kamel"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-light"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/amir-kamel-kamal/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-light"
          >
            <FaLinkedin />
          </a>
         <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=amir.kghabrial@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className='text-light'
        >
          <FaEnvelope />
        </a>

        </div>

        <p className="mt-4 fst-italic" style={{ fontSize: '0.9rem', opacity: 0.7 }}>
          Welcome to my portfolio
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
