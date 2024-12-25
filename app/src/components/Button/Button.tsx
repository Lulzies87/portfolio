import styles from "./Button.module.scss";

type ButtonProps = {
  innerText: string;
  url: string;
};

export default function Button({ innerText, url }: ButtonProps) {
  return (
    <button className={styles.button}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {innerText}
      </a>
    </button>
  );
}
