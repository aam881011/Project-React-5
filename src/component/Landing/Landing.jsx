import "./Landing.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Landing = () => {
  return (
    <div>
      <div class="landing">
        <div class="overlay"></div>
        <div class="text">
          <div class="content">
            <h2>
              Hello World!
              <br />
              We Are Kasper We Make Art.
            </h2>
            <p>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
              Curabitur aliquet quam. Accumsan id imperdiet et, porttitor at
              sem. Mauris blandit aliquet elit, eget tincidunt.
            </p>
          </div>
        </div>
        <FontAwesomeIcon
          className="change-background fa-2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          className="change-background fa-2x"
          icon={faAngleRight}
        />
        <ul class="bullets">
          <li></li>
          <li class="active"></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Landing;
