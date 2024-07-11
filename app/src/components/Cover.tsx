import styles from "./Cover.module.scss";

export default function Cover() {
  return (
    <div className="blue">
      <div className={`${styles.cover} content`}>
        <div id="cover" className={styles.summary}>
          <h1>Hi! I'm Lilach Elayza</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
            aliquam repellendus sunt dolore dolorum pariatur totam tempore
            corrupti illum, asperiores eaque sapiente, iure dolores similique
            ullam obcaecati placeat mollitia praesentium at provident
            perferendis fugit. Dolores eius quam provident! Placeat odit quam ut
            accusantium qui quas, incidunt quo officiis esse amet?
          </p>
        </div>
        <div>
          <img
            src="https://picsum.photos/300/300"
            alt="random picture"
            className={styles.rounded}
          />
        </div>
      </div>
    </div>
  );
}
