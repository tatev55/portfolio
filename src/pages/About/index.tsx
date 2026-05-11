import type { FC } from "react";
import portrait from "../../assets/aboutImg.jpg";
import { AboutHero } from "./components/AboutHero";
import { MeetMyVirtualSelfSection } from "./components/MeetMyVirtualSelfSection";
import { PhilosophySection } from "./components/PhilosophySection";
import { SkillSetSection } from "./components/SkillSetSection";
import type { AboutPageProps } from "./types";
import styles from "./styles.module.css";

export const AboutPage: FC<AboutPageProps> = () => (
  <div className={styles.page}>
    <div className={styles.wrap}>
      <AboutHero portraitSrc={portrait} />
      <PhilosophySection />
      <SkillSetSection />
      <MeetMyVirtualSelfSection />
    </div>
  </div>
);
