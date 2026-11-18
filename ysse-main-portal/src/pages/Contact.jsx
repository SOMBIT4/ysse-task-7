import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import headerImg from "../assets/images/header-contact.jpg";
import "./Contact.css";

const initialForm = {
  fullName: "",
  email: "",
  subject: "",
  message: "",
};

function validate(values) {
  const errors = {};

  if (!values.fullName.trim()) {
    errors.fullName = "Full name is required.";
  }

  if (!values.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.subject.trim()) {
    errors.subject = "Subject is required.";
  }

  if (!values.message.trim()) {
    errors.message = "Message is required.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters long.";
  }

  return errors;
}

function Contact() {
  const [values, setValues] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setValues(initialForm);
    } else {
      setSubmitted(false);
    }
  };

  return (
    <div>
      <PageHeader
        eyebrow="Contact Us"
        title="Get in Touch With YSSE"
        description="Have a question, inquiry, or want to get involved? Send us a message below."
        image={headerImg}
        imageAlt="Support representative holding a headset"
        reverse
      />

      <section className="section section-light">
        <div className="container contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">Contact Information</h2>
            <p className="section-subtitle">
              Reach out to us directly, or use the inquiry form — our team
              will get back to you as soon as possible.
            </p>
            <ul className="contact-info-list">
              <li>
                <strong>Location</strong>
                <span>Dhaka, Bangladesh</span>
              </li>
              <li>
                <strong>Email</strong>
                <span>hello@ysse.org (placeholder)</span>
              </li>
              <li>
                <strong>Phone</strong>
                <span>+880 000-000000 (placeholder)</span>
              </li>
              <li>
                <strong>Office Hours</strong>
                <span>Mon – Fri, 9:00 AM – 5:00 PM</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="contact-form-card"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  className="form-success"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="form-success-icon">✓</div>
                  <h3>Message Sent!</h3>
                  <p>
                    Thank you for reaching out. This is a frontend-only demo
                    form, so your message was not actually sent or stored
                    anywhere.
                  </p>
                  <Button onClick={() => setSubmitted(false)} variant="outline">
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  className="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={values.fullName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={errors.fullName ? "input-error" : ""}
                    />
                    {errors.fullName && <span className="field-error">{errors.fullName}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={errors.email ? "input-error" : ""}
                    />
                    {errors.email && <span className="field-error">{errors.email}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={values.subject}
                      onChange={handleChange}
                      placeholder="What is this about?"
                      className={errors.subject ? "input-error" : ""}
                    />
                    {errors.subject && <span className="field-error">{errors.subject}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={values.message}
                      onChange={handleChange}
                      placeholder="Write your message here..."
                      className={errors.message ? "input-error" : ""}
                    />
                    {errors.message && <span className="field-error">{errors.message}</span>}
                  </div>

                  <Button type="submit">Send Message</Button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
