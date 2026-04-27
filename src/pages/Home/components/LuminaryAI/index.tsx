import type { FC } from 'react'
import { Card, Flex, Space, Typography } from 'antd'
import { useTranslation } from 'react-i18next'
import type { LuminaryAIProps } from './types'
import styles from './styles.module.css'

export const LuminaryAI: FC<LuminaryAIProps> = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.wrap}>
      <Flex className={styles.grid} gap={22} align="stretch">
        <Card className={styles.infoCard}>
          <Flex vertical gap={10}>
            <Space className={styles.kicker} size={10}>
              <span className={styles.kickerDot} aria-hidden="true" />
              <Typography.Text className={styles.kickerText}>
                {t('home.luminaryAi.title')}
              </Typography.Text>
            </Space>

            <Typography.Paragraph className={styles.subtitle}>
              {t('home.luminaryAi.subtitle')}
            </Typography.Paragraph>
          </Flex>
        </Card>

        <div className={styles.chatWrap} aria-hidden="true">
          <div className={styles.chatGlow} />
          <div className={styles.chatFrame}>
            <div className={styles.chatInner}>
              <div className={styles.chatHeader} />
              <div className={styles.chatBody}>
                <div className={styles.bubbleLeft} />
                <div className={styles.bubbleLeft} />
                <div className={styles.bubbleRight} />
              </div>
              <div className={styles.chatInput} />
            </div>
          </div>
        </div>
      </Flex>
    </div>
  )
}

