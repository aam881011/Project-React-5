import "./Skills.css";
import skil1 from "./../../assets/skills-01.jpg";
import skil2 from "./../../assets/skills-02.jpg";

const Skills = () => {
  return (
    <div>
      <div class="our-skills">
        <div class="container">
          <div class="testimonials">
            <h3>Testimonials</h3>
            <p>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Mauris blandit aliquet elit, eget tincidunt.
            </p>
            <div class="content">
              <img src={skil1} alt="" />
              <div class="text">
                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                Mauris blandit aliquet elit, eget tincidunt.
                <p>John Doe, CEO</p>
              </div>
            </div>
            <div class="content">
              <img src={skil2} alt="" />
              <div class="text">
                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                Mauris blandit aliquet elit, eget tincidunt.
                <p>John Doe, CEO</p>
              </div>
            </div>
            <ul class="bullets">
              <li></li>
              <li class="active"></li>
              <li></li>
            </ul>
          </div>
          <div class="skills">
            <h3>Skills</h3>
            <p>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Mauris blandit aliquet elit, eget tincidunt.
            </p>
            <div class="prog-holder">
              <h4>Adobe</h4>
              <div class="prog">
                <span style={{ width: "90%" }} data-progress="90%"></span>
              </div>
            </div>
            <div class="prog-holder">
              <h4>Html &amp; Css</h4>
              <div class="prog">
                <span style={{ width: "85%" }} data-progress="85%"></span>
              </div>
            </div>
            <div class="prog-holder">
              <h4>JavaScript</h4>
              <div class="prog">
                <span style={{ width: "80%" }} data-progress="80%"></span>
              </div>
            </div>
            <div class="prog-holder">
              <h4>Php</h4>
              <div class="prog">
                <span style={{ width: "90%" }} data-progress="90%"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
