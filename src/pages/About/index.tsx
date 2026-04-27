import { Card, Flex, Space, Tag, Typography } from 'antd'
import type { FC } from 'react'
import {  useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { useTranslation } from 'react-i18next'
import { profile } from '../../content/profile'
import { DEFAULT_ABOUT_TEXT_MD } from './aboutText'
import styles from './styles.module.css'
import type { AboutPageProps } from './types'

const STORAGE_KEY = 'portfolio.gemini.latestResponse'

export const AboutPage: FC<AboutPageProps> = () => {
  const { t } = useTranslation()

  const [savedText] = useState<string | null>(() => {
    try {
      const v = localStorage.getItem(STORAGE_KEY)
      return v && v.trim().length > 0 ? v : null
    } catch {
      return null
    }
  })

  const aboutText = savedText ?? DEFAULT_ABOUT_TEXT_MD

  return (
    <Flex vertical gap={16} className={styles.root}>
      <Typography.Title level={2}>{t('about.title')}</Typography.Title>

      <Card>
        <div className={styles.aboutMarkdown}>
          <ReactMarkdown>{aboutText}</ReactMarkdown>
        </div>
      </Card>

      <Card title={t('nav.skills')}>
        <Space wrap>
          {profile.skills.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </Space>
      </Card>
    </Flex>
  )
}