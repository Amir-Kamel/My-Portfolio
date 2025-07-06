import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setSuccess(null);

   emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setSending(false);
      setSuccess(true);
      form.current.reset();
    }, () => {
      setSending(false);
      setSuccess(false);
    });
  };

  return (
    <section className="contact-section py-5" id="contact">
      <div className="container">

        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.4 }}
        >
          <h2 className="fw-bold">Contact Me</h2>
          <p className="text-muted">Feel free to reach out through any of the following platforms.</p>
        </motion.div>

        <div className="row justify-content-center">
          <motion.div
            className="col-md-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">Subject</label>
                <input type="text" className="form-control" id="title" name="title" placeholder='e.g. Job Opportunity, Collaboration, Feedback' required />
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input type="text" className="form-control" id="name" name="name" placeholder="Enter your full name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Your Email</label>
                <input type="email" className="form-control" id="email" name="email" placeholder="you@example.com" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" name="message" rows="5"  placeholder="Type your message here..." required></textarea>
              </div>
              <button
                type="submit"
                className="btn"
                style={{
                  backgroundColor: '#ffc107',
                  color: '#212529',
                  border: 'none',
                  transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#e6b800')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#ffc107')}
                disabled={sending}
              >
                {sending ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            {success === true && <p className="mt-3 text-success">Message sent successfully!</p>}
            {success === false && <p className="mt-3 text-danger">Failed to send message. Please try again.</p>}

            <div className="mt-5 text-center">
              <p><FaEnvelope className="me-2" /> amir.kghabrial@gmail.com</p>
              <p><FaPhone className="me-2" /> +20 121 247 1711 (Telegram / WhatsApp / Calls)</p>
              <div className="d-flex justify-content-center mt-3 gap-3">
                <a href="https://github.com/Amir-Kamel" target="_blank" rel="noopener noreferrer" className="text-dark fs-4">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/amir-kamel-kamal/" target="_blank" rel="noopener noreferrer" className="text-primary fs-4">
                  <FaLinkedin />
                </a>
                <a href="https://www.facebook.com/AmirAldhlab" target="_blank" rel="noopener noreferrer" className="text-primary fs-4">
                  <FaFacebook />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
