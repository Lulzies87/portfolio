import { useRef, useState } from "react";
import styles from "./Header.module.scss";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (id: string) => {
    if (menuOpen) {
      toggleMenu();
    }

    const element = document.getElementById(id);
    if (element) {
      const headerHeight = headerRef.current
        ? headerRef.current.offsetHeight
        : 0;

      const elementPosition =
        element?.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div ref={headerRef} className={`background-light ${styles.static}`}>
      <div className={`${styles.header} content`}>
        <div className={styles.titleContainer}>
          <button
            className={styles.bannerButton}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <svg
              width="48px"
              height="48px"
              viewBox="0 0 24.00 24.00"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="#CCCCCC"
                strokeWidth="0.24000000000000005"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M15.5 9L15.6716 9.17157C17.0049 10.5049 17.6716 11.1716 17.6716 12C17.6716 12.8284 17.0049 13.4951 15.6716 14.8284L15.5 15"
                  stroke="#405D72"
                  strokeWidth="1.44"
                  strokeLinecap="round"
                ></path>{" "}
                <path
                  d="M13.2942 7.17041L12.0001 12L10.706 16.8297"
                  stroke="#405D72"
                  strokeWidth="1.44"
                  strokeLinecap="round"
                ></path>{" "}
                <path
                  d="M8.49994 9L8.32837 9.17157C6.99504 10.5049 6.32837 11.1716 6.32837 12C6.32837 12.8284 6.99504 13.4951 8.32837 14.8284L8.49994 15"
                  stroke="#405D72"
                  strokeWidth="1.44"
                  strokeLinecap="round"
                ></path>{" "}
                <path
                  d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8"
                  stroke="#405D72"
                  strokeWidth="1.44"
                  strokeLinecap="round"
                ></path>{" "}
              </g>
            </svg>
          </button>
          <h1>Lilach Elayza</h1>
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
            <li>
              <button
                className={styles.navLink}
                onClick={() => scrollToSection("cover")}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className={styles.navLink}
                onClick={() => scrollToSection("skills")}
              >
                Skills
              </button>
            </li>
            <li>
              <button
                className={styles.navLink}
                onClick={() => scrollToSection("experience")}
              >
                Experience
              </button>
            </li>
            <li>
              <button
                className={styles.navLink}
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                className={styles.navLink}
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
