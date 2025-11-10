import "./PricingSection.css";
import dollarIcon from "../assets/dollar-icon.svg";

const PricingPlan = () => {
  return (
    <section className="pricingplan-section">
      <div className="container">
        <div className="pricingplan-content">
          <h4>Pricing Plan</h4>
          <h3>Find the Perfect Plan for Your Storage Needs</h3>
          <div className="pricing-cards">
            <div className="pricing-card">
              <h5>Small Unit</h5>
              <div className="card-price">
                <img src={dollarIcon} />
                <div className="per-month">
                  <h3>50</h3>
                  <h6>/month</h6>
                </div>
              </div>
              <p>
                Phasellus sollicitudin sapien eu massa accumsan, quis semper
                odio suscipit.
              </p>
              <hr className="card-line" />
              <ul className="price-list">
                <li>
                  <svg
                    className="check-icon"
                    width="14"
                    height="13"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.80757 13C10.5672 13 13.6151 10.0898 13.6151 6.5C13.6151 2.91023 10.5672 0 6.80757 0C3.04794 0 0 2.91023 0 6.5C0 10.0898 3.04794 13 6.80757 13ZM4.02266 5.66446L5.87927 7.43718L9.59249 3.89173L10.4676 4.72727L5.87927 9.10827L3.14757 6.5L4.02266 5.66446Z"
                      fill="currentColor"
                    />
                  </svg>
                  Nam nec ipsum in dolor
                </li>
                <li>
                  <svg
                    className="check-icon"
                    width="14"
                    height="13"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.80757 13C10.5672 13 13.6151 10.0898 13.6151 6.5C13.6151 2.91023 10.5672 0 6.80757 0C3.04794 0 0 2.91023 0 6.5C0 10.0898 3.04794 13 6.80757 13ZM4.02266 5.66446L5.87927 7.43718L9.59249 3.89173L10.4676 4.72727L5.87927 9.10827L3.14757 6.5L4.02266 5.66446Z"
                      fill="currentColor"
                    />
                  </svg>
                  Fusce nec ligula ut arcu
                </li>
                <li>
                  <svg
                    className="check-icon"
                    width="14"
                    height="13"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.80757 13C10.5672 13 13.6151 10.0898 13.6151 6.5C13.6151 2.91023 10.5672 0 6.80757 0C3.04794 0 0 2.91023 0 6.5C0 10.0898 3.04794 13 6.80757 13ZM4.02266 5.66446L5.87927 7.43718L9.59249 3.89173L10.4676 4.72727L5.87927 9.10827L3.14757 6.5L4.02266 5.66446Z"
                      fill="currentColor"
                    />
                  </svg>
                  Aliquam pulvinar arcu in
                </li>
                <li>
                  <svg
                    className="check-icon"
                    width="14"
                    height="13"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.80757 13C10.5672 13 13.6151 10.0898 13.6151 6.5C13.6151 2.91023 10.5672 0 6.80757 0C3.04794 0 0 2.91023 0 6.5C0 10.0898 3.04794 13 6.80757 13ZM4.02266 5.66446L5.87927 7.43718L9.59249 3.89173L10.4676 4.72727L5.87927 9.10827L3.14757 6.5L4.02266 5.66446Z"
                      fill="currentColor"
                    />
                  </svg>
                  Duis gravida enim porta
                </li>
                <li>
                  <svg
                    className="check-icon"
                    width="14"
                    height="13"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.80757 13C10.5672 13 13.6151 10.0898 13.6151 6.5C13.6151 2.91023 10.5672 0 6.80757 0C3.04794 0 0 2.91023 0 6.5C0 10.0898 3.04794 13 6.80757 13ZM4.02266 5.66446L5.87927 7.43718L9.59249 3.89173L10.4676 4.72727L5.87927 9.10827L3.14757 6.5L4.02266 5.66446Z"
                      fill="currentColor"
                    />
                  </svg>
                  Etiam eget libero non ligula
                </li>
              </ul>
              <a
                href="/rentnow"
                className="about-btn btn btn--primary btn--on-dark"
              >
                Rent Now
              </a>
            </div>
            <div className="pricing-card">
              <h5>Medium Unit</h5>
              <div className="card-price">
                <img src={dollarIcon} />
                <div className="per-month">
                  <h3>100</h3>
                  <h6>/month</h6>
                </div>
              </div>
              <p>
                Phasellus sollicitudin sapien eu massa accumsan, quis semper
                odio suscipit.
              </p>
              <hr className="card-line" />
              <ul className="price-list">
                <li>
                  <svg
                    className="check-icon"
                    width="14"
                    height="13"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.80757 13C10.5672 13 13.6151 10.0898 13.6151 6.5C13.6151 2.91023 10.5672 0 6.80757 0C3.04794 0 0 2.91023 0 6.5C0 10.0898 3.04794 13 6.80757 13ZM4.02266 5.66446L5.87927 7.43718L9.59249 3.89173L10.4676 4.72727L5.87927 9.10827L3.14757 6.5L4.02266 5.66446Z"
                      fill="currentColor"
                    />
                  </svg>
                  Nam nec ipsum in dolor
                </li>
                <li>
                  <svg
                    className="check-icon"
                    width="14"
                    height="13"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.80757 13C10.5672 13 13.6151 10.0898 13.6151 6.5C13.6151 2.91023 10.5672 0 6.80757 0C3.04794 0 0 2.91023 0 6.5C0 10.0898 3.04794 13 6.80757 13ZM4.02266 5.66446L5.87927 7.43718L9.59249 3.89173L10.4676 4.72727L5.87927 9.10827L3.14757 6.5L4.02266 5.66446Z"
                      fill="currentColor"
                    />
                  </svg>
                  Fusce nec ligula ut arcu
                </li>
                <li>
                  <svg
                    className="check-icon"
                    width="14"
                    height="13"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.80757 13C10.5672 13 13.6151 10.0898 13.6151 6.5C13.6151 2.91023 10.5672 0 6.80757 0C3.04794 0 0 2.91023 0 6.5C0 10.0898 3.04794 13 6.80757 13ZM4.02266 5.66446L5.87927 7.43718L9.59249 3.89173L10.4676 4.72727L5.87927 9.10827L3.14757 6.5L4.02266 5.66446Z"
                      fill="currentColor"
                    />
                  </svg>
                  Aliquam pulvinar arcu in
                </li>
                <li>
                  <svg
                    className="check-icon"
                    width="14"
                    height="13"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.80757 13C10.5672 13 13.6151 10.0898 13.6151 6.5C13.6151 2.91023 10.5672 0 6.80757 0C3.04794 0 0 2.91023 0 6.5C0 10.0898 3.04794 13 6.80757 13ZM4.02266 5.66446L5.87927 7.43718L9.59249 3.89173L10.4676 4.72727L5.87927 9.10827L3.14757 6.5L4.02266 5.66446Z"
                      fill="currentColor"
                    />
                  </svg>
                  Duis gravida enim porta
                </li>
                <li>
                  <svg
                    className="check-icon"
                    width="14"
                    height="13"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.80757 13C10.5672 13 13.6151 10.0898 13.6151 6.5C13.6151 2.91023 10.5672 0 6.80757 0C3.04794 0 0 2.91023 0 6.5C0 10.0898 3.04794 13 6.80757 13ZM4.02266 5.66446L5.87927 7.43718L9.59249 3.89173L10.4676 4.72727L5.87927 9.10827L3.14757 6.5L4.02266 5.66446Z"
                      fill="currentColor"
                    />
                  </svg>
                  Etiam eget libero non ligula
                </li>
              </ul>
              <a
                href="/rentnow"
                className="about-btn btn btn--primary btn--on-dark"
              >
                Rent Now
              </a>
            </div>

            <div className="pricing-card">
              <h5>Large Unit</h5>
              <div className="card-price">
                <img src={dollarIcon} />
                <div className="per-month">
                  <h3>150</h3>
                  <h6>/month</h6>
                </div>
              </div>
              <p>
                Phasellus sollicitudin sapien eu massa accumsan, quis semper
                odio suscipit.
              </p>
              <hr className="card-line" />
              <ul className="price-list">
                <li>
                  <svg
                    className="check-icon"
                    width="14"
                    height="13"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.80757 13C10.5672 13 13.6151 10.0898 13.6151 6.5C13.6151 2.91023 10.5672 0 6.80757 0C3.04794 0 0 2.91023 0 6.5C0 10.0898 3.04794 13 6.80757 13ZM4.02266 5.66446L5.87927 7.43718L9.59249 3.89173L10.4676 4.72727L5.87927 9.10827L3.14757 6.5L4.02266 5.66446Z"
                      fill="currentColor"
                    />
                  </svg>
                  Nam nec ipsum in dolor
                </li>
                <li>
                  <svg
                    className="check-icon"
                    width="14"
                    height="13"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.80757 13C10.5672 13 13.6151 10.0898 13.6151 6.5C13.6151 2.91023 10.5672 0 6.80757 0C3.04794 0 0 2.91023 0 6.5C0 10.0898 3.04794 13 6.80757 13ZM4.02266 5.66446L5.87927 7.43718L9.59249 3.89173L10.4676 4.72727L5.87927 9.10827L3.14757 6.5L4.02266 5.66446Z"
                      fill="currentColor"
                    />
                  </svg>
                  Fusce nec ligula ut arcu
                </li>
                <li>
                  <svg
                    className="check-icon"
                    width="14"
                    height="13"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.80757 13C10.5672 13 13.6151 10.0898 13.6151 6.5C13.6151 2.91023 10.5672 0 6.80757 0C3.04794 0 0 2.91023 0 6.5C0 10.0898 3.04794 13 6.80757 13ZM4.02266 5.66446L5.87927 7.43718L9.59249 3.89173L10.4676 4.72727L5.87927 9.10827L3.14757 6.5L4.02266 5.66446Z"
                      fill="currentColor"
                    />
                  </svg>
                  Aliquam pulvinar arcu in
                </li>
                <li>
                  <svg
                    className="check-icon"
                    width="14"
                    height="13"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.80757 13C10.5672 13 13.6151 10.0898 13.6151 6.5C13.6151 2.91023 10.5672 0 6.80757 0C3.04794 0 0 2.91023 0 6.5C0 10.0898 3.04794 13 6.80757 13ZM4.02266 5.66446L5.87927 7.43718L9.59249 3.89173L10.4676 4.72727L5.87927 9.10827L3.14757 6.5L4.02266 5.66446Z"
                      fill="currentColor"
                    />
                  </svg>
                  Duis gravida enim porta
                </li>
                <li>
                  <svg
                    className="check-icon"
                    width="14"
                    height="13"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.80757 13C10.5672 13 13.6151 10.0898 13.6151 6.5C13.6151 2.91023 10.5672 0 6.80757 0C3.04794 0 0 2.91023 0 6.5C0 10.0898 3.04794 13 6.80757 13ZM4.02266 5.66446L5.87927 7.43718L9.59249 3.89173L10.4676 4.72727L5.87927 9.10827L3.14757 6.5L4.02266 5.66446Z"
                      fill="currentColor"
                    />
                  </svg>
                  Etiam eget libero non ligula
                </li>
              </ul>
              <a
                href="/rentnow"
                className="about-btn btn btn--primary btn--on-dark"
              >
                Rent Now
              </a>
            </div>
            <div className="pricing-card">
              <h5>Executive Unit</h5>
              <div className="card-price">
                <img src={dollarIcon} />
                <div className="per-month">
                  <h3>200</h3>
                  <h6>/month</h6>
                </div>
              </div>
              <p>
                Phasellus sollicitudin sapien eu massa accumsan, quis semper
                odio suscipit.
              </p>
              <hr className="card-line" />
              <ul className="price-list">
                <li>
                  <svg
                    className="check-icon"
                    width="14"
                    height="13"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.80757 13C10.5672 13 13.6151 10.0898 13.6151 6.5C13.6151 2.91023 10.5672 0 6.80757 0C3.04794 0 0 2.91023 0 6.5C0 10.0898 3.04794 13 6.80757 13ZM4.02266 5.66446L5.87927 7.43718L9.59249 3.89173L10.4676 4.72727L5.87927 9.10827L3.14757 6.5L4.02266 5.66446Z"
                      fill="currentColor"
                    />
                  </svg>
                  Nam nec ipsum in dolor
                </li>
                <li>
                  <svg
                    className="check-icon"
                    width="14"
                    height="13"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.80757 13C10.5672 13 13.6151 10.0898 13.6151 6.5C13.6151 2.91023 10.5672 0 6.80757 0C3.04794 0 0 2.91023 0 6.5C0 10.0898 3.04794 13 6.80757 13ZM4.02266 5.66446L5.87927 7.43718L9.59249 3.89173L10.4676 4.72727L5.87927 9.10827L3.14757 6.5L4.02266 5.66446Z"
                      fill="currentColor"
                    />
                  </svg>
                  Fusce nec ligula ut arcu
                </li>
                <li>
                  <svg
                    className="check-icon"
                    width="14"
                    height="13"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.80757 13C10.5672 13 13.6151 10.0898 13.6151 6.5C13.6151 2.91023 10.5672 0 6.80757 0C3.04794 0 0 2.91023 0 6.5C0 10.0898 3.04794 13 6.80757 13ZM4.02266 5.66446L5.87927 7.43718L9.59249 3.89173L10.4676 4.72727L5.87927 9.10827L3.14757 6.5L4.02266 5.66446Z"
                      fill="currentColor"
                    />
                  </svg>
                  Aliquam pulvinar arcu in
                </li>
                <li>
                  <svg
                    className="check-icon"
                    width="14"
                    height="13"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.80757 13C10.5672 13 13.6151 10.0898 13.6151 6.5C13.6151 2.91023 10.5672 0 6.80757 0C3.04794 0 0 2.91023 0 6.5C0 10.0898 3.04794 13 6.80757 13ZM4.02266 5.66446L5.87927 7.43718L9.59249 3.89173L10.4676 4.72727L5.87927 9.10827L3.14757 6.5L4.02266 5.66446Z"
                      fill="currentColor"
                    />
                  </svg>
                  Duis gravida enim porta
                </li>
                <li>
                  <svg
                    className="check-icon"
                    width="14"
                    height="13"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.80757 13C10.5672 13 13.6151 10.0898 13.6151 6.5C13.6151 2.91023 10.5672 0 6.80757 0C3.04794 0 0 2.91023 0 6.5C0 10.0898 3.04794 13 6.80757 13ZM4.02266 5.66446L5.87927 7.43718L9.59249 3.89173L10.4676 4.72727L5.87927 9.10827L3.14757 6.5L4.02266 5.66446Z"
                      fill="currentColor"
                    />
                  </svg>
                  Etiam eget libero non ligula
                </li>
              </ul>
              <a
                href="/rentnow"
                className="about-btn btn btn--primary btn--on-dark"
              >
                Rent Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;
