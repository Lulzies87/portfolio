import { useEffect, useRef } from "react";
import ProjectCard from "../ProjectCard/ProjectCard.tsx";
import { gsap } from "gsap";
import styles from "./Projects.module.scss";

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
      <h1>Projects<span className="text-accent">.</span></h1>

      <div ref={galleryRef} className={styles.projectsGallery}>
        <ProjectCard
          title="Castle Warrior"
          technologies={[
            "TypeScript",
            "HTML5 Canvas",
            "Node.js",
            "Express",
            "MongoDB",
            "AWS",
          ]}
          imageUrl="/images/projects/castle-warrior.png"
          codeUrl="https://github.com/Lulzies87/castle-warrior"
          demoUrl="https://castlewarrior.lulzies.top/"
        ></ProjectCard>
        <ProjectCard
          title="This Website"
          technologies={[
            "TypeScript",
            "React",
            "Node.js",
            "Nodemailer",
            "GSAP",
            "AWS",
          ]}
          imageUrl="/images/projects/portfolio.png"
          codeUrl="https://github.com/Lulzies87/portfolio"
          demoUrl=""
        ></ProjectCard>
      </div>

    </div>
  );
}
