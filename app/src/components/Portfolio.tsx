import Project from "./Project";
import styles from "./Portfolio.module.scss";

export default function Portfolio() {
  return (
    <div className="green">
      <div className="content">
        <h1>Portfolio</h1>
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
