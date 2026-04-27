import { theme } from 'antd'
import { useEffect, useMemo, useState } from 'react'
import type { ColorMode } from './types'

const STORAGE_KEY = 'portfolio:color-mode'
const DATASET_KEY = 'theme'

function getInitialMode(): ColorMode {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') return stored
  return 'dark'
}

export function useColorMode() {
  const [mode, setMode] = useState<ColorMode>(() => getInitialMode())

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, mode)
  }, [mode])

  useEffect(() => {
    document.documentElement.dataset[DATASET_KEY] = mode
  }, [mode])

  const algorithm = useMemo(() => {
    return mode === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm
  }, [mode])

  return { mode, setMode, algorithm }
}

