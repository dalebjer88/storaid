import "./WcuSection.css";
import lock from "../assets/lock-icon.svg";
import moneyBag from "../assets/money-bag-icon.svg";
import clean from "../assets/clean-icon.svg";
import clock from "../assets/clock-icon.svg";
import wcuBg from "../assets/wcu-bg.svg";

const WcuSection = ({ bgVariant }) => {
  const sectionClass = `wcu-section ${bgVariant}`;

  return (
    <section className={sectionClass} aria-labelledby="wcu-heading">
      <div className="container">
        <div className="wcu-content">
          <h4 id="wcu-heading">Why Choose Us</h4>

          <div className="wcu-text">
            <h3>Choose Us for Exceptional Storage Solutions</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              molestie nisl sed dui lacinia gravida. Nulla quis nulla leo.
              Mauris ac blandit nisi non sodales augue. Phasellus eget elit
              gravida.
            </p>
          </div>

          <div className="group-pic-container">
            <div className="wcu-tripple">
              <div
                className="wcu-group"
                tabIndex="0"
                aria-label="Security and Safety"
              >
                <img
                  className="wcu-icon"
                  src={lock}
                  alt="Lock icon representing security and safety"
                />
                <div className="wcu-pair">
                  <h5>Security and Safety</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo.
                  </p>
                </div>
              </div>

              <div
                className="wcu-group"
                tabIndex="0"
                aria-label="Flexible and Affordable"
              >
                <img
                  className="wcu-icon"
                  src={moneyBag}
                  alt="Money bag icon representing flexibility and affordability"
                />
                <div className="wcu-pair">
                  <h5>Flexible and Affordable</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo.
                  </p>
                </div>
              </div>

              <div
                className="wcu-group"
                tabIndex="0"
                aria-label="Clean and Well-Maintained Facilities"
              >
                <img
                  className="wcu-icon"
                  src={clean}
                  alt="Cleaning icon representing well-maintained facilities"
                />
                <div className="wcu-pair">
                  <h5>Clean and Well-Maintained Facilities</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo.
                  </p>
                </div>
              </div>

              <div
                className="wcu-group"
                tabIndex="0"
                aria-label="24/7 and Convenient Access"
              >
                <img
                  className="wcu-icon"
                  src={clock}
                  alt="Clock icon representing 24/7 and convenient access"
                />
                <div className="wcu-pair">
                  <h5>24/7 and Convenient Access</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo.
                  </p>
                </div>
              </div>
            </div>

            <img
              src={wcuBg}
              className="wcu-bg-pic"
              alt="Background warehouse illustration"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WcuSection;
