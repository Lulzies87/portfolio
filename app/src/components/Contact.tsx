import { useRef } from "react";
import emailjs from "emailjs-com";
import styles from "./Contact.module.scss";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current!,
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
              required
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
