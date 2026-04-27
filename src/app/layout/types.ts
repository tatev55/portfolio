import type { ReactNode } from 'react'
import type { ColorMode } from '../../shared/theme/types'

export type AppLayoutProps = {
  mode: ColorMode
  onSetMode: (mode: ColorMode) => void
  children: ReactNode
}

