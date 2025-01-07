import styles from "./ProjectCard.module.scss";
import Badge from "../Badge/Badge.tsx";
import Button from "../Button/Button.tsx";

type ProjectCardProps = {
  title: string;
  technologies: string[];
  imageUrl: string;
  codeUrl: string;
  demoUrl: string;
};
export default function ProjectCard({
  title,
  technologies,
  imageUrl,
  codeUrl,
  demoUrl,
}: ProjectCardProps) {
  return (
    <div className={styles.projectContainer}>
      <h2>{title}</h2>

      <div className={styles.badgesContainer}>
        {technologies.map((technology, index) => (
          <Badge key={index}>{technology}</Badge>
        ))}
      </div>

      <img src={imageUrl} alt="project picture" />

      <div className={styles.buttonsContainer}>
        <Button innerText="View Code" url={codeUrl}></Button>
        <Button innerText="Live Demo" url={demoUrl}></Button>
      </div>
    </div>
  );
}
