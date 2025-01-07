import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ExperienceBox from "../ExperienceBox/ExperienceBox.tsx";
import styles from "./Experience.module.scss";

export default function Experience() {
  const experienceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!experienceRef.current)
      throw Error("Couldn't find experience reference.");

    const isSmallScreen = window.innerWidth < 700;
    const animation = gsap.from(experienceRef.current.children, {
      scrollTrigger: {
        trigger: experienceRef.current,
        toggleActions: "restart none none none",
      },
      opacity: 0,
      x: (index) =>
        isSmallScreen ? "-100%" : index % 2 === 0 ? "-100%" : "100%",
      stagger: 0.3,
      ease: "power4",
      duration: 2,
    });

    return () => {
      animation.revert();
    };
  }, []);

  return (
    <div id="experience" className={`${styles.experienceContainer} content`}>
      <h1>
        Experience<span className="text-accent">.</span>
      </h1>
      <div ref={experienceRef} className={styles.experienceContainer__content}>
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
