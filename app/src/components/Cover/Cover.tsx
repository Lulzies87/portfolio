import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Cover.module.scss";

gsap.registerPlugin(ScrollTrigger);

export default function Cover() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sailboatRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    if (!scrollRef.current || !sailboatRef.current)
      throw new Error("Couldn't find scroll/sailboat reference.");

    const tl = gsap.timeline({});

    tl.from(titleRef.current, {
      x: "-100%",
      opacity: 0,
      duration: 1.6,
      ease: "power4",
      immediateRender: false,
    })
      .fromTo(
        scrollRef.current.children,
        {
          opacity: 0,
          immediateRender: false,
        },
        {
          opacity: 1,
        }
      )
      .to(scrollRef.current.children, {
        duration: 0.3,
        y: -8,
        stagger: 0.1,
        yoyo: true,
        repeat: -1,
      })
      .to(sailboatRef.current, {
        x: `-${window.innerWidth + sailboatRef.current.offsetWidth}px`,
        duration: `${window.innerWidth / 10}`,
        ease: "linear",
        repeat: -1,
      });

    const rockingAnimation = gsap.to(sailboatRef.current, {
      rotation: 3,
      yoyo: true,
      repeat: -1,
      duration: 1,
      keyframes: [{ rotation: -3 }, { rotation: 3 }],
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
      rockingAnimation.revert();
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

      <img
        ref={sailboatRef}
        className={styles.coverContainer__sailboat}
        src="/images/icons/boat.svg"
        alt="sailboat-svg"
      />
    </div>
  );
}
