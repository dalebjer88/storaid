import { useState, useEffect } from "react";
import "./SubscribeSection.css";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SubscribeSection = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!message) return;

    const timer = setTimeout(() => {
      setMessage("");
    }, 5000);

    return () => clearTimeout(timer);
  }, [message]);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    if (emailRegex.test(newEmail)) {
      setIsValid(true);

      if (message === "Please enter a valid email address") {
        setMessage("");
      }
    }

    if (newEmail === "") {
      setIsValid(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailRegex.test(email)) {
      setIsValid(false);
      setMessage("Please enter a valid email address");
      return;
    }

    setIsValid(true);

    try {
      setLoading(true);
      setMessage("");

      const res = await fetch(
        "https://win25-jsf-assignment.azurewebsites.net/api/subscribe",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      const data = await res.json();

      if (res.ok && data.success) {
        setIsValid(true);
        setMessage("Subscription successful!");
        setEmail("");
      } else if (res.status === 400) {
        setIsValid(false);
        setMessage("Invalid email");
      } else {
        setIsValid(false);
        setMessage("Server error, please try again.");
      }
    } catch {
      setIsValid(false);
      setMessage("Network error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="subscribe-section">
      <div className="container">
        <div className="subscribe-content">
          <div className="subscribe-textblock">
            <h3 className="subscribe-title">Subscribe Our Newsletter</h3>
            <p className="subscribe-description">
              Subscribe to our newsletter to receive early discount offers,
              updates and info
            </p>
          </div>

          <form className="subscribe-form" onSubmit={handleSubmit} noValidate>
            <div className="input-wrapper">
              <input
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                required
                className={`subscribe-input ${!isValid ? "invalid" : ""} ${
                  email ? "has-value" : ""
                }`}
                autoComplete="email"
                placeholder={`Enter your email${!isValid ? " *" : ""}`}
              />
              {message && (
                <p
                  className={`feedback-message ${
                    isValid ? "success" : "error"
                  }`}
                  aria-live="polite"
                >
                  {message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="btn btn--primary btn--on-light"
              disabled={loading}
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
