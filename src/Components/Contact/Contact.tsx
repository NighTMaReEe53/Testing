import { MdOutlineMail } from "react-icons/md";
import "./contact.css";
import { motion } from "motion/react";
import { CiLocationOn, CiPhone } from "react-icons/ci";
import { IoMdSend } from "react-icons/io";
const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="main-title">
        <motion.h2
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          Contact
        </motion.h2>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          Ready to bring your vision to life? I'd love to hear about your
          project and explore how we can create something amazing together.
        </motion.p>
      </div>
      <div className="container">
        <motion.div
          initial={{ left: 10, opacity: 0 }}
          whileInView={{ left: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text"
        >
          <h2>Get In Touch</h2>
          <p>
            Whether you have a project in mind, want to collaborate, or just
            want to say hello, I'm always excited to connect with fellow
            creatives and innovators.
          </p>
          <div className="info">
            <span>
              <MdOutlineMail />
            </span>
            <div className="item">
              <h2>Email</h2>
              <p>Uora@portfolio.com</p>
            </div>
          </div>
          <div className="info">
            <span>
              <CiPhone />
            </span>
            <div className="item">
              <h2>Phone</h2>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="info">
            <span>
              <CiLocationOn />
            </span>
            <div className="item">
              <h2>Location</h2>
              <p>San Francisco, CA</p>
            </div>
          </div>
        </motion.div>
        <motion.form
          onSubmit={(e) => e.preventDefault()}
          initial={{ right: 10, opacity: 0 }}
          whileInView={{ right: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your Name !?" />
          <label htmlFor="email">Email</label>
          <input type="text" id="email" placeholder="Your@gmail.com !?" />
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Your Message"></textarea>
          <button className="main-btn">
            Send <IoMdSend size={20} /> 
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
