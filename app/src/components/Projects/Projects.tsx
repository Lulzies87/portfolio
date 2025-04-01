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
    <div className={styles.projectsContainer}>
      <img
        className={styles.projectsContainer__transitionTop}
        src="/images/transition.png"
        alt="transition-image"
      />

      <div id="projects" className={`${styles.projectsContainer__innerWrap} content`}>
        <h1>
          Projects<span className="text-accent">.</span>
        </h1>
        
        <div ref={galleryRef} className={styles.projectsGallery}>
          <ProjectCard
            title="weVote (in progress)"
            technologies={[
              "React",
              "Node.js",
              "Express",
              "MySQL",
              "Tailwind CSS (v4.0)",
              "Shadcn/ui",
            ]}
            imageUrl="/images/projects/weVote.png"
            description="weVote is a polling platform designed for tenants in the same building, making decision-making simpler and more transparent. Admins can create detailed polls with deadlines, while tenants can vote and view results effortlessly."
            codeUrl="https://github.com/Lulzies87/weVote-react"
            demoUrl="https://lulzies87.github.io/weVote-react/"
          ></ProjectCard>
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
            description="Castle Warrior is a 2D platformer where players battle through an enemy-infested castle and collect diamonds. The game features player registration and login, movement mechanics, a scoring system, and a combat system."
            codeUrl="https://github.com/Lulzies87/castle-warrior"
            demoUrl="https://castlewarrior.lulzies.top/"
          ></ProjectCard>
          <ProjectCard
            title="This Website"
            technologies={["React", "TypeScript", "GSAP", "AWS"]}
            imageUrl="/images/projects/portfolio.png"
            description="This site showcases my projects, skills, and experience as a Full-Stack Developer. Explore my work, from web applications to game development, and see how I bring ideas to life with modern technologies."
            codeUrl="https://github.com/Lulzies87/portfolio"
          ></ProjectCard>
        </div>
      </div>

      <img
        className={styles.projectsContainer__transitionBottom}
        src="/images/transition.png"
        alt="transition-image"
      />
    </div>
  );
}
