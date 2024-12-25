import { ReactNode } from "react";
import styles from "./Badge.module.scss";

interface BadgeProps {
  children: ReactNode;
}

export default function Badge({ children, ...props }: BadgeProps) {
  return (
    <span className={styles.badge} {...props}>
      {children}
    </span>
  );
}
