import { ReactNode } from "react";
import styles from "./Project.module.scss";

type ProjectProps = {
  title: string;
  imageUrl: string;
  websiteUrl?: string;
  children: ReactNode;
};
export default function Project({
  title,
  imageUrl,
  websiteUrl,
  children,
}: ProjectProps) {
  return (
    <div className={styles.projectContainer}>
      <h2>{title}</h2>
      <a href={websiteUrl} target="_blank">
        <img src={imageUrl} alt="project picture" />
      </a>
      {children}
    </div>
  );
}
