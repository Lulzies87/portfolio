import styles from "./ExperienceBox.module.scss";

type ExperienceBoxProps = {
  title: string;
  subtitle: string;
  responsibilities: string[];
};

export default function ExperienceBox({
  title,
  subtitle,
  responsibilities,
}: ExperienceBoxProps) {
  return (
    <div className={styles.experienceBoxContainer}>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <ul className={styles.experienceBoxContainer__skillList}>
        {responsibilities.map((responsibility, index) => (
          <li
            className={styles.experienceBoxContainer__skillList__listItem}
            key={index}
          >
            {responsibility}
          </li>
        ))}
      </ul>
    </div>
  );
}
