import type { FC } from "react";
import {
  BgColorsOutlined,
  CodeOutlined,
  RocketOutlined,
} from "@ant-design/icons";
import { Flex, Typography } from "antd";
import { useTranslation } from "react-i18next";
import type { TechnicalArsenalProps } from "./types";
import { ArsenalCard } from "./components";
import styles from "./styles.module.css";

export const TechnicalArsenal: FC<TechnicalArsenalProps> = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrap}>
      <Flex vertical gap={14} align="center">
        <Typography.Title level={2} className={styles.title}>
          {t("home.technicalArsenal.title")}
        </Typography.Title>
        <Typography.Text className={styles.subtitle}>
          {t("home.technicalArsenal.subtitle")}
        </Typography.Text>

        <div className={styles.cards}>
          <ArsenalCard
            title={t("home.technicalArsenal.cards.architecture.title")}
            description={t(
              "home.technicalArsenal.cards.architecture.description",
            )}
            meterLabel={t(
              "home.technicalArsenal.cards.architecture.meterLabel",
            )}
            meterValue={t(
              "home.technicalArsenal.cards.architecture.meterValue",
            )}
            meterPercent={95}
            accent="purple"
            icon={<CodeOutlined />}
          />
          <ArsenalCard
            title={t("home.technicalArsenal.cards.visualDesign.title")}
            description={t(
              "home.technicalArsenal.cards.visualDesign.description",
            )}
            meterLabel={t(
              "home.technicalArsenal.cards.visualDesign.meterLabel",
            )}
            meterValue={t(
              "home.technicalArsenal.cards.visualDesign.meterValue",
            )}
            meterPercent={88}
            accent="cyan"
            icon={<BgColorsOutlined />}
          />
          <ArsenalCard
            title={t("home.technicalArsenal.cards.performance.title")}
            description={t(
              "home.technicalArsenal.cards.performance.description",
            )}
            meterLabel={t("home.technicalArsenal.cards.performance.meterLabel")}
            meterValue={t("home.technicalArsenal.cards.performance.meterValue")}
            meterPercent={92}
            accent="pink"
            icon={<RocketOutlined />}
          />
        </div>
      </Flex>
    </div>
  );
};
