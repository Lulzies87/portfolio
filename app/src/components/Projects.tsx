import Project from "./Project";
import styles from "./Projects.module.scss";

export default function Projects() {
  return (
    <div className="background-light">
      <div id="projects" className="section content">
        <h1>Projects</h1>
        <div className={styles.projectsGallery}>
          <Project
            title="Castle Warrior"
            imageUrl="/images/projects/castleWarrior.png"
          >
            <ul className={styles.technologiesList}>
              <li>
                <a
                  href="https://github.com/Lulzies87/castleWarrior"
                  target="_blank"
                >
                  Github
                </a>
              </li>
              <li>Canvas</li>
              <li>React (vite)</li>
              <li>Node.js</li>
              <li>MySQL</li>
            </ul>
          </Project>
          <Project
            title="Tic-Tac-Toe"
            imageUrl="/images/projects/ticTacToe.png"
          >
            <ul className={styles.technologiesList}>
              <li>
                <a
                  href="https://github.com/Lulzies87/tic-tac-toe"
                  target="_blank"
                >
                  Github
                </a>
              </li>
              <li>React Native (expo)</li>
            </ul>
          </Project>
        </div>
      </div>
    </div>
  );
}
