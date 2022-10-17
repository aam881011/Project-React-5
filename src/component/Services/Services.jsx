import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faCog,
  faDesktop,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div>
      <div class="services">
        <div class="container">
          <div class="main-heading">
            <h2>Services</h2>
            <p>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Mauris blandit aliquet elit, eget tincidunt.
            </p>
          </div>
          <div class="services-container">
            <div class="srv-box">
              <FontAwesomeIcon className="fa-3x" icon={faDesktop} />
              <div class="text">
                <h3>Vorem amet intuitive</h3>
                <p>
                  Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                  sem. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar
                  a. Curabitur aliquet quam.
                </p>
              </div>
            </div>
            <div class="srv-box">
              <FontAwesomeIcon className="fa-3x" icon={faCog} />
              <div class="text">
                <h3>Vorem amet intuitive</h3>
                <p>
                  Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                  sem. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar
                  a. Curabitur aliquet quam.
                </p>
              </div>
            </div>
            <div class="srv-box">
              <FontAwesomeIcon className="fa-3x" icon={faPencil} />
              <div class="text">
                <h3>Vorem amet intuitive</h3>
                <p>
                  Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                  sem. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar
                  a. Curabitur aliquet quam.
                </p>
              </div>
            </div>
            <div class="srv-box">
              <FontAwesomeIcon className="fa-3x" icon={faCamera} />
              <div class="text">
                <h3>Vorem amet intuitive</h3>
                <p>
                  Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                  sem. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar
                  a. Curabitur aliquet quam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
