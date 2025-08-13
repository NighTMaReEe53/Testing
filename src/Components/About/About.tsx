import { IoIosCode } from "react-icons/io";
import { LuUsersRound } from "react-icons/lu";
import { MdOutlineDraw } from "react-icons/md";
import "./about.css"
import { SiOpenjsfoundation } from "react-icons/si";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="main-title">
        <h2>About Me</h2>
        <p>
          I'm a passionate creative professional with over 4 years of experience
          in design and development. My journey spans from visual storytelling
          to technical implementation, always focusing on creating meaningful
          experiences that resonate with users.
        </p>
      </div>
      <div className="container">
        <div className="box">
          <span>
            <MdOutlineDraw size={35} color="var(--mainColor)" />
          </span>
          <h2>Visual Design</h2>
          <p>
            Creating stunning visual identities and user interfaces that
            captivate and engage audiences.
          </p>
        </div>
        <div className="box">
          <span>
            <IoIosCode size={35} color="var(--mainColor)"/>
          </span>
          <h2>Development</h2>
          <p>
            Building responsive, performant web applications with modern
            technologies and best practices.
          </p>
        </div>
        <div className="box">
          <span>
            <SiOpenjsfoundation size={35}  color="var(--mainColor)"/>
          </span>
          <h2>Creative Strategy</h2>
          <p>
            Developing innovative solutions that align with business goals and
            user needs.
          </p>
        </div>
        <div className="box">
          <span>
            <LuUsersRound size={35}  color="var(--mainColor)"/>
          </span>
          <h2>Collaboration</h2>
          <p>
            Working closely with teams to bring creative visions to life through
            effective communication.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
