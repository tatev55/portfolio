import { ConfigProvider } from 'antd'
import { Route, Routes } from 'react-router-dom'
import { AppLayout } from './app/layout/AppLayout'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { useColorMode } from './shared/theme/useColorMode'

export default function App() {
  const { mode, setMode, algorithm } = useColorMode()

  return (
    <ConfigProvider
      theme={{
        algorithm,
        token: {
          colorPrimary: '#1677ff',
          borderRadius: 10,
        },
      }}
    >
      <AppLayout
        mode={mode}
        onToggleMode={() => setMode(mode === 'dark' ? 'light' : 'dark')}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AppLayout>
    </ConfigProvider>
  )
}
