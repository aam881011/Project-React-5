import "./Stats.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faFolder } from "@fortawesome/free-regular-svg-icons";

const Stats = () => {
  return (
    <div>
      <div class="stats">
        <div class="container">
          <div class="box">
            <FontAwesomeIcon className="fa-2x" icon={faMugHot} />
            <div class="number">1.236</div>
            <p>Coffee Drinks</p>
          </div>
          <div class="box">
            <FontAwesomeIcon className="fa-2x" icon={faFolder} />
            <div class="number">256</div>
            <p>Completed Projects</p>
          </div>
          <div class="box">
            <FontAwesomeIcon className="fa-2x" icon={faEnvelope} />
            <div class="number">1,743</div>
            <p>Mail Sent</p>
          </div>
          <div class="box">
            <FontAwesomeIcon className="fa-2x" icon={faTrophy} />
            <div class="number">17</div>
            <p>Awards Received</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
