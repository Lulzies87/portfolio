import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./About.module.scss";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top bottom",
          toggleActions: "restart none none reset",
        },
      });

      tl.from(imageRef.current, {
        scale: 0,
        ease: "power4",
        duration: 1,
      }).from(
        contentRef.current,
        {
          opacity: 0,
          y: 50,
          ease: "power4",
          duration: 1,
        },
        "-=0.5"
      );
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={aboutRef} id="about" className={styles.aboutContainer}>
      <img
        className={styles.aboutContainer__transitionTop}
        src="/images/transition.png"
        alt="transition-image"
      />

      <div className={`${styles.aboutContainer__innerWrap} content`}>
        <img
          ref={imageRef}
          className={styles.aboutContainer__innerWrap__image}
          src="/images/profilePicture2.jpg"
          alt="profile-image"
        />

        <div
          ref={contentRef}
          className={styles.aboutContainer__innerWrap__textContainer}
        >
          <h1
            className={styles.aboutContainer__innerWrap__textContainer__title}
          >
            About Me<span className="text-accent">.</span>
          </h1>
          <p
            className={styles.aboutContainer__innerWrap__textContainer__content}
          >
            {`Full Stack Development isn’t just my profession - it’s my passion.
            With a strong foundation in both front-end and back-end technologies, I love bringing every component together in perfect harmony, ensuring seamless communication between them.
            Problem-solving is my strength, workflow optimization is second nature, and building high-performance applications is what drives me.
            I am committed to continuous learning, staying ahead of emerging technologies, and refining my skills to push the boundaries of web development.
            I'm looking for a dynamic work environment where I can be challenged, innovate, and grow as a developer.
            This site was developed to showcase my journey and projects that reflect my dedication to clean code, innovation, and seamless user experiences.`}
          </p>
        </div>
      </div>

      <img
        className={styles.aboutContainer__transitionBottom}
        src="/images/transition.png"
        alt="transition-image"
      />
    </div>
  );
}
