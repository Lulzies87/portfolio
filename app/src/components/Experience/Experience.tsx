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
            "Full responsibility for the entire payroll process and attendance system of the organization (250 employees).",
            "Single point of contact for questions and issues related to payroll / attendance.",
          ]}
        />
        <ExperienceBox
          title="Payroll Specialist - Guberman Group"
          subtitle="Jun 2018 - Sep 2019"
          responsibilities={[
            "Accurate and timely preparation of the payroll of 6 different clients in accordance with their timetables and deadlines.",
            "Point of contact for requests and questions regarding payroll.",
          ]}
        />
        <ExperienceBox
          title="Computer Room Operator - HOT mobile"
          subtitle="Jun 2011 - Oct 2015"
          responsibilities={[
            "Monitoring all production systems & servers and handling large-scale failures.",
            "Operating processes on Windows/Linux/Unix environments including DWH & billing processes. Managing the backup system.",
            "Producing weekly/monthly failures reports.",
            "Training new operators, preparing shift schedules, preparing work procedures documentation and presenting them to the team.",
            "Systems used: HP Network Node Manager, HP Operation Manager, Grid Control, Legato Networker.",
          ]}
        />
        <ExperienceBox
          title="Computer Room Operator - 012 Golden Lines"
          subtitle="May 2010 - May 2011"
          responsibilities={[
            "Monitoring all production systems & servers and handling large-scale failures.",
            "Systems used: HP Sitescope, BAC, OnGuard, EAI, Legato Networker, Data Protector, NetVault.",
          ]}
        />
      </div>
    </div>
  );
}
