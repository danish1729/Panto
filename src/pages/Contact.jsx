import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";

const validate = (form) => {
  const errors = {};
  if (!form.name.trim()) errors.name = "Name is required";
  if (!form.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)) {
    errors.email = "Invalid email address";
  }
  if (!form.message.trim()) errors.message = "Message is required";
  return errors;
};

const shakeVariant = {
  error: { x: [-8, 8, -8, 8, 0], transition: { duration: 0.4 } },
  normal: { x: 0 },
};

const fadeVariant = {
  hidden: { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const updated = { ...form, [e.target.name]: e.target.value };
    setForm(updated);
    setErrors(validate(updated));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      // API call here if needed
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#f7f7f7] flex flex-col items-center justify-center px-4 py-12 pt-[100px]">
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-10">
          <h2 className="text-3xl font-bold text-[#1e1e1e] mb-2 font-gilroy text-center">
            Contact Us
          </h2>
          <p className="text-[#E58411] font-gilroy text-center mb-8 font-semibold">
            We'd love to hear from you!
          </p>
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-[#1e1e1e] font-gilroy text-lg"
            >
              Thank you for reaching out! We'll get back to you soon.
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <motion.div
                animate={errors.name ? "error" : "normal"}
                variants={shakeVariant}
              >
                <label
                  htmlFor="name"
                  className="block text-[#1e1e1e] font-gilroy font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg font-gilroy focus:outline-none focus:ring-2 ${
                    errors.name
                      ? "border-red-500 focus:ring-red-400"
                      : "border-[#E58411] focus:ring-[#E58411]"
                  }`}
                  placeholder="Your Name"
                />
                <AnimatePresence>
                  {errors.name && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={fadeVariant}
                      className="text-red-500 font-gilroy text-sm mt-2"
                    >
                      {errors.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Email Field */}
              <motion.div
                animate={errors.email ? "error" : "normal"}
                variants={shakeVariant}
              >
                <label
                  htmlFor="email"
                  className="block text-[#1e1e1e] font-gilroy font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg font-gilroy focus:outline-none focus:ring-2 ${
                    errors.email
                      ? "border-red-500 focus:ring-red-400"
                      : "border-[#E58411] focus:ring-[#E58411]"
                  }`}
                  placeholder="you@email.com"
                />
                <AnimatePresence>
                  {errors.email && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={fadeVariant}
                      className="text-red-500 font-gilroy text-sm mt-2"
                    >
                      {errors.email}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Message Field */}
              <motion.div
                animate={errors.message ? "error" : "normal"}
                variants={shakeVariant}
              >
                <label
                  htmlFor="message"
                  className="block text-[#1e1e1e] font-gilroy font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg font-gilroy focus:outline-none focus:ring-2 ${
                    errors.message
                      ? "border-red-500 focus:ring-red-400"
                      : "border-[#E58411] focus:ring-[#E58411]"
                  }`}
                  placeholder="Type your message here..."
                />
                <AnimatePresence>
                  {errors.message && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={fadeVariant}
                      className="text-red-500 font-gilroy text-sm mt-2"
                    >
                      {errors.message}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.button
                type="submit"
                whileTap={{ scale: 0.97 }}
                className="w-full py-3 bg-[#E58411] text-white font-bold rounded-lg font-gilroy text-lg hover:bg-[#cf730c] transition"
              >
                Send Message
              </motion.button>
            </form>
          )}
          <div className="mt-10 text-center font-gilroy text-[#1e1e1e]">
            <div className="mb-2">
              <span className="font-semibold">Email:</span> hello@panto.com
            </div>
            <div>
              <span className="font-semibold">Phone:</span> +1 234 567 890
            </div>
            <div className="mt-2 text-[#E58411] font-semibold">
              123 Panto Street, Furniture City, Country
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
