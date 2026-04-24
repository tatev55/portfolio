import { Button, Card, Col, Row, Space, Tag, Typography } from 'antd'
import { Link } from 'react-router-dom'

export function HomePage() {
  return (
    <Space orientation="vertical" size={18} style={{ width: '100%' }}>
      <Card style={{ borderRadius: 16 }}>
        <Space orientation="vertical" size={10} style={{ width: '100%' }}>
          <Tag color="blue">Available for freelance</Tag>
          <Typography.Title style={{ margin: 0 }}>
            Hi, I’m <span style={{ color: '#1677ff' }}>Your Name</span>.
          </Typography.Title>
          <Typography.Paragraph style={{ maxWidth: 820, marginBottom: 0 }}>
            Frontend developer focused on React, TypeScript, UI systems, and building
            fast, accessible products.
          </Typography.Paragraph>
          <Space wrap>
            <Button type="primary">
              <Link to="/projects">View projects</Link>
            </Button>
            <Button>
              <Link to="/contact">Contact me</Link>
            </Button>
          </Space>
        </Space>
      </Card>

      <Row gutter={[16, 16]}>
        <Col xs={24} md={8}>
          <Card title="Stack">
            <Space wrap>
              <Tag>React</Tag>
              <Tag>TypeScript</Tag>
              <Tag>Vite</Tag>
              <Tag>Ant Design</Tag>
              <Tag>pnpm</Tag>
            </Space>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card title="What I do">
            <Typography.Paragraph style={{ marginBottom: 0 }}>
              Design systems, dashboards, marketing sites, and web apps with clean UX.
            </Typography.Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card title="Location / Remote">
            <Typography.Paragraph style={{ marginBottom: 0 }}>
              Add your city + timezone here. Remote-friendly.
            </Typography.Paragraph>
          </Card>
        </Col>
      </Row>
    </Space>
  )
}

