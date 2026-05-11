import type { FC } from "react";
import { Card, Typography } from "antd";
import { MY_STORY_COPY } from "../../constant";
import { Reveal } from "../Reveal";
import styles from "./styles.module.css";

const headingId = "about-my-story-heading";

export const MyStorySection: FC = () => (
  <section aria-labelledby={headingId} role="region">
    <Reveal>
      <Card bordered={false} className={styles.card}>
        <Typography.Title
          level={3}
          id={headingId}
          className={styles.sectionHeading}
        >
          My Story
        </Typography.Title>
        <Typography.Paragraph className={styles.sectionBody}>
          {MY_STORY_COPY}
        </Typography.Paragraph>
      </Card>
    </Reveal>
  </section>
);
