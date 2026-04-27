import { Flex, Typography } from 'antd'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './styles.module.css'
import type { SkillsPageProps } from './types'

export const SkillsPage: FC<SkillsPageProps> = () => {
  const { t } = useTranslation()

  return (
    <Flex vertical gap={12} className={styles.root}>
      <Typography.Title level={2}>{t('nav.skills')}</Typography.Title>
      <Typography.Paragraph className={styles.subtitle}>
        {t('nav.skills')}
      </Typography.Paragraph>
    </Flex>
  )
}

