import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import styles from "./Header.module.scss";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 900px)");

    let headerAnimation: gsap.core.Tween | null = null;

    if (mediaQuery.matches && headerRef.current) {
      headerAnimation = gsap.fromTo(
        headerRef.current,
        {
          y: "-100%",
          immediateRender: false,
        },
        {
          delay: 0.7,
          duration: 0.8,
          y: 0,
          ease: "power2",
        }
      );
    }

    return () => {
      if (headerAnimation) headerAnimation.revert();
    };
  });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (id: string) => {
    if (menuOpen) {
      toggleMenu();
    }

    const element = document.getElementById(id);
    if (!element) throw new Error("Couldn't find element with id:" + id);

    let elementPosition;

    if (id === "experience") {
      const headerHeight = headerRef.current
        ? headerRef.current.offsetHeight
        : 0;

      elementPosition =
        element.getBoundingClientRect().top + window.scrollY - headerHeight;
    } else {
      elementPosition = element.getBoundingClientRect().top + window.scrollY;
    }
    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });
  };

  return (
    <div ref={headerRef} className={styles.static}>
      <div className={`${styles.header} content`}>
        <div className={styles.titleContainer}>
          <button
            className={styles.bannerButton}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              src="/images/icons/siteIcon.svg"
              alt="site icon"
            />
          </button>
        </div>

        <div className={styles.hamburger} onClick={toggleMenu}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>

        <nav
          className={`${styles.navigationBar} ${menuOpen ? styles.open : ""}`}
        >
          <ul className={styles.navLinks}>
            {["about", "skills", "experience", "projects", "contact"].map(
              (section) => (
                <li key={section}>
                  <button
                    className={styles.navLink}
                    onClick={() => scrollToSection(section)}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
}
