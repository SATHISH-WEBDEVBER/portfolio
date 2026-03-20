import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/Contact.css";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setIsSubmitting(false);
          toast.success("Message Sent Successfully!", {
            position: "top-right",
            autoClose: 3000,
          });
          form.current.reset();
        },
        (error) => {
          setIsSubmitting(false);
          toast.error("Failed to send message!");
          console.error("EmailJS Error:", error.text);
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <h1 className="contact-title">Contact</h1>
      <h2 className="contact-subtitle">Let's Work Together</h2>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-row">
          <input type="text" name="from_name" placeholder="Full Name" required />
          <input type="email" name="from_email" placeholder="Email Address" required />
        </div>
        <div className="form-row">
          <input type="text" name="phone" placeholder="Phone Number" />
          <input type="text" name="subject" placeholder="Email Subject" />
        </div>
        <textarea name="message" placeholder="Your Message" rows="7" required></textarea>

        <button type="submit" className="send-button" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>

      <ToastContainer />
    </section>
  );
};

export default Contact;