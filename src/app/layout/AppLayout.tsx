import { Button, Dropdown, Layout, Menu, Space, Typography } from 'antd'
import type { ItemType } from 'antd/es/menu/interface'
import type { FC } from 'react'
import { useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { GlobalOutlined, MoonOutlined, SunOutlined } from '@ant-design/icons'
import { profile } from '../../content/profile'
import { i18n } from '../../shared/i18n/i18n'
import type { AppLayoutProps } from './types'
import styles from './styles.module.css'

const { Header, Content, Footer } = Layout

export const AppLayout: FC<AppLayoutProps> = ({ mode, onSetMode, children }) => {
  const location = useLocation()
  const { t } = useTranslation()

  const selectedKeys = useMemo(() => {
    const path = location.pathname
    if (path === '/') return ['home']
    if (path.startsWith('/about')) return ['about']
    if (path.startsWith('/projects')) return ['projects']
    if (path.startsWith('/skills')) return ['skills']
    if (path.startsWith('/innovation-hub')) return ['innovationHub']
    if (path.startsWith('/gemini')) return ['gemini']
    return []
  }, [location.pathname])

  const items: ItemType[] = [
    { key: 'home', label: <Link to="/">{t('nav.home')}</Link> },
    { key: 'about', label: <Link to="/about">{t('nav.about')}</Link> },
    { key: 'projects', label: <Link to="/projects">{t('nav.projects')}</Link> },
    { key: 'skills', label: <Link to="/skills">{t('nav.skills')}</Link> },
    {
      key: 'innovationHub',
      label: <Link to="/innovation-hub">{t('nav.innovationHub')}</Link>,
    },
    {
      key: 'gemini',
      label: <Link to="/gemini">{t('nav.gemini')}</Link>,
    },
  ]

  const languageItems: ItemType[] = [
    {
      key: 'en',
      label: t('language.en'),
      onClick: () => void i18n.changeLanguage('en'),
    },
    {
      key: 'ru',
      label: t('language.ru'),
      onClick: () => void i18n.changeLanguage('ru'),
    },
  ]

  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <div className={styles.headerInner}>
          <Space className={styles.brand} size={10}>
            <Typography.Title level={4} className={styles.brandTitle}>
              {t('home.hero.titleLine1')}
            </Typography.Title>
             <Typography.Title level={4} className={styles.brandTitle}>
              {t('home.hero.titleLine2')}
            </Typography.Title>
          </Space>

          <div className={styles.nav}>
            <Menu
              mode="horizontal"
              selectable
              selectedKeys={selectedKeys}
              items={items}
              className={styles.menu}
            />
          </div>

          <Space className={styles.headerActions}>
            <Dropdown menu={{ items: languageItems }} placement="bottomRight" trigger={['click']}>
              <Button className={styles.iconButton} aria-label={t('language.en')}>
                <GlobalOutlined />
              </Button>
            </Dropdown>

            <Space className={styles.modeSwitch} size={6}>
              <Button
                className={styles.iconButton}
                onClick={() => onSetMode('light')}
                aria-label={t('theme.light')}
                data-active={mode === 'light'}
              >
                <SunOutlined />
              </Button>
              <Button
                className={styles.iconButton}
                onClick={() => onSetMode('dark')}
                aria-label={t('theme.dark')}
                data-active={mode === 'dark'}
              >
                <MoonOutlined />
              </Button>
            </Space>
          </Space>
        </div>
      </Header>

      <Content className={styles.content}>
        <div className="container">{children}</div>
      </Content>

      <Footer className={styles.footer}>
        <Space wrap>
          {profile.socials.map((s) => (
            <Typography.Link key={s.label} href={s.href} target="_blank">
              {s.label}
            </Typography.Link>
          ))}
        </Space>
        <div className={styles.copyright}>
          © {new Date().getFullYear()} {profile.name}
        </div>
      </Footer>
    </Layout>
  )
}

