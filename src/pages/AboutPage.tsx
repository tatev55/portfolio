import { Card, Space, Tag, Typography } from 'antd'
import { profile } from '../content/profile'

export function AboutPage() {
  return (
    <Space orientation="vertical" size={16} style={{ width: '100%' }}>
      <Typography.Title level={2} style={{ margin: 0 }}>
        About
      </Typography.Title>

      <Card>
        <Typography.Paragraph style={{ marginBottom: 12 }}>
          Write a short bio here: years of experience, what you enjoy building, and
          the kinds of roles you’re looking for.
        </Typography.Paragraph>
        <Typography.Paragraph style={{ marginBottom: 0 }}>
          Add highlights like performance wins, accessibility focus, team leadership,
          or shipped products.
        </Typography.Paragraph>
      </Card>

      <Card title="Skills">
        <Space wrap>
          {profile.skills.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </Space>
      </Card>
    </Space>
  )
}

