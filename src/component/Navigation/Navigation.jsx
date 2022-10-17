import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.png";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import "./Navigation.scss";

const Navigation = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("open");
  };

  return (
    <section className="navigation">
      <div className="container">
        <a href="/" className="logoNav">
          <img src={logo} alt="logo" />
        </a>
        <nav>
          <FontAwesomeIcon onClick={showNavbar} icon={faBars} />
          <ul ref={navRef}>
            <li>
              <a href="/" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Portfolio</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
          <div className="form">
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navigation;
