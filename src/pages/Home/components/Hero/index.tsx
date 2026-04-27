import type { FC } from 'react'
import { Button, Flex, Space, Typography } from 'antd'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import type { HeroProps } from './types'
import styles from './styles.module.css'

export const Hero: FC<HeroProps> = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.wrap}>
      <div className={styles.glow} />

      <Flex vertical gap={18} className={styles.inner}>
        <div className={styles.badge}>{t('home.hero.availabilityBadge')}</div>

        <div className={styles.title}>
          <Typography.Title className={styles.titleLine} level={1}>
            {t('home.hero.titleLine1')}
          </Typography.Title>
          <Typography.Title className={styles.titleLine} level={1}>
            <span className={styles.titleAccent}>{t('home.hero.titleLine2')}</span>
          </Typography.Title>
        </div>

        <Typography.Paragraph className={styles.subtitle}>
          {t('home.hero.subtitle')}
        </Typography.Paragraph>

        <Space wrap className={styles.ctas}>
          <Button size="large" type="primary" className={styles.primaryCta}>
            <Link to="/projects" className={styles.primaryCtaLink}>
              {t('home.hero.ctaPrimary')}
            </Link>
          </Button>
          <Button size="large" className={styles.secondaryCta}>
            {t('home.hero.ctaSecondary')}
          </Button>
        </Space>
      </Flex>
    </div>
  )
}

