import Project from "./Project";
import styles from "./Projects.module.scss";

export default function Projects() {
  return (
    <div className="green">
      <div id="projects" className="section content">
        <h1>Projects</h1>
        <div className={styles.projectsWheel}>
          <Project title="Project 1" imageUrl="https://picsum.photos/200/200">
            <p>React</p>
            <p>Node.js</p>
            <p>MongoDB</p>
          </Project>
          <Project title="Project 2" imageUrl="https://picsum.photos/200/200">
            <p>React</p>
            <p>Node.js</p>
            <p>MySQL</p>
          </Project>
          <Project title="Project 3" imageUrl="https://picsum.photos/200/200">
            <p>React-Native</p>
            <p>Node.js</p>
            <p>redux</p>
            <p>MongoDB</p>
          </Project>
          <Project title="Project 4" imageUrl="https://picsum.photos/200/200">
            <p>React-Native</p>
            <p>Node.js</p>
            <p>react-query</p>
            <p>MySQL</p>
          </Project>
        </div>
      </div>
    </div>
  );
}
