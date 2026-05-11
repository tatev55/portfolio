import type { FC } from "react";
import { useState } from "react";
import { Typography } from "antd";
import type { SkillItem } from "../../constant";
import { skillIconSrc } from "../../constant";
import { Reveal } from "../Reveal";
import styles from "./styles.module.css";

export type SkillRingProps = {
  skill: SkillItem;
  index: number;
};

const ringRadius = 30;
const ringCircumference = 2 * Math.PI * ringRadius;

export const SkillRing: FC<SkillRingProps> = ({ skill, index }) => {
  const [iconFailed, setIconFailed] = useState(false);
  const [ringVisible, setRingVisible] = useState(
    () =>
      globalThis.window?.matchMedia("(prefers-reduced-motion: reduce)")
        .matches ?? false,
  );
  const pct = Math.max(0, Math.min(100, skill.progress));
  const dash = (pct / 100) * ringCircumference;
  const ringOffset = ringVisible ? ringCircumference - dash : ringCircumference;

  return (
    <Reveal
      index={index + 1}
      className={styles.skillCell}
      onVisibleChange={setRingVisible}
    >
      <div className={styles.ring} aria-hidden="true">
        <svg className={styles.ringSvg} viewBox="0 0 72 72" focusable="false">
          <circle className={styles.ringBg} cx="36" cy="36" r={ringRadius} />
          <circle
            className={styles.ringFg}
            cx="36"
            cy="36"
            r={ringRadius}
            stroke={skill.ringColor}
            strokeDasharray={ringCircumference}
            strokeDashoffset={ringOffset}
          />
        </svg>
        <div className={styles.iconWrap}>
          {!iconFailed ? (
            <img
              className={styles.skillIcon}
              src={skillIconSrc(skill.iconSlug)}
              alt=""
              onError={() => setIconFailed(true)}
            />
          ) : (
            <span className={styles.iconFallback}>
              {skill.label.slice(0, 2)}
            </span>
          )}
        </div>
      </div>
      <Typography.Text className={styles.skillLabel}>
        {skill.label}
      </Typography.Text>
    </Reveal>
  );
};
