import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vnygvw9",
        "template_1l8ec3r",
        form.current,
        "reZU1z7V956aDc-6X"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success(" Message sent successfully!", {
            position: "top-right",
            autoClose: 3000,
          });
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error(" Failed to send message. Try again later.", {
            position: "top-right",
            autoClose: 3000,
          });
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
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="e.g., Samrat Desai"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="user_email"
              placeholder="e.g., you@example.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Let me know how I can help you..."
              required
            />
          </div>
          <button type="submit" className="send-btn">
            Send Message
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
