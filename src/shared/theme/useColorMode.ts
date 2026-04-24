import { theme } from 'antd'
import { useEffect, useMemo, useState } from 'react'

export type ColorMode = 'light' | 'dark'

const STORAGE_KEY = 'portfolio:color-mode'

function getInitialMode(): ColorMode {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function useColorMode() {
  const [mode, setMode] = useState<ColorMode>(() => getInitialMode())

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, mode)
  }, [mode])

  const algorithm = useMemo(() => {
    return mode === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm
  }, [mode])

  return { mode, setMode, algorithm }
}

