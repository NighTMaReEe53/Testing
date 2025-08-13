import "./skills.css";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <div className="container">
        <h2>Skills & Technologies</h2>
        <div className="content-skills">
          <div className="box">
            <img src="4.png" alt="html" />
            <div className="text">
              <h2>HTML && HTML 5</h2>
              <span>95%</span>
              <div className="progress">
                <p data-width="95%"></p>
              </div>
            </div>
          </div>
          <div className="box">
            <img src="3.png" alt="html" />
            <div className="text">
              <h2>CSS && CSS 3</h2>
              <span>95%</span>
              <div className="progress">
                <p data-width="95%"></p>
              </div>
            </div>
          </div>
          <div className="box">
            <img src="2.png" alt="html" />
            <div className="text">
              <h2>Javascript</h2>
              <span>90%</span>
              <div className="progress">
                <p data-width="90%"></p>
              </div>
            </div>
          </div>
          <div className="box">
            <img src="5.png" alt="html" />
            <div className="text">
              <h2>React</h2>
              <span>95%</span>
              <div className="progress">
                <p data-width="95%"></p>
              </div>
            </div>
          </div>
          <div className="box">
            <img src="6.png" alt="html" />
            <div className="text">
              <h2>Bootstrap</h2>
              <span>95%</span>
              <div className="progress">
                <p data-width="95%"></p>
              </div>
            </div>
          </div>
          <div className="box">
            <img src="7.png" alt="html" />
            <div className="text">
              <h2>Sass</h2>
              <span>90%</span>
              <div className="progress">
                <p data-width="95%"></p>
              </div>
            </div>
          </div>
          <div className="box">
            <img src="8.png" alt="html" />
            <div className="text">
              <h2>Tailwind</h2>
              <span>95%</span>
              <div className="progress">
                <p data-width="95%"></p>
              </div>
            </div>
          </div>
          <div className="box">
            <img src="9.png" alt="html" />
            <div className="text">
              <h2>Typescript</h2>
              <span>90%</span>
              <div className="progress">
                <p data-width="90%"></p>
              </div>
            </div>
          </div>
          <div className="box">
            <img src="10.png" alt="html" />
            <div className="text">
              <h2>Figma</h2>
              <span>85%</span>
              <div className="progress">
                <p data-width="85%"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
