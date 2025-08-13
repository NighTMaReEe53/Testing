import { IoIosCode } from "react-icons/io";
import { LuUsersRound } from "react-icons/lu";
import { MdOutlineDraw } from "react-icons/md";
import "./about.css";
import { SiOpenjsfoundation } from "react-icons/si";
import { motion } from "motion/react";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="main-title">
        <motion.h2
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          I'm a passionate creative professional with over 4 years of experience
          in design and development. My journey spans from visual storytelling
          to technical implementation, always focusing on creating meaningful
          experiences that resonate with users.
        </motion.p>
      </div>
      <div className="container">
        <motion.div initial={{left: 5, opacity: 0}} whileInView={{left:0, opacity: 1}} transition={{duration: 0.5}} className="box">
          <span>
            <MdOutlineDraw size={35} color="var(--mainColor)" />
          </span>
          <h2>Visual Design</h2>
          <p>
            Creating stunning visual identities and user interfaces that
            captivate and engage audiences.
          </p>
        </motion.div>
        <motion.div className="box" initial={{left: -5, opacity: 0}} whileInView={{left:0, opacity: 1}} transition={{duration: 0.5, delay: 0.2}}>
          <span>
            <IoIosCode size={35} color="var(--mainColor)" />
          </span>
          <h2>Development</h2>
          <p>
            Building responsive, performant web applications with modern
            technologies and best practices.
          </p>
        </motion.div>
        <motion.div className="box" initial={{right: 5, opacity: 0}} whileInView={{right:0, opacity: 1}} transition={{duration: 0.5, delay: 0.4}}>
          <span>
            <SiOpenjsfoundation size={35} color="var(--mainColor)" />
          </span>
          <h2>Creative Strategy</h2>
          <p>
            Developing innovative solutions that align with business goals and
            user needs.
          </p>
        </motion.div>
        <motion.div className="box" initial={{right: -5, opacity: 0}} whileInView={{right:0, opacity: 1}} transition={{duration: 0.6}}>
          <span>
            <LuUsersRound size={35} color="var(--mainColor)" />
          </span>
          <h2>Collaboration</h2>
          <p>
            Working closely with teams to bring creative visions to life through
            effective communication.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
