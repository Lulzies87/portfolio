import ExperienceBox from "../ExperienceBox/ExperienceBox";
import styles from "./Experience.module.scss";

export default function Experience() {
  return (
    <div id="experience" className={`${styles.experienceContainer} content`}>
      <h1>Experience</h1>
      <div className={styles.experienceContainer__content}>
        <ExperienceBox
          title="Payroll Administrator - Aluma"
          subtitle="Oct 2019 - Nov 2023"
          responsibilities={[
            "Full responsibility for the entire payroll and attendance systems of the organization (250 employees), serving as the single point of contact for related questions and issues.",
            "Developed and implemented efficient work processes in collaboration with various teams across the company to optimize payroll processing procedures.",
          ]}
        />
        <ExperienceBox
          title="Payroll Specialist - Guberman Group"
          subtitle="Jun 2018 - Sep 2019"
          responsibilities={[
            "Worked as part of a team of 8 payroll accountants, consistently meeting tight deadlines and diverse requirements.",
            "Provided comprehensive support and solutions to clients regarding payroll, pensions, and labor laws.",
          ]}
        />
        <ExperienceBox
          title="Computer Room Operator - HOT mobile"
          subtitle="Jun 2011 - Oct 2015"
          responsibilities={[
            "Monitored all production servers and telephony systems, managed large-scale incidents.",
            "Operated processes on Windows/Linux/Unix environments including DWH & billing processes.",
            "Managed the organizational backup systems",
            "Produced weekly and monthly failure data reports.",
            "Trained new operators, prepared work schedules, wrote work procedures, and conducted team training.",
            "Systems used: HP Network Node Manager, HP Operation Manager, Grid Control, Legato Networker.",
          ]}
        />
        <ExperienceBox
          title="Computer Room Operator - 012 Golden Lines"
          subtitle="May 2010 - May 2011"
          responsibilities={[
            "Monitored all production servers and telephony systems, managed large-scale incidents.",
            "Systems used: HP Sitescope, BAC, OnGuard, EAI, Legato Networker, Data Protector, NetVault.",
          ]}
        />
      </div>
    </div>
  );
}
