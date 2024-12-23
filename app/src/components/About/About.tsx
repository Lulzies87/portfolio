import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./About.module.scss";

export default function About() {
  gsap.registerPlugin(ScrollTrigger);
  const circleRefs = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      circleRefs.current.forEach((ref) => {
        gsap.fromTo(
          ref,
          {
            scale: 0,
            immediateRender: false,
          },
          {
            scrollTrigger: {
              trigger: ref,
              toggleActions: "restart none restart none",
            },
            scale: 1,
            duration: 4,
            ease: "elastic",
          }
        );
      });
    });

    return () => {
      ctx.revert();
    };
  });

  return (
    <div id="about" className={`${styles.aboutContainer} content`}>
      <img
        className={styles.aboutContainer__image}
        src="/images/profilePicture.png"
        alt="profile-image"
      />
      <div className={styles.aboutContainer__textContainer}>
        <h1 className={styles.aboutContainer__textContainer__title}>
          About Me
        </h1>
        <p className={styles.aboutContainer__textContainer__content}>
          {`I'm a mother, wife, coder, and gamer.
            Motherhood inspired me to strive to be the best role model for my daughter, which led me to choose a new career path as a Fullstack Developer.
            Recently, I successfully completed an intensive year-long Full Stack course where my curiosity and passion for coding grew immensely.
            Currently, I'm developing this site as my portfolio and actively seeking opportunities to contribute and grow in the tech industry.
            I am a lifelong learner who is driven to continuously acquire new knowledge and skills. I enjoy solving complex problems, working efficiently to improve processes, and handling assignments thoroughly and with attention to detail.
            Life, for me, is about setting goals and working to achieve them, becoming a little better with each milestone I reach.`}
        </p>
        {["circle1", "circle2", "circle3"].map((circle, index) => (
          <div
            key={circle}
            ref={(el) => (circleRefs.current[index] = el!)}
            className={`${styles.circle} ${styles[circle]}`}
          ></div>
        ))}
      </div>
    </div>
  );
}
