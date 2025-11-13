import { useState } from "react";
import { useForm } from "../hooks/UseForm";
import BookingUnitBg from "../assets/bookingunitbg.svg";
import "./BookingunitSection.css";

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,63}$/i;
const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]{2,}$/;

const BookingunitSection = () => {
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
    { name: "", email: "", selectedUnit: "", purpose: "" },
    "https://win25-jsf-assignment.azurewebsites.net/api/booking"
  );

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!nameRegex.test(formData.name.trim())) {
      newErrors.name = "No numbers and at least 2 letters";
    }

    if (!formData.email.trim() || !emailRegex.test(formData.email))
      newErrors.email = "Valid email required";
    if (formData.selectedUnit === "")
      newErrors.selectedUnit = "Please select a unit";
    if (!formData.purpose.trim()) newErrors.purpose = "Purpose is required";

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
    const value = formData[fieldName];
    const hasValue =
      fieldName === "selectedUnit" ? value !== "" : Boolean(value?.trim());
    return hasValue && !hasError ? "is-valid" : "";
  };

  return (
    <section className="bookingunit-section">
      <div className="container">
        <div className="bookingunit-content">
          <div className="textandpic">
            <h4>Booking Unit</h4>
            <h3>Book Your Storage Unit Now & Simplify Your Life!</h3>
            <img src={BookingUnitBg} alt="Booking Unit Illustration" />
          </div>

          <div className="pandform">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              molestie nisl sed dui lacinia gravida. Nulla quis nulla leo.
              Mauris ac blandit nisi non sodales augue. Phasellus eget elit
              gravida.
            </p>

            <form className="bookingunit-form" onSubmit={onSubmit} noValidate>
              <div className="form-row">
                <div
                  className={`form-field form-pair ${
                    errors.name ? "has-error" : ""
                  }`}
                >
                  <div className="label-wrapper">
                    <label htmlFor="name">Your Name</label>
                    {errors.name && (
                      <span className="label-error">{errors.name}</span>
                    )}
                  </div>
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

                <div
                  className={`form-field form-pair ${
                    errors.email ? "has-error" : ""
                  }`}
                >
                  <div className="label-wrapper">
                    <label htmlFor="email">Email</label>
                    {errors.email && (
                      <span className="label-error">{errors.email}</span>
                    )}
                  </div>
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
              </div>

              <div
                className={`form-field ${
                  errors.selectedUnit ? "has-error" : ""
                }`}
              >
                <div className="label-wrapper">
                  <label htmlFor="selectedUnit">Choose Unit</label>
                  {errors.selectedUnit && (
                    <span className="label-error">{errors.selectedUnit}</span>
                  )}
                </div>
                <select
                  id="selectedUnit"
                  name="selectedUnit"
                  value={formData.selectedUnit}
                  onChange={handleInputChange}
                  className={fieldClass("selectedUnit")}
                >
                  <option value="">Choose Unit</option>
                  <option value="Small Unit">Small Unit</option>
                  <option value="Medium Unit">Medium Unit</option>
                  <option value="Large Unit">Large Unit</option>
                  <option value="Premium Unit">Executive Unit</option>
                </select>
              </div>

              <div
                className={`form-field ${errors.purpose ? "has-error" : ""}`}
              >
                <div className="label-wrapper">
                  <label htmlFor="purpose">Storage purpose</label>
                  {errors.purpose && (
                    <span className="label-error">{errors.purpose}</span>
                  )}
                </div>
                <textarea
                  id="purpose"
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleInputChange}
                  placeholder="Describe your storage purpose"
                  className={fieldClass("purpose")}
                ></textarea>
              </div>

              <div className="form-submit">
                <button
                  className="btn btn--primary btn--on-light"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Book Unit"}
                </button>

                {message && (
                  <p className={isValid ? "form-success" : "form-error"}>
                    {message}
                  </p>
                )}
                {globalError && (
                  <p className="form-error" aria-live="polite">
                    {globalError}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingunitSection;
