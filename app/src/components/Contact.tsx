import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import styles from "./Contact.module.scss";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      console.log("No form was found");
    } else {
      const isValid = validateFormFields(form.current);
      if (isValid) {
        setIsSubmitting(true);
        emailjs
          .sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_USER_ID
          )
          .then(
            () => {
              setMessage("Your message was sent. Thank you :)");
              setIsSubmitting(false);
            },
            (error) => {
              setMessage("Failed to send the message. Please try again later.");
              setIsSubmitting(false);
              console.log("Failed to send the message:", error.text);
            }
          );
      }
    }
  };

  const validateFormFields = (formElement: HTMLFormElement): boolean => {
    const formData = new FormData(formElement);
    let isValid = true;

    formElement.querySelectorAll(`.${styles.formNotice}`).forEach((notice) => {
      notice.remove();
    });

    if (!formData.get("name")) {
      isValid = false;
      showErrorNotice("Name is required", formElement.querySelector("#name"));
    } else {
      const name = (formData.get("name") as string).trim();
      const nameRegex = /^[A-Za-z\u0590-\u05FF\s'`-]+$/;
      if (!nameRegex.test(name)) {
        isValid = false;
        showErrorNotice(
          "Name can only contain letters (English/Hebrew), spaces, apostrophes(-), backticks(`), and hyphens(')",
          formElement.querySelector("#name")
        );
      }
    }

    if (formData.get("email")) {
      const email = formData.get("email") as string;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
        isValid = false;
        showErrorNotice(
          "Please insert a valid email",
          formElement.querySelector("#email")
        );
      }
    }

    if (!formData.get("message")) {
      isValid = false;
      showErrorNotice(
        "Message is required",
        formElement.querySelector("#message")
      );
    }

    return isValid;
  };

  const showErrorNotice = (message: string, formField: HTMLElement | null) => {
    if (formField) {
      const notice = document.createElement("p");
      notice.className = styles.formNotice;
      notice.textContent = message;
      formField.parentElement?.appendChild(notice);
    }
  };

  return (
    <div className="background-dark">
      <div id="contact" className="content section">
        <h1>Contact Me</h1>
        {message && <div className={styles.message}>{message}</div>}
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
              disabled={isSubmitting}
            />
          </div>

          <div className={styles.formField}>
            <label htmlFor="email">Email</label>
            <input
              className={styles.inputField}
              id="email"
              name="email"
              placeholder="Your email"
              disabled={isSubmitting}
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
              disabled={isSubmitting}
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
              disabled={isSubmitting}
            ></textarea>
          </div>

          <button
            className={styles.submitButton}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
}
