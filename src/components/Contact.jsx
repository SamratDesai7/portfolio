import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

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
        "reZU1z7V956aDc-6X",
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
        },
      );
  };

  return (
    <section
      id="contact"
      className="scroll-mt-20 relative min-h-screen flex items-center overflow-hidden bg-[#0b1220] py-20"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b1220] via-[#0e1a2b] to-[#111827]" />

      <div className="absolute inset-0">
        <div className="absolute right-147 top-0 w-[20%] h-full bg-[#0f1f33] skew-x-[40deg] origin-top-right opacity-60"></div>
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 max-w-4xl mx-auto px-6 w-full text-center"
      >
        <motion.h2
          variants={itemVariant}
          className="text-4xl sm:text-5xl font-bold text-white mb-6"
        >
          Contact <span className="text-[#34d399]">Me</span>
        </motion.h2>

        <motion.p variants={itemVariant} className="text-gray-400 mb-12">
          I’d love to hear from you — whether you have a question, an
          opportunity, or just want to say hello.
        </motion.p>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          variants={containerVariant}
          className="bg-[#111827] border border-gray-800 rounded-xl p-8 text-left"
        >
          {/* Name */}
          <motion.div variants={itemVariant} className="mb-6">
            <label className="block text-gray-300 mb-2">Full Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="e.g., Samrat Desai"
              className="w-full bg-[#0f172a] border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-[#34d399]"
            />
            {errors.user_name && (
              <p className="text-red-400 text-sm mt-2">{errors.user_name}</p>
            )}
          </motion.div>

          {/* Email */}
          <motion.div variants={itemVariant} className="mb-6">
            <label className="block text-gray-300 mb-2">Email Address</label>
            <input
              type="email"
              name="user_email"
              placeholder="e.g., you@example.com"
              className="w-full bg-[#0f172a] border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-[#34d399]"
            />
            {errors.user_email && (
              <p className="text-red-400 text-sm mt-2">{errors.user_email}</p>
            )}
          </motion.div>

          {/* Message */}
          <motion.div variants={itemVariant} className="mb-6">
            <label className="block text-gray-300 mb-2">Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Let me know how I can help you..."
              className="w-full bg-[#0f172a] border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:border-[#34d399] resize-none"
            />
            {errors.message && (
              <p className="text-red-400 text-sm mt-2">{errors.message}</p>
            )}
          </motion.div>

          <motion.button
            variants={itemVariant}
            type="submit"
            disabled={loading}
            className="w-full bg-[#34d399] text-black font-semibold py-3 rounded-md hover:bg-[#2eb885] transition duration-300"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>
      </motion.div>

      <ToastContainer />
    </section>
  );
};

export default Contact;
