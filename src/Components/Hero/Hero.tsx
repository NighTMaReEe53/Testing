import { IoIosArrowDropdown, IoIosCode } from "react-icons/io";
import "./hero.css";
import { MdOutlineDraw } from "react-icons/md";
import { IoFlashOutline } from "react-icons/io5";
import {
  FaCss3Alt,
  FaFacebookF,
  FaHtml5,
  FaInstagram,
  FaJs,
  FaReact,
} from "react-icons/fa";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="home" id="home">
      <span className="js">
        <FaJs size={100} color="var(--mainColor)" />
      </span>
      <span className="css">
        <FaCss3Alt size={100} color="var(--mainColor)" />
      </span>
      <span className="react">
        <FaReact size={100} color="var(--mainColor)" />
      </span>
      <span className="html">
        <FaHtml5 size={100} color="var(--mainColor)" />
      </span>
      <div className="container">
        <div className="content-hero">
          <div className="text">
            <motion.span
              className="front"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <IoIosCode size={20} />
              Frontend Developer
            </motion.span>
            <motion.h2
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Hi, I'm <br /> <span className="neon-text">Yara Kamal</span>
            </motion.h2>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              I craft beautiful, responsive web experiences with modern
              technologies. Passionate about creating user-friendly interfaces
              that bring ideas to life with pixel-perfect precision.
            </motion.p>
            <div className="info">
              <motion.span
                initial={{ x: 3, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <MdOutlineDraw size={20} />
                Design
              </motion.span>
              <motion.span
                initial={{ y: 3, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <IoIosCode size={20} />
                React Js
              </motion.span>
              <motion.span
                initial={{ x: -3, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <IoFlashOutline size={20} />
                Performance Optimization
              </motion.span>
            </div>
            <div className="btns">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="main-btn"
              >
                View My Project
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="secondary-btn"
              >
                Download Resume
              </motion.button>
            </div>
            <div className="social">
              <motion.span initial={{opacity: 0, x: -10}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.3}}>
                <FaFacebookF size={22} color="var(--whiteColor)" />
              </motion.span>
              <motion.span initial={{opacity: 0, x: -20}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.3, delay: 0.2}}>
                <FaInstagram size={22} color="var(--whiteColor)" />
              </motion.span>
              <motion.span initial={{opacity: 0, x: -30}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.3, delay: 0.4}}>
                <FiGithub size={22} color="var(--whiteColor)" />
              </motion.span>
              <motion.span initial={{opacity: 0, x: -40}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.3, delay: 0.6}}>
                <FiLinkedin size={22} color="var(--whiteColor" />
              </motion.span>
            </div>
          </div>
          <div className="image">
            <img src="yara.png" alt="Uora" />
          </div>
        </div>
      </div>
      <a href="#about" className="down">
        <IoIosArrowDropdown size={40} />
      </a>
    </section>
  );
};

export default Hero;
