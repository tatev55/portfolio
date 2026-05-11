import { Flex, Typography } from "antd";
import heroImg from "../../assets/bg.png";
import styles from "./styles.module.css";

export const HomePage = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        <img
          src={heroImg}
          className={`${styles.heroImg} ${styles.animHeroImg}`}
          alt=""
        />
      </div>
      <div className={`${styles.overlay} ${styles.animOverlay}`} />

      <Flex vertical justify="center" className={styles.inner}>
        <Typography.Title
          id="home2-hero-title"
          level={1}
          className={`${styles.heading} ${styles.animHeading}`}
        >
          Tatev Margaryan
        </Typography.Title>

        <Typography.Paragraph className={`${styles.intro} ${styles.animIntro}`}>
          Creative front-end developer focused on building modern, responsive,
          and visually engaging web experiences.
        </Typography.Paragraph>
        <button type="button" className={`${styles.cv} ${styles.animCta}`}>
          Download CV
        </button>
      </Flex>
    </section>
  );
};
