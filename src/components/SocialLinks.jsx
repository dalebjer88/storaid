import React from "react";
import FacebookIcon from "../assets/facebook-button.svg";
import HumbleIcon from "../assets/humble-button.svg";
import InstagramIcon from "../assets/instagram-button.svg";
import YoutubeIcon from "../assets/youtube-button.svg";

const SocialLinks = () => {
  return (
    <nav className="social-links">
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit us on Facebook"
      >
        <img src={FacebookIcon} alt="Facebook" />
      </a>

      <a
        href="https://x.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit us on X"
      >
        <img src={HumbleIcon} alt="X.com" />
      </a>

      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit us on Instagram"
      >
        <img src={InstagramIcon} alt="Instagram" />
      </a>

      <a
        href="https://www.youtube.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit us on YouTube"
      >
        <img src={YoutubeIcon} alt="YouTube" />
      </a>
    </nav>
  );
};

export default SocialLinks;
