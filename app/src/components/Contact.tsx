import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <div className="blue">
      <div id="contact" className="content">
        <h1>Contact Me</h1>
        <form className={styles.formContainer}>
          <div className={styles.formField}>
            <label htmlFor="name">Name*</label>
            <input
              className={styles.inputField}
              type="text"
              id="name"
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
              placeholder="Your email"
            />
          </div>

          <div className={styles.formField}>
            <label htmlFor="phone">Phone</label>
            <input
              className={styles.inputField}
              type="tel"
              id="phone"
              placeholder="Your phone"
            />
          </div>

          <div className={styles.formField}>
            <label htmlFor="message">Message*</label>
            <textarea
              className={styles.inputField}
              name="message"
              id="message"
              cols={30}
              rows={10}
              maxLength={500}
            ></textarea>
          </div>

          <button>Send</button>
        </form>
      </div>
    </div>
  );
}
