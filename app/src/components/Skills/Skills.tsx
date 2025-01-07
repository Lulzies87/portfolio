import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./Skills.module.scss";

export default function Skills() {
  const listRef = useRef<HTMLUListElement>(null);

  useLayoutEffect(() => {
    const listAnimation = gsap.fromTo(
      listRef.current!.children,
      {
        x: 100,
        opacity: 0,
        immediateRender: false,
      },
      {
        scrollTrigger: {
          trigger: listRef.current,
          start: "top bottom",
          end: "center center",
          scrub: 2,
          toggleActions: "restart pause reverse pause",
        },
        x: 0,
        opacity: 1,
        ease: "power2",
        stagger: 0.1,
        duration: 3,
      }
    );

    return () => {
      listAnimation.revert();
    };
  });

  return (
    <div id="skills" className={`${styles.skillsContainer} content`}>
      <h1>
        Skills<span className="text-accent">.</span>
      </h1>
      <ul ref={listRef} className={styles.skillsList}>
        {[
          "html",
          "javascript",
          "typescript",
          "css",
          "react",
          "nodejs",
          "express",
          "mongodb",
          "mysql",
          "git",
          "github",
          "npm",
        ].map((skill) => (
          <li key={skill}>
            <img
              src={`/images/skills/${skill}.png`}
              draggable="false"
              alt={`${skill} icon`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
