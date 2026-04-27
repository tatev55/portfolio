import { Flex, Typography } from 'antd'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './styles.module.css'
import type { InnovationHubPageProps } from './types'

export const InnovationHubPage: FC<InnovationHubPageProps> = () => {
  const { t } = useTranslation()

  return (
    <Flex vertical gap={12} className={styles.root}>
      <Typography.Title level={2}>{t('nav.innovationHub')}</Typography.Title>
      <Typography.Paragraph className={styles.subtitle}>
        {t('nav.innovationHub')}
      </Typography.Paragraph>
    </Flex>
  )
}

