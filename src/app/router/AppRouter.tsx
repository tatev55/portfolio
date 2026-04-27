import { Route, Routes } from 'react-router-dom'
import { AboutPage } from '../../pages/About'
import { ContactPage } from '../../pages/Contact'
import { HomePage } from '../../pages/Home'
import { InnovationHubPage } from '../../pages/InnovationHub'
import { NotFoundPage } from '../../pages/NotFound'
import { ProjectsPage } from '../../pages/Projects'
import { SkillsPage } from '../../pages/Skills'
import { GeminiPage } from '../../pages/Gemini'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/skills" element={<SkillsPage />} />
      <Route path="/innovation-hub" element={<InnovationHubPage />} />
      <Route path="/gemini" element={<GeminiPage />} />
      <Route path="/contact" element={<ContactPage />} />     
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

