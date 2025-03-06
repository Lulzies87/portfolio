import styles from "./ProjectCard.module.scss";
import Badge from "../Badge/Badge.tsx";
import Button from "../Button/Button.tsx";

type ProjectCardProps = {
  title: string;
  technologies: string[];
  imageUrl: string;
  description: string;
  codeUrl: string;
  demoUrl?: string;
};
export default function ProjectCard({
  title,
  technologies,
  imageUrl,
  description,
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

      <p>{description}</p>

      <div
        className={`${styles.buttonsContainer} ${
          !demoUrl ? styles.centeredButton : ""
        }`}
      >
        <Button innerText="View Code" url={codeUrl} />
        {demoUrl && <Button innerText="Live Demo" url={demoUrl} />}
      </div>
    </div>
  );
}
