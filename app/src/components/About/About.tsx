import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./About.module.scss";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const underlineRef = useRef<HTMLImageElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({});

      tl.from(titleRef.current, {
        x: "-100%",
        opacity: 0,
        ease: "power4",
        duration: 0.5,
        immediateRender: false,
      }).fromTo(
        underlineRef.current,
        { clipPath: "inset(0 100% 0 0)" },
        { clipPath: "inset(0 0% 0 0)", ease: "power4" }
      );

      gsap.from(imageRef.current, {
        scale: 0,
        ease: "power4",
        duration: 1,
      });

      gsap.from(contentRef.current, {
        opacity: 0,
        y: 50,
        ease: "power4",
        duration: 1,
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={aboutRef} id="about" className={styles.aboutContainer}>
      <div className={styles.titleContainer}>
        <img
          ref={underlineRef}
          src="/images/underline.png"
          alt="underline"
          className={styles.titleContainer__underlineImage}
        />

        <h1 ref={titleRef} className={styles.titleContainer__title}>
          Hi! I'm Lilach<span className="text-accent">.</span>
        </h1>
      </div>

      <div className={`${styles.aboutContainer__innerWrap} content`}>
        <img
          ref={imageRef}
          className={styles.aboutContainer__innerWrap__image}
          src="/images/profilePicture.jpg"
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
            {`Hi, I'm Lilach, a Full-Stack Developer experienced with TypeScript, React, Node.js, Express, MongoDB, and MySQL.
            I have a strong foundation in OOP, and I love building applications that are both functional and maintainable.
            I adapt quickly to new challenges, communicate clearly, and thrive in collaborative environments.
            Currently, I'm developing an indie game together with a small team (Project Manager, UI UX Designer and DevOps Engineer), applying both technical skills and Agile practices.
            Technology excites me, and I'm eager to learn and push the boundaries of what I can build.
            This site is a glimpse into my journey - feel free to look around! 🚀`}
          </p>
        </div>
      </div>
    </div>
  );
}
