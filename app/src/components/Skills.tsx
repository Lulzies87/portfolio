import { useEffect, useRef, useState } from "react";
import styles from "./Skills.module.scss";

export default function Skills() {
  const skillsRef = useRef<HTMLDivElement>(null);
  const [scrollDirection, setScrollDirection] = useState<"right" | "left">(
    "right"
  );

  useEffect(() => {
    let intervalId: number;

    const startAutoScroll = () => {
      intervalId = window.setInterval(() => {
        if (skillsRef.current) {
          const container = skillsRef.current;
          const maxScrollLeft = container.scrollWidth - container.clientWidth;

          if (scrollDirection === "right") {
            if (container.scrollLeft >= maxScrollLeft) {
              setScrollDirection("left");
            } else {
              container.scrollBy({ left: 1, behavior: "instant" });
            }
          } else {
            if (container.scrollLeft <= 0) {
              setScrollDirection("right");
            } else {
              container.scrollBy({ left: -1, behavior: "instant" });
            }
          }
        }
      }, 20);
    };

    const stopAutoScroll = () => clearInterval(intervalId);

    startAutoScroll();

    return () => {
      stopAutoScroll();
    };
  }, [scrollDirection]);

  return (
    <div className="background-light">
      <div id="skills" className="section content">
        <h1>Skills</h1>
        <div className={styles.skillsContainer}>
          <div className={styles.skillsContent} ref={skillsRef}>
            <ul className={styles.skillsList}>
              <li>
                <img
                  src="/images/icons/html.png"
                  draggable="false"
                  alt="html5 icon"
                />
              </li>
              <li>
                <img
                  src="/images/icons/javascript.png"
                  draggable="false"
                  alt="javascript icon"
                />
              </li>
              <li>
                <img
                  src="/images/icons/typescript.png"
                  draggable="false"
                  alt="typescript icon"
                />
              </li>
              <li>
                <img
                  src="/images/icons/css.png"
                  draggable="false"
                  alt="css icon"
                />
              </li>
              <li>
                <img
                  src="/images/icons/react.png"
                  draggable="false"
                  alt="react icon"
                />
              </li>
              <li>
                <img
                  src="/images/icons/nodejs.png"
                  draggable="false"
                  alt="nodejs icon"
                />
              </li>
              <li>
                <img
                  src="/images/icons/express.png"
                  draggable="false"
                  alt="express icon"
                />
              </li>
              <li>
                <img
                  src="/images/icons/mongodb.png"
                  draggable="false"
                  alt="mongodb icon"
                />
              </li>
              <li>
                <img
                  src="/images/icons/mysql.png"
                  draggable="false"
                  alt="mysql icon"
                />
              </li>
              <li>
                <img
                  src="/images/icons/git.png"
                  draggable="false"
                  alt="git icon"
                />
              </li>
              <li>
                <img
                  src="/images/icons/github.png"
                  draggable="false"
                  alt="github icon"
                />
              </li>
              <li>
                <img
                  src="/images/icons/npm.png"
                  draggable="false"
                  alt="npm icon"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
