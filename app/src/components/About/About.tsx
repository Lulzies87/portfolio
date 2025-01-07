import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./About.module.scss";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // useLayoutEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.fromTo(
  //       imageRef.current,
  //       {
  //         opacity: 0,
  //         x: -100,
  //       },
  //       {
  //         scrollTrigger: {
  //           trigger: aboutRef.current,
  //           start: "top 80%",
  //           end: "bottom 20%",
  //           toggleActions: "restart none restart none",
  //         },
  //         opacity: 1,
  //         x: 0,
  //       }
  //     );

  //     gsap.fromTo(
  //       contentRef.current,
  //       {
  //         opacity: 0,
  //         x: 100,
  //       },
  //       {
  //         scrollTrigger: {
  //           trigger: aboutRef.current,
  //           start: "top 80%",
  //           end: "bottom 20%",
  //           toggleActions: "restart none restart none",
  //         },
  //         opacity: 1,
  //         x: 0,
  //       }
  //     );
  //   });

  //   return () => {
  //     ctx.revert();
  //   };
  // }, []);

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
                Motherhood inspired me to strive to be the best role model for my daughter, which led me to choose a new career path as a Fullstack Developer.
                Recently, I successfully completed an intensive year-long Full Stack course where my curiosity and passion for coding grew immensely.
                Currently, I'm developing this site as my portfolio and actively seeking opportunities to contribute and grow in the tech industry.
                I am a lifelong learner who is driven to continuously acquire new knowledge and skills. I enjoy solving complex problems, working efficiently to improve processes, and handling assignments thoroughly and with attention to detail.
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
