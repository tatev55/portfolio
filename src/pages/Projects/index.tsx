import { Card, Col, Flex, Row, Space, Tag, Typography } from 'antd'
import type { FC } from 'react'
import { profile } from '../../content/profile'
import styles from './styles.module.css'
import type { ProjectsPageProps } from './types'

export const ProjectsPage: FC<ProjectsPageProps> = () => {
  return (
    <Flex vertical gap={16} className={styles.root}>
      <Typography.Title level={2}>Projects</Typography.Title>

      <Row gutter={[16, 16]}>
        {profile.projects.map((p) => (
          <Col key={p.title} xs={24} md={12} lg={8}>
            <Card title={p.title} hoverable>
              <Typography.Paragraph>{p.description}</Typography.Paragraph>
              <Space wrap>
                {p.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </Space>
            </Card>
          </Col>
        ))}
      </Row>
    </Flex>
  )
}

