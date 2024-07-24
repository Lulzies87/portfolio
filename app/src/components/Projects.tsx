import Project from "./Project";
import styles from "./Projects.module.scss";

export default function Projects() {
  return (
    <div className="background-light">
      <div id="projects" className="section content">
        <h1>Projects</h1>
        <div className={styles.projectsGallery}>
          <Project title="Castle Warrior" imageUrl="/images/projects/castleWarrior.png">
            <p>Canvas</p>
            <p>React (vite)</p>
            <p>Node.js</p>
            <p>MySQL</p>
          </Project>
          <Project title="Tic-Tac-Toe" imageUrl="/images/projects/ticTacToe.png">
            <p>React Native (expo)</p>
          </Project>
        </div>
      </div>
    </div>
  );
}
