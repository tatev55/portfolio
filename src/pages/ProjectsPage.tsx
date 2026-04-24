import { Card, Col, Row, Space, Tag, Typography } from 'antd'

type Project = {
  title: string
  description: string
  tags: string[]
  link?: string
}

const PROJECTS: Project[] = [
  {
    title: 'Portfolio Starter',
    description: 'This site — built with Vite, React, TypeScript, and Ant Design.',
    tags: ['React', 'TypeScript', 'Antd'],
  },
  {
    title: 'Admin Dashboard',
    description: 'Tables, charts, filters, and role-based access patterns.',
    tags: ['UI', 'Data', 'Performance'],
  },
  {
    title: 'E-commerce UI',
    description: 'Product list, cart, checkout, and SEO-friendly pages.',
    tags: ['UX', 'Routing', 'State'],
  },
]

export function ProjectsPage() {
  return (
    <Space orientation="vertical" size={16} style={{ width: '100%' }}>
      <Typography.Title level={2} style={{ margin: 0 }}>
        Projects
      </Typography.Title>

      <Row gutter={[16, 16]}>
        {PROJECTS.map((p) => (
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

