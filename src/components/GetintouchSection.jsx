import { useState } from "react";
import { useForm } from "../hooks/UseForm";
import getInTouchBg from "../assets/getintouchbg.svg";
import "./GetintouchSection.css";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9+\-\s()]{6,20}$/;

const GetintouchSection = () => {
  const [errors, setErrors] = useState({});
  const [globalError, setGlobalError] = useState("");

  const {
    formData,
    handleChange,
    handleSubmit: submitForm,
    message,
    isValid,
    loading,
  } = useForm(
    { name: "", email: "", phoneNumber: "", subject: "", comment: "" },
    "https://win25-jsf-assignment.azurewebsites.net/api/contact"
  );

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "Valid email required";
    }
    if (formData.phoneNumber && !phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Invalid phone number";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.comment.trim()) newErrors.comment = "Message is required";

    return newErrors;
  };

  const handleInputChange = (e) => {
    handleChange(e);
    const { name } = e.target;

    if (errors[name] || globalError) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
      setGlobalError("");
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setGlobalError("");
      submitForm(e);
    } else {
      setGlobalError("All fields marked with * must be filled in correctly.");
    }
  };

  const fieldClass = (fieldName) => {
    const hasError = Boolean(errors[fieldName]);
    const hasValue = Boolean(formData[fieldName]?.trim());

    let classes = "";
    if (hasValue && !hasError) classes += " is-valid";
    return classes.trim();
  };

  return (
    <section className="getintouch-section">
      <div className="container">
        <div className="getintouch-content">
          <div className="textandpic">
            <h4>Get in Touch</h4>
            <h3>Get Personalized Assistance – Contact Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <img src={getInTouchBg} alt="Get in touch illustration" />
          </div>

          <form className="getintouch-form" onSubmit={onSubmit} noValidate>
            <div className={`form-field ${errors.name ? "has-error" : ""}`}>
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name"
                className={fieldClass("name")}
              />
            </div>

            <div className="form-row">
              <div
                className={`form-field form-pair ${
                  errors.email ? "has-error" : ""
                }`}
              >
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className={fieldClass("email")}
                />
              </div>

              <div
                className={`form-field form-pair ${
                  errors.phoneNumber ? "has-error" : ""
                }`}
              >
                <label htmlFor="phoneNumber">Telephone</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="Telephone"
                  className={fieldClass("phoneNumber")}
                />
              </div>
            </div>

            <div className={`form-field ${errors.subject ? "has-error" : ""}`}>
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="How can we help you"
                className={fieldClass("subject")}
              />
            </div>

            <div className={`form-field ${errors.comment ? "has-error" : ""}`}>
              <label htmlFor="comment">Comments / Questions</label>
              <textarea
                id="comment"
                name="comment"
                value={formData.comment}
                onChange={handleInputChange}
                placeholder="Comments"
                className={fieldClass("comment")}
              ></textarea>
            </div>

            <div className="form-submit">
              <button
                className="btn btn--primary btn--on-light"
                type="submit"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>

              {message && (
                <p className={isValid ? "form-success" : "form-error"}>
                  {message}
                </p>
              )}
              {globalError && <p className="form-error">{globalError}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetintouchSection;
