import "./Design.css";
import mobile from "./../../assets/mobile.png";

const Design = () => {
  return (
    <div>
      <div class="design">
        <div class="image">
          <img src={mobile} alt="Mobile" />
        </div>
        <div class="text">
          <h2>Our Design Comes With...</h2>
          <ul>
            <li>Responsive Design</li>
            <li>Modern And Clean Design</li>
            <li>Clean Code</li>
            <li>Browser Friendly</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Design;
