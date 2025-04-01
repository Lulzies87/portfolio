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
    <div className={styles.experienceContainer}>
      <img
        className={styles.experienceContainer__transitionTop}
        src="/images/experience-transition.png"
        alt="transition-image"
      />

      <div id="experience" className="content">
        <h1 className={styles.experienceContainer__title}>
          Experience<span className="text-accent">.</span>
        </h1>

        <div
          ref={experienceRef}
          className={styles.experienceContainer__content}
        >
          <ExperienceBox
            title="Payroll Administrator - Aluma"
            subtitle="Oct 2019 - Nov 2023"
            responsibilities={[
              "Streamlined payroll operations for 250 employees, reducing end-to-end processing time by 30% through process optimization and automation.",
              "Successfully led the migration to a new attendance system, improving payroll accuracy and minimizing errors to 1%.",
              "Served as the primary contact for payroll and attendance matters, ensuring seamless communication across teams and departments.",
              "Collaborated with cross-functional teams to develop customized solutions for attendance and payroll workflows.",
            ]}
          />
          <ExperienceBox
            title="Payroll Specialist - Guberman Group"
            subtitle="Jun 2018 - Sep 2019"
            responsibilities={[
              "Supported a team of eight payroll accountants, delivering accurate and timely payroll services under tight deadlines.",
              "Provided guidance to clients on payroll, pensions, and labor law compliance, ensuring adherence to all regulations.",
              "Authored informative articles for the company’s English newsletter, catering to an international client base.",
            ]}
          />
          <ExperienceBox
            title="Computer Room Operator - HOT mobile"
            subtitle="Jun 2011 - Oct 2015"
            responsibilities={[
              "Monitored and maintained production servers and telephony systems, ensuring uninterrupted operations during high-demand periods.",
              "Managed large-scale incidents effectively, reducing downtime and maintaining service reliability.",
              "Played a pivotal role as the manager’s assistant, leading training programs for new operators, creating work schedules, and documenting operational procedures.",
              "Conducted regular team training sessions and participated in candidate interviews to build and strengthen the team.",
            ]}
          />
          <ExperienceBox
            title="Computer Room Operator - 012 Golden Lines"
            subtitle="May 2010 - May 2011"
            responsibilities={[
              "Operated backup systems and processes across Linux/Unix and Windows environments.",
              "Monitored production servers, identifying, and resolving issues in real-time to ensure high system availability.",
              "Managed production servers and resolved incidents in real-time.",
            ]}
          />
        </div>
      </div>

      <img
        className={styles.experienceContainer__transitionBottom}
        src="/images/experience-transition.png"
        alt="transition-image"
      />
    </div>
  );
}
