import styles from "./Timeline.module.scss";

export default function Timeline() {
  return (
    <div className={styles.timeline}>
      <div className={`${styles.container} ${styles.left}`}>
        <div className={styles.content}>
          <h2>Payroll Administrator - Aluma</h2>
          <h3>Oct 2019 - Nov 2023</h3>
          <p>
            Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
            admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis
            iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto
            primis ea eam.
          </p>
        </div>
      </div>

      <div className={`${styles.container} ${styles.right}`}>
        <div className={styles.content}>
          <h2>Payroll Specialist - Guberman Group</h2>
          <h3>Jun 2018 - Sep 2019</h3>
          <p>
            Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
            admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis
            iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto
            primis ea eam.
          </p>
        </div>
      </div>

      <div className={`${styles.container} ${styles.left}`}>
        <div className={styles.content}>
          <h2>Computer Room Operator - HOT mobile</h2>
          <h3>Jun 2011 - Oct 2015</h3>
          <p>
            Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
            admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis
            iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto
            primis ea eam.
          </p>
        </div>
      </div>

      <div className={`${styles.container} ${styles.right}`}>
        <div className={styles.content}>
          <h2>Computer Room Operator - 012 Golden Lines</h2>
          <h3>May 2010 - May 2011</h3>
          <p>
            Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
            admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis
            iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto
            primis ea eam.
          </p>
        </div>
      </div>
    </div>
  );
}
