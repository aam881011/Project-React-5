import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import logo from "./../../assets/logo.png";
import navIcon1 from "../../assets/nav-icon1.svg";
import navIcon2 from "../../assets/nav-icon2.svg";
import navIcon3 from "../../assets/nav-icon3.svg";

const Footer = () => {
  return (
    <div>
      <div class="footer">
        <div class="container">
          <img src={logo} alt="Logo" />
          <p>We Are Social</p>
          <div class="social-icons">
            <a href="/">
              <img src={navIcon1} alt="" />
            </a>
            <a href="/">
              <img src={navIcon2} alt="" />
            </a>
            <FontAwesomeIcon className="" icon={faHome} />
            <a href="/">
              <img src={navIcon3} alt="" />
            </a>
          </div>
          <p class="copyright">
            &copy; 2021 <span>Kasper</span> All Right Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
