import { useRef } from "react";
import htmlIcon from "../assets/icons/html.png";
import cssIcon from "../assets/icons/css.png";
import javascriptIcon from "../assets/icons/javascript.png";
import typescriptIcon from "../assets/icons/typescript.png";
import reactIcon from "../assets/icons/react.png";
import nodejsIcon from "../assets/icons/nodejs.png";
import expressIcon from "../assets/icons/express.png";
import mongodbIcon from "../assets/icons/mongodb.png";
import mysqlIcon from "../assets/icons/mysql.png";
import gitIcon from "../assets/icons/git.png";
import githubIcon from "../assets/icons/github.png";
import npmIcon from "../assets/icons/npm.png";
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
    <div className="green">
      <div className="section content">
        <h1>Skills</h1>
        <div className={styles.skillsContainer}>
          <button className={styles.scrollButton} onClick={scrollLeft}>
            {"<"}
          </button>
          <div id="skills" className={styles.skillsContent} ref={skillsRef}>
            <ul className={styles.skillsList}>
              <li>
                <img src={htmlIcon} alt="html5 icon" />
              </li>
              <li>
                <img src={javascriptIcon} alt="javascript icon" />
              </li>
              <li>
                <img src={typescriptIcon} alt="typescript icon" />
              </li>
              <li>
                <img src={cssIcon} alt="css icon" />
              </li>
              <li>
                <img src={reactIcon} alt="react icon" />
              </li>
              <li>
                <img src={nodejsIcon} alt="nodejs icon" />
              </li>
              <li>
                <img src={expressIcon} alt="express icon" />
              </li>
              <li>
                <img src={mongodbIcon} alt="mongodb icon" />
              </li>
              <li>
                <img src={mysqlIcon} alt="mysql icon" />
              </li>
              <li>
                <img src={gitIcon} alt="git icon" />
              </li>
              <li>
                <img src={githubIcon} alt="github icon" />
              </li>
              <li>
                <img src={npmIcon} alt="npm icon" />
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
