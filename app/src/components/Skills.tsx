import { useRef } from "react";
import styles from "./Skills.module.scss";

export default function Skills() {
  const skillsRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (skillsRef.current) {
      const itemWidth =
        skillsRef.current.firstElementChild?.clientWidth || 1800;
      skillsRef.current.scrollBy({ left: -itemWidth, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (skillsRef.current) {
      const itemWidth =
        skillsRef.current.firstElementChild?.clientWidth || 1800;
      skillsRef.current.scrollBy({ left: itemWidth, behavior: "smooth" });
    }
  };

  return (
    <div className="background-light">
      <div id="skills" className="section content">
        <h1>Skills</h1>
        <div className={styles.skillsContainer}>
          <button className={`${styles.scrollButton} ${styles.scrollLeft}`} onClick={scrollLeft}></button>
          <div className={styles.skillsContent} ref={skillsRef}>
            <ul className={styles.skillsList}>
              <li>
                <img src="/images/icons/html.png" draggable="false" alt="html5 icon" />
              </li>
              <li>
                <img src="/images/icons/javascript.png" draggable="false" alt="javascript icon" />
              </li>
              <li>
                <img src="/images/icons/typescript.png" draggable="false" alt="typescript icon" />
              </li>
              <li>
                <img src="/images/icons/css.png" draggable="false" alt="css icon" />
              </li>
              <li>
                <img src="/images/icons/react.png" draggable="false" alt="react icon" />
              </li>
              <li>
                <img src="/images/icons/nodejs.png" draggable="false" alt="nodejs icon" />
              </li>
              <li>
                <img src="/images/icons/express.png" draggable="false" alt="express icon" />
              </li>
              <li>
                <img src="/images/icons/mongodb.png" draggable="false" alt="mongodb icon" />
              </li>
              <li>
                <img src="/images/icons/mysql.png" draggable="false" alt="mysql icon" />
              </li>
              <li>
                <img src="/images/icons/git.png" draggable="false" alt="git icon" />
              </li>
              <li>
                <img src="/images/icons/github.png" draggable="false" alt="github icon" />
              </li>
              <li>
                <img src="/images/icons/npm.png" draggable="false" alt="npm icon" />
              </li>
            </ul>
          </div>
          <button className={`${styles.scrollButton} ${styles.scrollRight}`} onClick={scrollRight}></button>
        </div>
      </div>
    </div>
  );
}
