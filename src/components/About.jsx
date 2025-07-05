// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/me.jpeg'; // Your photo path

const About = () => {
  return (
      <section className="about-section py-5" id="about">
      <div className="container">
        <motion.div
          className="row align-items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* Photo with circle shape and fade in/out */}
          <motion.div
            className="col-md-4 text-center mb-4 mb-md-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <img
              src={profilePic}
              alt="Amir Kamel Kamal Ghabrial"
              className="shadow"
              style={{
                width: '250px',
                height: '250px',
                borderRadius: '50%',
                objectFit: 'cover',
                display: 'inline-block'
              }}
            />
          </motion.div>

          {/* About me paragraphs */}
          <motion.div
            className="col-md-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="fw-bold mb-3">About Me</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              I'm <strong>Amir Kamel Kamal Ghabrial</strong>, a graduate of the Faculty of Engineering, Tanta University (Class of 2023). During my studies, I was honored to receive an Erasmus+ scholarship, which allowed me to spend 5 enriching months studying abroad at the University of Bradford in the UK as part of a semester abroad exchange program. This experience broadened my horizons both academically and culturally.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              Following that, I completed a 4-month intensive Python Web Development track at the Information Technology Institute (ITI), where I gained practical skills and hands-on experience building modern, full-stack web applications using technologies like Django and React.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              Currently, I am further developing my expertise as an Odoo developer through hands-on training at Global Brands Group. I am passionate about creating responsive, user-friendly websites and scalable backend systems.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
