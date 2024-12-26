import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import styles from "./Header.module.scss";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLButtonElement>(null);
  const navLinksRef = useRef<HTMLUListElement>(null);
  const sections = ["about", "skills", "experience", "projects", "contact"];

  useLayoutEffect(() => {
    if (!navLinksRef.current)
      throw new Error("Couldn't find navigation menu reference.");
    const tl = gsap.timeline();

    tl.from(headerRef.current, {
      delay: 1,
      scale: 0,
      duration: 0.2,
    })
      .from(headerRef.current, {
        width: "56px",
        ease: "bounce",
      })
      .from(logoRef.current, {
        display: "none",
        scale: 0,
        duration: 0.1,
      })
      .from(navLinksRef.current.children, {
        opacity: 0,
        stagger: 0.1,
        x: -16,
      });

    return () => {
      tl.revert();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = null;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const viewportHeight = window.innerHeight;

          if (
            rect.top <= viewportHeight / 2 &&
            rect.bottom > viewportHeight / 2
          ) {
            currentSection = section;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      <div className={styles.header}>
        <div className={styles.titleContainer}>
          <button
            ref={logoRef}
            className={styles.bannerButton}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              className="svg-class"
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
          <ul ref={navLinksRef} className={styles.navLinks}>
            {sections.map((section) => (
              <li key={section}>
                <button
                  className={`${styles.navLink} ${
                    activeSection === section ? styles.active : ""
                  }`}
                  onClick={() => scrollToSection(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
