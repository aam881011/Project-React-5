import "./Portfolio.css";
import shuffle01 from "./../../assets/shuffle-01.jpg";
import shuffle02 from "./../../assets/shuffle-02.jpg";
import shuffle03 from "./../../assets/shuffle-03.jpg";
import shuffle04 from "./../../assets/shuffle-04.jpg";
import shuffle05 from "./../../assets/shuffle-05.jpg";
import shuffle06 from "./../../assets/shuffle-06.jpg";
import shuffle07 from "./../../assets/shuffle-07.jpg";
import shuffle08 from "./../../assets/shuffle-08.jpg";

const Portfolio = () => {
  return (
    <div>
      <div class="portfolio">
        <div class="container">
          <div class="main-heading">
            <h2>Portfolio</h2>
            <p>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Mauris blandit aliquet elit, eget tincidunt.
            </p>
          </div>
          <ul class="shuffle">
            <li class="active">All</li>
            <li>App</li>
            <li>Photo</li>
            <li>Web</li>
            <li>Print</li>
          </ul>
        </div>
        <div class="imgs-container">
          <div class="box">
            <img src={shuffle01} alt="" />
            <div class="caption">
              <h4>Awesome Image</h4>
              <p>Photography</p>
            </div>
          </div>
          <div class="box">
            <img src={shuffle02} alt="" />
            <div class="caption">
              <h4>Awesome Image</h4>
              <p>Photography</p>
            </div>
          </div>
          <div class="box">
            <img src={shuffle03} alt="" />
            <div class="caption">
              <h4>Awesome Image</h4>
              <p>Photography</p>
            </div>
          </div>
          <div class="box">
            <img src={shuffle04} alt="" />
            <div class="caption">
              <h4>Awesome Image</h4>
              <p>Photography</p>
            </div>
          </div>
          <div class="box">
            <img src={shuffle05} alt="" />
            <div class="caption">
              <h4>Awesome Image</h4>
              <p>Photography</p>
            </div>
          </div>
          <div class="box">
            <img src={shuffle06} alt="" />
            <div class="caption">
              <h4>Awesome Image</h4>
              <p>Photography</p>
            </div>
          </div>
          <div class="box">
            <img src={shuffle07} alt="" />
            <div class="caption">
              <h4>Awesome Image</h4>
              <p>Photography</p>
            </div>
          </div>
          <div class="box">
            <img src={shuffle08} alt="" />
            <div class="caption">
              <h4>Awesome Image</h4>
              <p>Photography</p>
            </div>
          </div>
        </div>
        <a href="/" class="more">
          More
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
