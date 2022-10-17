import "./Subscribe.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Subscribe = () => {
  return (
    <div>
      <div class="subscribe">
        <div class="container">
          <form action="">
            <FontAwesomeIcon
              className="far fa-envelope fa-lg"
              icon={faEnvelope}
            />
            <input type="email" name="mail" placeholder="Your Email" />
            <input type="submit" value="Subscribe" />
          </form>
          <p>
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Mauris blan dit aliquet elit, eget tincidunt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
