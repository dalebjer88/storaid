const FaqItem = ({ question, answer, isOpen, onClick }) => {
  const contentId = `faq-${question.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div className={`accordion-item ${isOpen ? "open" : ""}`}>
      <button
        className={`accordion-question ${isOpen ? "active" : ""}`}
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={onClick}
      >
        <span>{question}</span>

        <svg
          className={`accordion-arrow ${isOpen ? "rotated" : ""}`}
          width="17"
          height="11"
          viewBox="0 0 17 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.6164 0.055745L16.9997 1.56726L9.39484 9.73929C9.27298 9.87102 9.12829 9.97538 8.96908 10.0463C8.80987 10.1173 8.63929 10.1535 8.46716 10.1528C8.29503 10.1521 8.12475 10.1146 7.96612 10.0423C7.80748 9.97007 7.66363 9.86456 7.54283 9.73186L-5.36232e-05 1.49899L1.39533 5.59457e-05L8.47494 7.72718L15.6164 0.055745Z"
            fill="currentColor"
          />
        </svg>
      </button>

      <div
        id={contentId}
        className={`accordion-answer ${isOpen ? "show" : ""}`}
        hidden={!isOpen}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FaqItem;
