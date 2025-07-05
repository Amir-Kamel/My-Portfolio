// src/components/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import projectData from '../data/projects';

const Projects = ({ darkMode }) => {
  return (
    <section className="projects-section py-5" id="projects">
      <div className="container">
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <h2 className="fw-bold">My Projects</h2>
          <p className="text-muted">
            Here are some of the applications and systems I've developed.
          </p>
        </motion.div>

        <div className="row">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              className="col-md-6 col-lg-4 mb-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.4 }}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.15)" }}
              style={{ cursor: 'pointer' }}
            >
              <div className={`card h-100 shadow-sm ${darkMode ? 'card-dark' : 'card-light'}`}>
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{project.title}</h5>
                  <ul className="card-text flex-grow-1">
                    {project.description.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                  <div className="mt-3">
                    {project.live && (
                      <a
                        href={project.live}
                        className="btn btn-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          backgroundColor: '#ffc107',
                          color: '#212529',
                          border: 'none',
                          transition: 'background-color 0.3s ease',
                        }}
                        onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#e6b800')}
                        onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#ffc107')}
                      >
                        Live Demo <FaExternalLinkAlt className="ms-1" />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        className="btn btn-sm btn-outline-dark ms-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Source Code <FaGithub className="ms-1" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
