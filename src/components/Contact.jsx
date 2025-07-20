import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = (formData) => {
    const newErrors = {};

    if (!formData.get("user_name").trim()) {
      newErrors.user_name = "Name is required";
    }

    const email = formData.get("user_email").trim();
    if (!email) {
      newErrors.user_email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.user_email = "Email is invalid";
    }

    if (!formData.get("message").trim()) {
      newErrors.message = "Message cannot be empty";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (loading) return;

    const formData = new FormData(form.current);
    if (!validate(formData)) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_vnygvw9",
        "template_1l8ec3r",
        form.current,
        "reZU1z7V956aDc-6X"
      )
      .then(
        () => {
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 3000,
          });
          form.current.reset();
          setErrors({});
          setLoading(false);
        },
        () => {
          toast.error("Failed to send message. Try again later.", {
            position: "top-right",
            autoClose: 3000,
          });
          setLoading(false);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2 className="section-title">Contact Me</h2>
        <p className="contact-subtext">
          I’d love to hear from you — whether you have a question, an
          opportunity, or just want to say hello.
        </p>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="e.g., Samrat Desai"
            />
            {errors.user_name && (
              <p className="error-text">{errors.user_name}</p>
            )}
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="user_email"
              placeholder="e.g., you@example.com"
            />
            {errors.user_email && (
              <p className="error-text">{errors.user_email}</p>
            )}
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Let me know how I can help you..."
            />
            {errors.message && (
              <p className="error-text">{errors.message}</p>
            )}
          </div>

          <button type="submit" className="send-btn" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
