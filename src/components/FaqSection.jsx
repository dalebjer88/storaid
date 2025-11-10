import { useState, useEffect } from "react";
import "./FaqSection.css";
import FaqItem from "./FaqItem";

const FaqSection = () => {
  const [faqs, setFaqs] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await fetch("https://win25-jsf-assignment.azurewebsites.net/api/faqs");
        const data = await res.json();
        setFaqs(data);
      } catch (err) {
        console.error("Error fetching FAQs:", err);
      }
    };
    fetchFaqs();
  }, []);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-content">
          <div className="faq-text">
            <h4>FAQs</h4>
            <h3>Frequently Asked Questions</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>

          <div className="accordion">
            {faqs.length > 0 ? (
              faqs.map((faq, index) => (
                <FaqItem
                  key={faq.id}
                  question={faq.title}
                  answer={faq.description}
                  isOpen={activeIndex === index}
                  onClick={() => toggleFaq(index)}
                />
              ))
            ) : (
              <p>Loading FAQs...</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
