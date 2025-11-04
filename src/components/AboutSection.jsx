import "./AboutSection.css";
import aboutpic from "../assets/aboutpic.svg";
import aboutphone from "../assets/aboutphone-icon.svg";

const AboutSection = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about-content">
          <img src={aboutpic} alt="About Us Pic" />
          <div className="about-info">
            <h4>About Us</h4>
            <h3>Providing a Safe Space for Your Treasured Items</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              molestie nisl sed dui lacinia gravida. Nulla quis nulla leo.
              Mauris ac blandit nisi, non sodales augue. Phasellus eget elit
              gravida.
            </p>
            <div className="vision-mission">
              <div className="vm-pair">
                <h5>Vision</h5>
                <p className="pair-text">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusan tium doloremque laudantium.
                </p>
              </div>
              <div className="vm-pair">
                <h5>Mission</h5>
                <p className="pair-text">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusan tium doloremque laudantium.
                </p>
              </div>
            </div>
            <div className="about-contact">
              <a
                href="/discover-more"
                className="about-btn btn btn--primary btn--on-light"
              >
                Discover More
              </a>
              <div className="phone-pair">
                <a
                  className="about-phone"
                  href="tel:0046812312244"
                  aria-label="Call us at +46 8 123 122 44"
                >
                  <img src={aboutphone} alt="PhoneIcon" />
                </a>
                <div>
                  <h5>More Information</h5>
                  <a className="about-number" href="tel:0046812312244">
                    <h6>+46 8 123 122 44</h6>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
