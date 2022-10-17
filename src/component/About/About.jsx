import "./About.css";
import about from "./../../assets/about.png";

const About = () => {
  return (
    <div>
      <div class="about">
        <div class="container">
          <div class="main-heading">
            <h2>About Us</h2>
            <p>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Mauris blandit aliquet elit, eget tincidunt.
            </p>
          </div>
          <img src={about} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
