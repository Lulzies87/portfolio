import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { server } from "../../apiConfig";
import { FaWhatsappSquare, FaLinkedin } from "react-icons/fa";
import styles from "./Contact.module.scss";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!formRef.current) throw new Error("Couldn't find form reference.");

      gsap.fromTo(
        formRef.current.children,
        {
          opacity: 0,
          scale: 0,
          immediateRender: false,
        },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          duration: 0.8,
          scrollTrigger: {
            trigger: formRef.current,
            toggleActions: "restart none none none",
          },
        }
      );
    });

    return () => {
      ctx.revert();
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) throw new Error("Couldn't find form reference.");
    const isValid = validateFormFields(formRef.current);

    if (isValid) {
      setIsSubmitting(true);

      try {
        await server.post("/contact", formData);
        setStatus("Your message was sent. Thank you :)");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } catch (error) {
        setStatus("Failed to send the message. Please try again later.");
      } finally {
        setIsSubmitting(false);
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
    <div id="contact" className={`${styles.contactContainer} content`}>
      <h1>
        Contact Me<span className="text-accent">.</span>
      </h1>
      
      <a
        className={styles.contactContainer__contactButton}
        href="https://wa.me/+972532276659"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsappSquare color="#25D366" size="32px" />
      </a>
      <a
        className={styles.contactContainer__contactButton}
        href="https://www.linkedin.com/in/lilachelayza/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin color="#0A66C2" size="32px" />
      </a>

      {status && <div className={styles.status}>{status}</div>}
      <form
        ref={formRef}
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
            onChange={handleChange}
          />
        </div>

        <div className={styles.formField}>
          <label htmlFor="email">Email</label>
          <input
            className={styles.inputField}
            id="email"
            name="email"
            placeholder="Your email"
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
  );
}
