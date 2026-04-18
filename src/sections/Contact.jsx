import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/Contact.css";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { language } = useLanguage();
  const t = translations[language];

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
      <h1
        className="contact-title"
        data-aos="fade-up"
        data-aos-duration="700"
      >
        {t.contactTitle}
      </h1>
      <h2
        className="contact-subtitle"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-delay="100"
      >
        {t.contactSubtitle}
      </h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="contact-form"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200"
      >
        <div className="form-row">
          <input
            type="text"
            name="from_name"
            placeholder={t.contactFullName}
            required
          />
          <input
            type="email"
            name="from_email"
            placeholder={t.contactEmail}
            required
          />
        </div>
        <div className="form-row">
          <input
            type="text"
            name="phone"
            placeholder={t.contactPhone}
          />
          <input
            type="text"
            name="subject"
            placeholder={t.contactSubjectField}
          />
        </div>
        <textarea
          name="message"
          placeholder={t.contactMessage}
          rows="7"
          required
        ></textarea>

        <button type="submit" className="send-button" disabled={isSubmitting}>
          {isSubmitting ? t.contactSending : t.contactSend}
        </button>
      </form>

      <ToastContainer />
    </section>
  );
};

export default Contact;
