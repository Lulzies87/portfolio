import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Cover.module.scss";

gsap.registerPlugin(ScrollTrigger);

export default function Cover() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const underlineRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline({});

    tl.from(titleRef.current, {
      x: "-100%",
      opacity: 0,
      duration: 0.5,
      ease: "power4",
      immediateRender: false,
    }).fromTo(
      underlineRef.current,
      {
        clipPath: "inset(0 100% 0 0)",
      },
      {
        clipPath: "inset(0 0% 0 0)",
        ease: "power4",
      }
    );
    return () => {
      tl.revert();
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
    </div>
  );
}
