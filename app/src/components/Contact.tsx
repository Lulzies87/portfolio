import { useRef } from "react";
import emailjs from "emailjs-com";
import styles from "./Contact.module.scss";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      console.log("No form was found");
    } else {
      const isValid = validateFormFields(form.current);
      if (isValid) {
        emailjs
          .sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_USER_ID
          )
          .then(
            () => {
              console.log("SUCCESS!");
            },
            (error) => {
              console.log("FAILED...", error.text);
            }
          );
      }
    }
  };

  const validateFormFields = (formElement: HTMLFormElement): boolean => {
    const formData = new FormData(formElement);

    if (!formData.get("name")) {
      console.error("Name is required");
      return false;
    }

    const name = (formData.get("name") as string).trim();
    const nameRegex = /^[A-Za-z\u0590-\u05FF\s'`-]+$/;
    if (!nameRegex.test(name)) {
      console.error(
        "Name can only contain letters (English/Hebrew), spaces, apostrophes(-), backticks(`), and hyphens(')"
      );
      return false;
    }

    if (formData.get("email")) {
      const email = formData.get("email") as string;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
        console.error("Please insert a valid email");
      }
    }

    if (!formData.get("message")) {
      console.error("Message is required");
      return false;
    }

    return true;
  };

  return (
    <div className="blue">
      <div id="contact" className="content section">
        <h1>Contact Me</h1>
        <form
          ref={form}
          onSubmit={handleSubmit}
          className={styles.formContainer}
        >
          <div className={styles.formField}>
            <label htmlFor="name">Name*</label>
            <input
              className={styles.inputField}
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
            />
          </div>

          <div className={styles.formField}>
            <label htmlFor="email">Email</label>
            <input
              className={styles.inputField}
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
            />
          </div>

          <div className={styles.formField}>
            <label htmlFor="phone">Phone</label>
            <input
              className={styles.inputField}
              type="tel"
              id="phone"
              name="phone"
              placeholder="Your phone"
            />
          </div>

          <div className={styles.formField}>
            <label htmlFor="message">Message*</label>
            <textarea
              className={styles.inputField}
              id="message"
              name="message"
              cols={30}
              rows={10}
              maxLength={500}
            ></textarea>
          </div>

          <button className={styles.submitButton} type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
