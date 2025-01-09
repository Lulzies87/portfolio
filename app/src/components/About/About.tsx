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
            {`I'm a mother, wife, coder, and gamer.
                Motherhood inspired me to strive to be the best role model for my daughter, which led me to pursue a new career path as a Full Stack Developer.
                I successfully completed an intensive year-long Full Stack course where my curiosity and passion for coding grew immensely.
                I developed this site to showcase my abilities and it is regularly updated with my latest content.
                As a lifelong learner, I am driven to continuously explore and apply cutting-edge technologies in web development. I thrive on solving complex problems, optimizing workflows, and delivering efficient solutions.
                Life, for me, is about setting goals and working to achieve them, becoming a little better with each milestone I reach.`}
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
