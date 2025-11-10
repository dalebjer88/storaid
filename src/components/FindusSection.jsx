import "./findusSection.css";
import findusPic from "../assets/findus-img.svg";
import SocialLinks from "../components/SocialLinks";

const FindusSection = () => {
  return (
    <section className="findus-section">
      <div className="container">
        <div className="findus-content">
          <img src={findusPic} className="findus-pic" />
          <div className="findus-text">
            <h3>Find Us On:</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            <a href="tel:+46812312244" className="contact-group">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="icon-bubble"
                  cx="30"
                  cy="30"
                  r="30"
                  fill="currentColor"
                />
                <path
                  className="bubble-icon"
                  d="M20.8322 26.1178C23.1522 30.52 26.89 34.1289 31.4494 36.3689L34.9939 32.9467C35.445 32.5111 36.0733 32.3867 36.6372 32.5578C38.4417 33.1333 40.375 33.4444 42.3889 33.4444C42.8162 33.4444 43.226 33.6083 43.5281 33.9001C43.8303 34.1918 44 34.5874 44 35V40.4444C44 40.857 43.8303 41.2527 43.5281 41.5444C43.226 41.8361 42.8162 42 42.3889 42C35.1249 42 28.1584 39.2139 23.022 34.2546C17.8856 29.2953 15 22.5691 15 15.5556C15 15.143 15.1697 14.7473 15.4719 14.4556C15.774 14.1639 16.1838 14 16.6111 14H22.25C22.6773 14 23.0871 14.1639 23.3892 14.4556C23.6914 14.7473 23.8611 15.143 23.8611 15.5556C23.8611 17.5 24.1833 19.3667 24.7794 21.1089C24.9567 21.6533 24.8278 22.26 24.3767 22.6956L20.8322 26.1178Z"
                  fill="currentColor"
                />
              </svg>

              <div className="icon-text">
                <h5>Call Center</h5>
                <p>+46 8 123 122 44</p>
              </div>
            </a>
            <a href="mailto:info@storaid.se" className="contact-group">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="icon-bubble"
                  cx="30"
                  cy="30"
                  r="30"
                  fill="currentColor"
                />
                <path
                  className="bubble-icon"
                  d="M35.9796 29.5443L44.1813 22.4795V36.5284L35.9796 29.5443ZM25.4111 30.7407L28.2913 33.2195C28.7433 33.6002 29.3326 33.8302 29.9767 33.8302H29.9993H30.0167C30.662 33.8302 31.2514 33.5989 31.7087 33.2155L31.7047 33.2181L34.5849 30.7394L43.3399 38.1941H16.6601L25.4111 30.7407ZM16.6481 20.8045H43.3559L30.5274 31.8512C30.3837 31.9654 30.2048 32.0271 30.0207 32.0257H30.002H29.9847C29.7999 32.027 29.6204 31.9649 29.4766 31.8499L29.478 31.8512L16.6481 20.8045ZM15.8201 22.4782L24.0204 29.543L15.8201 36.5231V22.4782ZM44.6213 19.2512C44.3013 19.0925 43.9252 19 43.5266 19H16.4788C16.0925 19.0015 15.7116 19.0906 15.3654 19.2604L15.3801 19.2538C14.9665 19.4567 14.6183 19.77 14.3745 20.1584C14.1307 20.5467 14.001 20.9949 14 21.4523V37.5437C14.0007 38.195 14.2619 38.8193 14.7264 39.2798C15.1909 39.7403 15.8206 39.9993 16.4774 40H43.5226C44.1794 39.9993 44.8091 39.7403 45.2736 39.2798C45.7381 38.8193 45.9993 38.195 46 37.5437V21.4523C46 20.4912 45.4413 19.6584 44.6279 19.2578L44.6133 19.2512H44.6213Z"
                  fill="currentColor"
                />
              </svg>

              <div className="icon-text">
                <h5>Email Address</h5>
                <p>contact@domain.com</p>
              </div>
            </a>
            <a
              href="https://goo.gl/maps/abcdef"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-group"
            >
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="icon-bubble"
                  cx="30"
                  cy="30"
                  r="30"
                  fill="currentColor"
                />
                <path
                  className="bubble-icon"
                  d="M43.856 41.3428L41.8339 35.6H39.6152L40.8473 41.2H19.1535L20.3856 35.6H18.1668L16.1433 41.3428C15.63 42.8044 16.5397 44 18.1668 44H41.8339C43.4611 44 44.3708 42.8044 43.856 41.3428ZM37.3964 23C37.3964 21.1435 36.6171 19.363 35.2301 18.0503C33.8431 16.7375 31.9619 16 30.0004 16C28.0389 16 26.1577 16.7375 24.7707 18.0503C23.3836 19.363 22.6044 21.1435 22.6044 23C22.6044 29.685 30.0004 37 30.0004 37C30.0004 37 37.3964 29.685 37.3964 23ZM26.0066 23.084C26.007 22.0817 26.4279 21.1206 27.1769 20.412C27.9258 19.7035 28.9414 19.3054 30.0004 19.3054C31.0594 19.3054 32.0751 19.7036 32.8239 20.4123C33.5728 21.1211 33.9935 22.0824 33.9935 23.0847C33.9935 24.087 33.5728 25.0483 32.8239 25.7571C32.0751 26.4658 31.0594 26.864 30.0004 26.864C28.9412 26.864 27.9253 26.4658 27.1763 25.7569C26.4273 25.048 26.0066 24.0865 26.0066 23.084Z"
                  fill="currentColor"
                />
              </svg>

              <div className="icon-text">
                <h5>Location</h5>
                <p>Klarabergsviadukten 90, Stockholm</p>
              </div>
            </a>
            <div className="social-media">
              <h5>Our Social Media</h5>
              <hr className="findus-line" />
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindusSection;
