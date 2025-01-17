import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Cover.module.scss";

gsap.registerPlugin(ScrollTrigger);

export default function Cover() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const underlineRef = useRef<HTMLImageElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!scrollRef.current)
      throw new Error("Couldn't find scroll/sailboat reference.");

    const tl = gsap.timeline({});

    tl.from(titleRef.current, {
      x: "-100%",
      opacity: 0,
      duration: 1.4,
      ease: "power4",
      immediateRender: false,
    })
      .fromTo(
        underlineRef.current,
        {
          clipPath: "inset(0 100% 0 0)",
        },
        {
          clipPath: "inset(0 0% 0 0)",
          ease: "power4",
        }
      )
      .fromTo(
        scrollRef.current.children,
        {
          opacity: 0,
          immediateRender: false,
        },
        {
          opacity: 1,
          delay: 1,
        }
      )
      .to(scrollRef.current.children, {
        duration: 0.3,
        y: -8,
        stagger: 0.1,
        yoyo: true,
        repeat: -1,
      });

    const scrollAnimation = gsap.to(scrollRef.current, {
      scrollTrigger: {
        trigger: scrollRef.current,
        toggleActions: "play none none reverse",
        start: "center 60%",
      },
      opacity: 0,
    });
    return () => {
      tl.revert();
      scrollAnimation.revert();
    };
  });

  return (
    <div id="cover" className={`${styles.coverContainer} content`}>
      <div className={styles.positioningContainer}>
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
