import React from "react";
import testIcon from "../assets/test-icon.svg";

const TestimonialCard = ({
  id,
  rating,
  comment,
  avatarUrl,
  name,
  companyName,
}) => {
  return (
    <article
      key={id}
      className="test-card"
      tabIndex="0"
      aria-label={`Testimonial from ${name}`}
    >
      <div className="stars">
        {[...Array(rating)].map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>

      <p className="test-text">{comment}</p>

      <div className="bot-wrapper">
        <div className="test-id">
          <img
            src={avatarUrl}
            alt={`${name}'s avatar`}
            className="avatar-pic"
          />
          <div>
            <h6 className="author">{name}</h6>
            <p className="role">{companyName}</p>
          </div>
        </div>

        <img src={testIcon} alt="quotation mark" />
      </div>
    </article>
  );
};

export default TestimonialCard;
