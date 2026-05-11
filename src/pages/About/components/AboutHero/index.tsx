import type { FC } from "react";
import {Flex, Typography } from "antd";
import { ABOUT_LEAD_COPY } from "../../constant";
import styles from "./styles.module.css";

export type AboutHeroProps = {
  portraitSrc: string;
  portraitAlt?: string;
  headingId?: string;
};

export const AboutHero: FC<AboutHeroProps> = ({
  portraitSrc,
  portraitAlt = "",
  headingId = "about-hero-heading",
}) => (
  <section className={styles.section}>
   <div className={`${styles.avatarWrapper} ${styles.animAvatar}`}>
      <img
          src={portraitSrc}
          alt={portraitAlt}
          className={styles.avatar}
          style={{ objectFit: "cover" }}
        />
   </div>

    <Flex vertical className={styles.textWrapper}>
      <Typography.Title level={1} id={headingId} className={`${styles.title} ${styles.animTitle}`}>
        About
      </Typography.Title>
      <Typography.Paragraph className={`${styles.lead} ${styles.animLead}`}>
        {ABOUT_LEAD_COPY}
      </Typography.Paragraph>
    </Flex>
  </section>
);
