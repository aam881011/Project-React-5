import "./Video.css";
import video from "./../../assets/awesome-video.mp4";

const Video = () => {
  return (
    <div>
      <div class="video">
        <video autoplay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <div class="text">
          <h2>Super Awesome Video Here</h2>
          <p>Its All You Need</p>
          <button>See More</button>
        </div>
      </div>
    </div>
  );
};

export default Video;
