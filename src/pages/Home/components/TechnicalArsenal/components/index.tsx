import type { ArsenalCardProps, MeterPercent } from "../types"
import type { FC } from "react"
import {Card, Flex, Typography} from 'antd'
import styles from '../styles.module.css'

const getPercentClass = (meterPercent: MeterPercent) => {
  return meterPercent === 95 ? styles.p95 : meterPercent === 92 ? styles.p92 : styles.p88
}

 export const ArsenalCard: FC<ArsenalCardProps> = ({
  title,
  description,
  meterLabel,
  meterValue,
  meterPercent,
  accent,
  icon,
}) => {
  const percentClass = getPercentClass(meterPercent)

  return (
    <Card className={styles.card} hoverable>
      <Flex vertical gap={14} className={styles.cardInner}>
        <div className={styles.iconTile} data-accent={accent}>
          {icon}
        </div>

        <Typography.Title level={4} className={styles.cardTitle}>
          {title}
        </Typography.Title>

        <Typography.Paragraph className={styles.cardDescription}>
          {description}
        </Typography.Paragraph>

        <div className={styles.meter}>
          <div className={styles.meterTrack} data-accent={accent}>
            <div className={`${styles.meterFill} ${percentClass}`} data-accent={accent} />
          </div>
          <div className={styles.meterMeta}>
            <Typography.Text className={styles.meterLabel}>{meterLabel}</Typography.Text>
            <Typography.Text className={styles.meterValue}>{meterValue}</Typography.Text>
          </div>
        </div>
      </Flex>
    </Card>
  )
}