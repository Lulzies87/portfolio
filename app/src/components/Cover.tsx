import { useEffect, useState } from "react";
import styles from "./Cover.module.scss";

export default function Cover() {
  const [currentLine, setCurrentLine] = useState(0);
  const [animate, setAnimate] = useState(false);

  const lines = [
    "I'm a mother, wife, coder, and gamer.",
    "Motherhood inspired me to strive to be the best role model for my daughter, leading me into a new career as a Fullstack Developer.",
    "Recently, I completed a year-long Full Stack course where my curiosity and passion for coding grew immensely.",
    "Currently, I'm developing this site as my portfolio and actively seeking opportunities to contribute and grow in the tech industry.",
    "I am a lifelong learner who prefers acquiring the knowledge needed to manage things independently, efficiently, and thoroughly.",
    "Life, for me, is about setting goals and working to achieve them, becoming a little better with each milestone I reach.",
    "My interests include photography, nutrition, and long-term investments.",
  ];

  useEffect(() => {
    setAnimate(false);
    const timer1 = setTimeout(() => setAnimate(true), 10);
    const timer2 = setTimeout(() => {
      showNextLine();
    }, 8000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [currentLine]);

  const showNextLine = () => {
    setAnimate(false);
    setCurrentLine((prevLine) => (prevLine + 1) % lines.length);
  };

  const showPrevLine = () => {
    setAnimate(false);
    setCurrentLine((prevLine) => (prevLine - 1 + lines.length) % lines.length);
  };

  return (
    <div className="background-dark">
      <div className="content section">
        <div className={styles.coverContainer}>
          <img
            src="/images/profilePicture.jpeg"
            alt="random picture"
            className={styles.profilePicture}
          />
          <div className={styles.storyContainer}>
            <div className={styles.titleContainer}>
              <h1 className={styles.title}>Hi! I'm Lilach,</h1>
            </div>
            <div className={styles.linesContainer}>
              <p
                key={currentLine}
                className={`${styles.storyLine} ${
                  animate ? styles.animate : ""
                }`}
              >
                {lines[currentLine]}
              </p>
            </div>
            <div className={styles.navButtonsContainer}>
              <button
                className={`${styles.scrollButton} ${styles.prevLine}`}
                onClick={showPrevLine}
              ></button>
              <button
                className={`${styles.scrollButton} ${styles.nextLine}`}
                onClick={showNextLine}
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
