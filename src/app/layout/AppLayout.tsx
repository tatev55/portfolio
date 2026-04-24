import { GithubOutlined, LinkOutlined, MailOutlined } from '@ant-design/icons'
import { Button, Layout, Menu, Space, Typography } from 'antd'
import type { ItemType } from 'antd/es/menu/interface'
import { useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import type { ColorMode } from '../../shared/theme/useColorMode'

const { Header, Content, Footer } = Layout

type Props = {
  mode: ColorMode
  onToggleMode: () => void
  children: React.ReactNode
}

export function AppLayout({ mode, onToggleMode, children }: Props) {
  const location = useLocation()

  const selectedKeys = useMemo(() => {
    const path = location.pathname
    if (path === '/') return ['home']
    if (path.startsWith('/about')) return ['about']
    if (path.startsWith('/projects')) return ['projects']
    if (path.startsWith('/contact')) return ['contact']
    return []
  }, [location.pathname])

  const items: ItemType[] = [
    { key: 'home', label: <Link to="/">Home</Link> },
    { key: 'about', label: <Link to="/about">About</Link> },
    { key: 'projects', label: <Link to="/projects">Projects</Link> },
    { key: 'contact', label: <Link to="/contact">Contact</Link> },
  ]

  return (
    <Layout style={{ minHeight: '100%' }}>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          padding: 0,
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center' }}>
          <Space style={{ flex: '0 0 auto' }} size={10}>
            <Typography.Title level={4} style={{ margin: 0 }}>
              Your Name
            </Typography.Title>
            <Typography.Text type="secondary">Frontend Developer</Typography.Text>
          </Space>

          <div style={{ flex: '1 1 auto' }} />

          <Menu
            mode="horizontal"
            selectable
            selectedKeys={selectedKeys}
            items={items}
            style={{ minWidth: 420, justifyContent: 'flex-end', borderBottom: 'none' }}
          />

          <Space style={{ marginLeft: 12 }}>
            <Button onClick={onToggleMode}>
              {mode === 'dark' ? 'Light' : 'Dark'}
            </Button>
          </Space>
        </div>
      </Header>

      <Content style={{ padding: '28px 0 60px' }}>
        <div className="container">{children}</div>
      </Content>

      <Footer style={{ textAlign: 'center' }}>
        <Space>
          <Typography.Link href="mailto:you@example.com" target="_blank">
            <Space size={6}>
              <MailOutlined />
              Email
            </Space>
          </Typography.Link>
          <Typography.Link href="https://github.com/" target="_blank">
            <Space size={6}>
              <GithubOutlined />
              GitHub
            </Space>
          </Typography.Link>
          <Typography.Link href="https://www.linkedin.com/" target="_blank">
            <Space size={6}>
              <LinkOutlined />
              LinkedIn
            </Space>
          </Typography.Link>
        </Space>
        <div style={{ marginTop: 8, opacity: 0.7 }}>
          © {new Date().getFullYear()} Your Name
        </div>
      </Footer>
    </Layout>
  )
}

