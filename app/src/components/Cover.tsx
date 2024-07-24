import styles from "./Cover.module.scss";

export default function Cover() {
  return (
    <div className="blue">
      <div className={`${styles.cover} content section`}>
        <div id="cover" className={styles.summary}>
          <h1>Hi! I'm Lilach,</h1>
          <p>
          Mother, wife, coder, and gamer.<br></br>
          I am a lifelong learner who prefers acquiring the knowledge needed to manage things independently, efficiently, and thoroughly.<br></br>
          Life, for me, is about setting goals and working to achieve them, becoming a little better with each milestone I reach.<br></br>
          My interests include photography, nutrition, and long-term investments.<br></br>
          Motherhood inspired me to strive to be the best role model for my daughter, leading me into a new career as a Fullstack Developer.<br></br>
          Recently, I completed a year-long Full Stack course where my curiosity and passion for coding grew immensely.<br></br>
          Currently, I'm developing this site as my portfolio and actively seeking opportunities to contribute and grow in the tech industry.
          </p>
        </div>
        <div>
          <img
            src="/images/profilePicture.jpeg"
            alt="random picture"
            className={styles.rounded}
          />
        </div>
      </div>
    </div>
  );
}
