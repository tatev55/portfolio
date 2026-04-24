import { Button, Card, Col, Row, Space, Tag, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { profile } from '../content/profile'

export function HomePage() {
  return (
    <Space orientation="vertical" size={18} style={{ width: '100%' }}>
      <Card style={{ borderRadius: 16 }}>
        <Space orientation="vertical" size={10} style={{ width: '100%' }}>
          <Tag color="blue">{profile.availabilityBadge}</Tag>
          <Typography.Title style={{ margin: 0 }}>
            {profile.headline.replace(profile.name, '')}
            <span style={{ color: '#1677ff' }}>{profile.name}</span>.
          </Typography.Title>
          <Typography.Paragraph style={{ maxWidth: 820, marginBottom: 0 }}>
            {profile.summary}
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
              {profile.skills.slice(0, 6).map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
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
              {profile.location}. Remote-friendly.
            </Typography.Paragraph>
          </Card>
        </Col>
      </Row>
    </Space>
  )
}

