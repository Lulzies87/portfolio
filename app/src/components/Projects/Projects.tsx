import { useEffect, useRef } from "react";
import Project from "../Project/Project";
import styles from "./Projects.module.scss";
import { gsap } from "gsap";

export default function Projects() {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!galleryRef.current)
      throw new Error("Couldn't find gallery reference.");

    const animation = gsap.from(galleryRef.current.children, {
      opacity: 0,
      scale: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "bounce",
      scrollTrigger: {
        trigger: galleryRef.current,
        toggleActions: "restart none none none",
      },
    });

    return () => {
      animation.revert();
    };
  }, []);

  return (
    <div id="projects" className={`${styles.projectsContainer} content`}>
      <h1>Projects</h1>
      <div ref={galleryRef} className={styles.projectsGallery}>
        <Project
          title="Castle Warrior"
          imageUrl="/images/projects/castleWarrior.png"
          websiteUrl="https://castlewarrior.lulzies.top/"
        >
          <ul className={styles.technologiesList}>
            <li>
              <a
                href="https://github.com/Lulzies87/castle-warrior"
                target="_blank"
              >
                Github
              </a>
            </li>
            <li>TypeScript</li>
            <li>Canvas</li>
          </ul>
        </Project>
        <Project title="Tic-Tac-Toe" imageUrl="/images/projects/ticTacToe.png">
          <ul className={styles.technologiesList}>
            <li>
              <a
                href="https://github.com/Lulzies87/tic-tac-toe"
                target="_blank"
              >
                Github
              </a>
            </li>
            <li>React Native (expo)</li>
          </ul>
        </Project>
      </div>
    </div>
  );
}
