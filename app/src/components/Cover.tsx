import { useEffect, useState } from "react";
import styles from "./Cover.module.scss";

export default function Cover() {
  const [currentLine, setCurrentLine] = useState(0);

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
    const timer = setTimeout(() => {
      setCurrentLine((prevLine) => (prevLine + 1) % lines.length);
    }, 8000);
    return () => clearTimeout(timer);
  }, [currentLine]);

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
            <h1>Hi! I'm Lilach,</h1>
            <p className={styles.storyLine}>{lines[currentLine]}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
