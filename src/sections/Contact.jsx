import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "MS15890724",
        "template_tpm8fpj",
        form.current,
        "OwXJZauf2Mrir_TXA"
      )
      .then(
        (result) => {
          toast.success("Message Sent Successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            pauseOnHover: true,
            draggable: true,
          });
          form.current.reset();
        },
        (error) => {
          toast.error("Failed to send message!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            pauseOnHover: true,
            draggable: true,
          });
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <h1 className="contact-title">Contact</h1>
      <h2 className="contact-subtitle">Let's Work Together</h2>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-row">
          <input
            type="text"
            name="from_name"
            placeholder="Full Name"
            required
          />
          <input
            type="email"
            name="from_email"
            placeholder="Email Address"
            required
          />
        </div>
        <div className="form-row">
          <input type="text" name="phone" placeholder="Phone Number" />
          <input type="text" name="subject" placeholder="Email Subject" />
        </div>
        <textarea
          name="message"
          placeholder="Your Message"
          rows="7"
          required
        ></textarea>

        <button type="submit" className="send-button">
          Send Message
        </button>
      </form>

      {/* Toast Container */}
      <ToastContainer />
    </section>
  );
};

export default Contact;
