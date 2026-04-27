import type { FC } from 'react'
import { PlayCircleOutlined } from '@ant-design/icons'
import { Button, Card, Flex, Image, Space, Typography } from 'antd'
import { useTranslation } from 'react-i18next'
import portrait from '../../../../assets/portrait.png'
import type { MeetMyVirtualSelfProps } from './types'
import styles from './styles.module.css'

export const MeetMyVirtualSelf: FC<MeetMyVirtualSelfProps> = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.wrap}>
      <Flex className={styles.grid} gap={24} align="stretch">
        <Card className={styles.card}>
          <Flex vertical gap={12}>
            <Typography.Title level={2} className={styles.title}>
              {t('home.meetMyVirtualSelf.title')}
            </Typography.Title>
            <Typography.Paragraph className={styles.subtitle}>
              {t('home.meetMyVirtualSelf.subtitle')}
            </Typography.Paragraph>

            <Space className={styles.audio}>
              <Button icon={<PlayCircleOutlined />} className={styles.audioButton}>
                {t('home.meetMyVirtualSelf.audioLabel')}
              </Button>
            </Space>
          </Flex>
        </Card>

        <div className={styles.portraitWrap} aria-hidden="true">
          <Image src={portrait} alt="Portrait" className={styles.portrait} preview={false} />
        </div>
      </Flex>
    </div>
  )
}

