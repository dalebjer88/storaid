import { useState, useEffect } from "react";

export const useForm = (initialValues, endpoint) => {
  const [formData, setFormData] = useState(initialValues);
  const [message, setMessage] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => setMessage(""), 5000);
    return () => clearTimeout(timer);
  }, [message]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setMessage("");

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          subject: formData.subject,
          comment: formData.comment,
        }),
      });

      const data = await res.json();
      console.log("API response:", data);

      if (res.ok && data.success) {
        setIsValid(true);
        setMessage(data.message || "Your message has been sent!");
        setFormData(initialValues);
      } else {
        setIsValid(false);

        let apiMessage = "Something went wrong.";
        if (data?.message) apiMessage = data.message;
        else if (data?.errors)
          apiMessage = Object.values(data.errors).flat().join(" ");

        setMessage(apiMessage);
      }
    } catch (error) {
      console.error("Form error:", error);
      setIsValid(false);
      setMessage("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    message,
    isValid,
    loading,
  };
};
