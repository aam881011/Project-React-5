import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div class="contact">
        <div class="container">
          <div class="main-heading">
            <h2>Contact Us</h2>
            <p>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Mauris blandit aliquet elit, eget tincidunt.
            </p>
          </div>
          <div class="content">
            <form action="">
              <input
                class="main-input"
                type="text"
                name="name"
                placeholder="Your Name"
              />
              <input
                class="main-input"
                type="email"
                name="mail"
                placeholder="Your Email"
              />
              <textarea
                class="main-input"
                name="message"
                placeholder="Your Message"
              ></textarea>
              <input type="submit" value="Send Message" />
            </form>
            <div class="info">
              <h4>Get In Touch</h4>
              <span class="phone">+00 123.456.789</span>
              <span class="phone">+00 123.456.789</span>
              <h4>Where We Are</h4>
              <address>
                Awesome Address 17
                <br />
                New York, NYC
                <br />
                123-4567-890
                <br />
                USA
              </address>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
