import styles from "./Button.module.scss";

type ButtonProps = {
  innerText: string;
  url?: string;
};

export default function Button({ innerText, url }: ButtonProps) {
  return (
    <button className={styles.button}>
      <a className={styles.button__link} href={url} target="_blank" rel="noopener noreferrer">
        {innerText}
      </a>
    </button>
  );
}
