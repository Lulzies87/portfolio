import { ReactNode } from "react";
import styles from "./Project.module.scss";

type ProjectProps = {
  title: string;
  imageUrl: string;
  children: ReactNode;
};
export default function Project({ title, imageUrl, children }: ProjectProps) {
  return (
    <div className={styles.projectContainer}>
      <h2>{title}</h2>
      <img src={imageUrl} alt="project picture" />
      {children}
    </div>
  );
}
