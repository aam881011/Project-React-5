import "./Pricing.css";

const Pricing = () => {
  return (
    <div>
      <div class="pricing">
        <div class="container">
          <div class="main-heading">
            <h2>Pricing</h2>
            <p>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Mauris blandit aliquet elit, eget tincidunt.
            </p>
          </div>
          <div class="plans">
            <div class="plan">
              <div class="head">
                <h3>Basic</h3>
                <span>19</span>
              </div>
              <ul>
                <li>Feature No 1</li>
                <li>Extra Feature</li>
                <li>Extra Feature No 2</li>
                <li>Feature</li>
              </ul>
              <div class="foot">
                <a href="/">Buy Now</a>
              </div>
            </div>
            <div class="plan">
              <div class="head">
                <h3>Premium</h3>
                <span>29</span>
              </div>
              <ul>
                <li>Feature No 1</li>
                <li>Extra Feature</li>
                <li>Extra Feature No 2</li>
                <li>Feature</li>
              </ul>
              <div class="foot">
                <a href="/">Buy Now</a>
              </div>
            </div>
            <div class="plan">
              <div class="head">
                <h3>Pro</h3>
                <span>39</span>
              </div>
              <ul>
                <li>Feature No 1</li>
                <li>Extra Feature</li>
                <li>Extra Feature No 2</li>
                <li>Feature</li>
              </ul>
              <div class="foot">
                <a href="/">Buy Now</a>
              </div>
            </div>
            <div class="plan">
              <div class="head">
                <h3>Platinum</h3>
                <span>49</span>
              </div>
              <ul>
                <li>Feature No 1</li>
                <li>Extra Feature</li>
                <li>Extra Feature No 2</li>
                <li>Feature</li>
              </ul>
              <div class="foot">
                <a href="/">Buy Now</a>
              </div>
            </div>
          </div>
          <p class="contact-text">Contact us if you have special request</p>
          <a href="/" class="contact-link">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
