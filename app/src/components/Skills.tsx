import { useRef } from "react";
import styles from "./Skills.module.scss";

export default function Skills() {
  const skillsRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (skillsRef.current) {
      skillsRef.current.scrollBy({ left: -1800, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (skillsRef.current) {
      skillsRef.current.scrollBy({ left: 1800, behavior: "smooth" });
    }
  };

  return (
    <div className="background-light">
      <div id="skills" className="section content">
        <h1>Skills</h1>
        <div className={styles.skillsContainer}>
          <button className={styles.scrollButton} onClick={scrollLeft}>
            {"<"}
          </button>
          <div className={styles.skillsContent} ref={skillsRef}>
            <ul className={styles.skillsList}>
              <li>
                <img src="/images/icons/html.png" alt="html5 icon" />
              </li>
              <li>
                <img src="/images/icons/javascript.png" alt="javascript icon" />
              </li>
              <li>
                <img src="/images/icons/typescript.png" alt="typescript icon" />
              </li>
              <li>
                <img src="/images/icons/css.png" alt="css icon" />
              </li>
              <li>
                <img src="/images/icons/react.png" alt="react icon" />
              </li>
              <li>
                <img src="/images/icons/nodejs.png" alt="nodejs icon" />
              </li>
              <li>
                <img src="/images/icons/express.png" alt="express icon" />
              </li>
              <li>
                <img src="/images/icons/mongodb.png" alt="mongodb icon" />
              </li>
              <li>
                <img src="/images/icons/mysql.png" alt="mysql icon" />
              </li>
              <li>
                <img src="/images/icons/git.png" alt="git icon" />
              </li>
              <li>
                <img src="/images/icons/github.png" alt="github icon" />
              </li>
              <li>
                <img src="/images/icons/npm.png" alt="npm icon" />
              </li>
            </ul>
          </div>
          <button className={styles.scrollButton} onClick={scrollRight}>
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
}
