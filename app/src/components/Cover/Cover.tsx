import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Cover.module.scss";

gsap.registerPlugin(ScrollTrigger);

export default function Cover() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline({});
    let scrollAnimation: GSAPAnimation;

    tl.from(titleRef.current, {
      x: "-100%",
      opacity: 0,
      duration: 1.6,
      ease: "power4",
      immediateRender: false,
    });

    if (scrollRef.current) {
      tl.fromTo(
        scrollRef.current.children,
        {
          opacity: 0,
          immediateRender: false,
        },
        {
          opacity: 1,
        }
      ).to(scrollRef.current.children, {
        duration: 0.3,
        y: -8,
        stagger: 0.1,
        yoyo: true,
        repeat: -1,
      });

      scrollAnimation = gsap.to(scrollRef.current, {
        scrollTrigger: {
          trigger: scrollRef.current,
          toggleActions: "play none none reverse",
          start: "center 60%",
        },
        opacity: 0,
      });
    }
    return () => {
      tl.revert();
      scrollAnimation.revert();
    };
  });

  return (
    <div id="cover" className={`${styles.coverContainer} content`}>
      <div className={styles.positioningContainer}>
        <h1 ref={titleRef} className={styles.title}>
          Hi! I'm Lilach
        </h1>
      </div>

      <div ref={scrollRef} className={styles.scrollContainer}>
        <p className={styles.scrollContainer__text}>Scroll Down</p>
        <img
          className={styles.scrollContainer__arrow}
          src="/images/icons/arrow.svg"
          alt="down-arrow"
        />
      </div>
    </div>
  );
}