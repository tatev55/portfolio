import { CodeOutlined } from '@ant-design/icons'
import { Button, Card, Col, ConfigProvider, Empty, Flex, Row, Space, Tag, Tooltip, Typography } from 'antd'
import type { FC } from 'react'
import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { featuredProjects, type ProjectStackFilter, projectStackFilterIds } from '../../content/featuredProjects'
import { Reveal } from '../About/components/Reveal'
import { palette } from '../../shared/theme/palette'
import { useColorMode } from '../../shared/theme/useColorMode'
import { ProjectThumb } from './ProjectThumb'
import styles from './styles.module.css'
import type { ProjectsPageProps } from './types'

type ActiveFilter = 'all' | ProjectStackFilter

const filterOrder: ActiveFilter[] = ['all', ...projectStackFilterIds]

export const ProjectsPage: FC<ProjectsPageProps> = () => {
  const { t } = useTranslation()
  const { mode } = useColorMode()
  const [activeFilter, setActiveFilter] = useState<ActiveFilter>('all')
  const projectPrimary = mode === 'dark' ? palette.accentOnDark : palette.accent

  const visibleProjects = useMemo(() => {
    if (activeFilter === 'all') return featuredProjects
    return featuredProjects.filter((p) => p.stackFilters.includes(activeFilter))
  }, [activeFilter])

  return (
    <ConfigProvider theme={{ token: { colorPrimary: projectPrimary, borderRadiusLG: 12 } }}>
      <Flex vertical gap={24} className={styles.root}>
        <Reveal index={1} className={styles.headerReveal}>
          <Typography.Title level={2} className={styles.pageTitle}>
            {t('projects.featuredTitle')}
          </Typography.Title>
        </Reveal>

        <Reveal index={2} className={styles.filtersReveal}>
          <Space wrap size={[8, 8]} className={styles.filters}>
            {filterOrder.map((id) => (
              <Button
                key={id}
                type={activeFilter === id ? 'primary' : 'default'}
                onClick={() => setActiveFilter(id)}
                aria-pressed={activeFilter === id}
              >
                {t(`projects.filters.${id}`)}
              </Button>
            ))}
          </Space>
        </Reveal>

        {visibleProjects.length === 0 ? (
          <Reveal index={3} className={styles.emptyReveal}>
            <Empty description={t('projects.empty')} />
          </Reveal>
        ) : (
          <Row gutter={[20, 20]}>
            {visibleProjects.map((p, idx) => (
              <Col key={p.id} xs={24} md={12} xl={8}>
                <Reveal
                  key={`${p.id}-${activeFilter}`}
                  index={Math.min(idx + 3, 12)}
                  className={styles.cardReveal}
                >
                  <Card className={styles.projectCard} variant="borderless">
                    <a
                      href={p.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.thumbLink}
                    >
                      <ProjectThumb project={p} className={styles.thumbImg} />
                    </a>

                    <div className={styles.cardBody}>
                      <Space wrap size={[6, 6]} className={styles.tagRow}>
                        {p.tags.map((tag) => (
                          <Tag key={tag} className={styles.stackTag}>
                            {tag}
                          </Tag>
                        ))}
                      </Space>

                      <Flex align="center" gap={8} wrap className={styles.titleRow}>
                        <Typography.Title level={4} className={styles.cardTitle}>
                          {p.title}
                        </Typography.Title>
                        {p.isGroupProject ? (
                          <Tag color={projectPrimary} className={styles.groupTag}>
                            {t('projects.groupProject')}
                          </Tag>
                        ) : null}
                      </Flex>

                      <Flex gap={8} className={styles.actions}>
                        <Button
                          type="primary"
                          size="large"
                          href={p.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.demoBtn}
                        >
                          {t('projects.liveDemo')}
                        </Button>

                        {p.isRepoPrivate || !p.repoUrl ? (
                          <Tooltip title={t('projects.privateRepo')}>
                            <span className={styles.iconBtnWrap}>
                              <Button
                                size="large"
                                icon={<CodeOutlined />}
                                disabled
                                aria-label={t('projects.sourceCode')}
                                className={styles.sourceBtn}
                              />
                            </span>
                          </Tooltip>
                        ) : (
                          <Button
                            size="large"
                            icon={<CodeOutlined />}
                            href={p.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={t('projects.sourceCode')}
                            className={styles.sourceBtn}
                          />
                        )}
                      </Flex>
                    </div>
                  </Card>
                </Reveal>
              </Col>
            ))}
          </Row>
        )}
      </Flex>
    </ConfigProvider>
  )
}
