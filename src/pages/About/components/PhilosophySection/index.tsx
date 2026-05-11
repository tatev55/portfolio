import { ArrowRightOutlined } from "@ant-design/icons";
import type { FC } from "react";
import { Card, Flex, Typography } from "antd";
import { PHILOSOPHY_ITEMS } from "../../constant";
import { Reveal } from "../Reveal";
import styles from "./styles.module.css";

const headingId = "about-philosophy-heading";

export const PhilosophySection: FC = () => (
  <section aria-labelledby={headingId} role="region">
    <Reveal>
      <Card bordered={false} className={styles.card}>
        <span aria-hidden="true" className={styles.watermark}>
          &rdquo;
        </span>
        <Typography.Title
          level={3}
          id={headingId}
          className={styles.sectionHeading}
        >
          Philosophy
        </Typography.Title>
        <div className={styles.grid}>
          {PHILOSOPHY_ITEMS.map((item, index) => (
            <Reveal key={index} index={index + 1} className={styles.itemReveal}>
              <Flex align="flex-start" className={styles.item} gap={10}>
                {item.variant === "quote" ? (
                  <span aria-hidden="true" className={styles.quoteMark}>
                    &ldquo;
                  </span>
                ) : (
                  <ArrowRightOutlined
                    aria-hidden="true"
                    className={styles.arrowIcon}
                  />
                )}
                <Typography.Paragraph className={styles.itemText}>
                  {item.text}
                </Typography.Paragraph>
              </Flex>
            </Reveal>
          ))}
        </div>
      </Card>
    </Reveal>
  </section>
);
