import styles from "./Timeline.module.scss";

export default function Timeline() {
  return (
    <div className={styles.timeline}>
      <div className={`${styles.container} ${styles.left}`}>
        <div className={styles.content}>
          <h2>Payroll Administrator - Aluma</h2>
          <h3>Oct 2019 - Nov 2023</h3>
          <ul className={styles.jobDescription}>
            <li>
              Full responsibility for the entire payroll process and attendance
              system of the organization (250 employees).
            </li>
            <li>
              Single point of contact for questions and issues related to
              payroll / attendance.
            </li>
          </ul>
        </div>
      </div>

      <div className={`${styles.container} ${styles.right}`}>
        <div className={styles.content}>
          <h2>Payroll Specialist - Guberman Group</h2>
          <h3>Jun 2018 - Sep 2019</h3>
          <ul className={styles.jobDescription}>
            <li>
              Accurate and timely preparation of the payroll of 6 different
              clients in accordance with their timetables and deadlines.
            </li>
            <li>
              Point of contact for requests and questions regarding payroll.
            </li>
          </ul>
        </div>
      </div>

      <div className={`${styles.container} ${styles.left}`}>
        <div className={styles.content}>
          <h2>Computer Room Operator - HOT mobile</h2>
          <h3>Jun 2011 - Oct 2015</h3>
          <ul className={styles.jobDescription}>
            <li>
              Monitoring all production systems & servers and handling
              large-scale failures.
            </li>
            <li>
              Operating processes on Windows/Linux/Unix environments including
              DWH & billing processes. Managing the backup system.
            </li>
            <li>Producing weekly/monthly failures reports.</li>
            <li>
              Training new operators, preparing shift schedules, preparing work
              procedures documentation and presenting them to the team.
            </li>
            <li>
              Systems used: HP Network Node Manager, HP Operation Manager, Grid
              Control, Legato Networker.
            </li>
          </ul>
        </div>
      </div>

      <div className={`${styles.container} ${styles.right}`}>
        <div className={styles.content}>
          <h2>Computer Room Operator - 012 Golden Lines</h2>
          <h3>May 2010 - May 2011</h3>
          <ul className={styles.jobDescription}>
            <li>
              Monitoring all production systems & servers and handling
              large-scale failures.
            </li>
            <li>
              Systems used: HP Sitescope, BAC, OnGuard, EAI, Legato Networker,
              Data Protector, NetVault.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
