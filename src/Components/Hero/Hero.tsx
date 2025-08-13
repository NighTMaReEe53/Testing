import { IoIosArrowDropdown, IoIosCode } from "react-icons/io";
import "./hero.css";
import Naviagtion from "../Naviagtion/Naviagtion";
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
      <Naviagtion />
      <div className="container">
        <div className="content-hero">
          <div className="text">
            <span className="front">
              <IoIosCode size={20} />
              Frontend Developer
            </span>
            <h2>
              Hi, I'm <br /> <span className="neon-text">Yara Kamal</span>
            </h2>
            <p>
              I craft beautiful, responsive web experiences with modern
              technologies. Passionate about creating user-friendly interfaces
              that bring ideas to life with pixel-perfect precision.
            </p>
            <div className="info">
              <span>
                <MdOutlineDraw size={20} />
                Design
              </span>
              <span>
                <IoIosCode size={20} />
                React Js
              </span>
              <span>
                <IoFlashOutline size={20} />
                Performance Optimization
              </span>
            </div>
            <div className="btns">
              <button className="main-btn">View My Project</button>
              <button className="secondary-btn">Download Resume</button>
            </div>
            <div className="social">
              <FaFacebookF size={22} color="var(--whiteColor)" />
              <FaInstagram size={22} color="var(--whiteColor)" />
              <FiGithub size={22} color="var(--whiteColor)" />
              <FiLinkedin size={22} color="var(--whiteColor" />
            </div>
          </div>
          <div className="image">
            <img src="yara.png" alt="Uora" />
          </div>
        </div>
      </div>
      <div className="down">
        <IoIosArrowDropdown size={40} />
      </div>
    </section>
  );
};

export default Hero;
