import { Card, Col, Row, Space, Tag, Typography } from 'antd'
import { profile } from '../content/profile'

export function ProjectsPage() {
  return (
    <Space orientation="vertical" size={16} style={{ width: '100%' }}>
      <Typography.Title level={2} style={{ margin: 0 }}>
        Projects
      </Typography.Title>

      <Row gutter={[16, 16]}>
        {profile.projects.map((p) => (
          <Col key={p.title} xs={24} md={12} lg={8}>
            <Card title={p.title} hoverable>
              <Typography.Paragraph style={{ marginBottom: 12 }}>
                {p.description}
              </Typography.Paragraph>
              <Space wrap>
                {p.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </Space>
            </Card>
          </Col>
        ))}
      </Row>
    </Space>
  )
}

