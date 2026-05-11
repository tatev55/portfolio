import type { FC } from "react";
import { Card, Typography } from "antd";
import { SKILL_ITEMS } from "../../constant";
import { Reveal } from "../Reveal";
import { SkillRing } from "./SkillRing";
import styles from "./styles.module.css";

const headingId = "about-skill-set-heading";

export const SkillSetSection: FC = () => (
  <section aria-labelledby={headingId} role="region">
    <Reveal>
      <Card bordered={false} className={styles.card}>
        <Typography.Title
          level={3}
          id={headingId}
          className={styles.sectionHeading}
        >
          Skill Set
        </Typography.Title>
        <div className={styles.skillsGrid}>
          {SKILL_ITEMS.map((s, index) => (
            <SkillRing key={index} skill={s} index={index} />
          ))}
        </div>
      </Card>
    </Reveal>
  </section>
);
