import { useState, useEffect } from "react";
import "./TestimonialsSection.css";
import TestimonialCard from "./TestimonialCard";

const TestimonialsSection = ({ showBackgroundImage }) => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    (async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(
          "https://win25-jsf-assignment.azurewebsites.net/api/testimonials"
        );
        if (!res.ok) throw new Error("Failed to load testimonials");

        const data = await res.json();
        if (isMounted) setTestimonials(data);
      } catch (err) {
        if (isMounted) setError(err.message || "Network error");
      } finally {
        if (isMounted) setLoading(false);
      }
    })();

    return () => {
      isMounted = false;
    };
  }, []);

  const sectionClass = showBackgroundImage
    ? "testimonials-section with-bg"
    : "testimonials-section solid-bg";

  return (
    <section className={sectionClass}>
      <div className="container">
        <div className="testimonials-content">
          <h4>Testimonials</h4>
          <h3>See What Our Clients Have to Say</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris
            ac blandit nisi non sodales augue. Phasellus eget elit gravida.
          </p>

          {loading && (
            <p className="testimonials-loading" aria-live="polite">
              Loading testimonials…
            </p>
          )}
          {error && (
            <p className="testimonials-error" role="alert">
              {error}
            </p>
          )}

          <div className="test-cards">
            {testimonials.map((item) => (
              <TestimonialCard
                key={item.id}
                rating={item.rating}
                comment={item.comment}
                avatarUrl={item.avatarUrl}
                name={item.name}
                companyName={item.companyName}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
