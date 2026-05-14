import { theme as antdTheme } from 'antd'
import type { ThemeConfig } from 'antd'
import { palette } from './palette'
import type { ColorMode } from './types'

const shared = {
  borderRadius: 10,
  colorInfo: palette.accent,
} as const

const lightTokens: ThemeConfig['token'] = {
  ...shared,
  colorPrimary: palette.accent,
  colorPrimaryHover: palette.accentHover,
  colorPrimaryActive: palette.accentActive,
  colorLink: '#A66B65',
  colorLinkHover: '#8F5650',
  colorSuccess: '#6D8F7E',
  colorWarning: '#C9A227',
  colorError: '#C45C5C',
  colorBgLayout: palette.cream,
  colorBgContainer: palette.white,
  colorBgElevated: palette.white,
  colorText: palette.charcoal,
  colorTextSecondary: 'rgba(43, 39, 41, 0.68)',
  colorTextTertiary: 'rgba(43, 39, 41, 0.48)',
  colorBorder: 'rgba(43, 39, 41, 0.12)',
  colorBorderSecondary: 'rgba(43, 39, 41, 0.08)',
}

const darkTokens: ThemeConfig['token'] = {
  ...shared,
  colorPrimary: palette.accentOnDark,
  colorPrimaryHover: palette.accentOnDarkHover,
  colorPrimaryActive: palette.accentHover,
  colorLink: palette.accentOnDark,
  colorLinkHover: '#F8E4E1',
  colorSuccess: '#8EB5A4',
  colorWarning: '#D4B85C',
  colorError: '#E07A7A',
  colorBgLayout: palette.darkBg,
  colorBgContainer: palette.darkSurface,
  colorBgElevated: palette.darkElevated,
  colorText: 'rgba(250, 246, 242, 0.92)',
  colorTextSecondary: 'rgba(250, 246, 242, 0.58)',
  colorTextTertiary: 'rgba(250, 246, 242, 0.42)',
  colorBorder: 'rgba(255, 248, 245, 0.1)',
  colorBorderSecondary: 'rgba(255, 248, 245, 0.06)',
}

export const getAntdTheme = (mode: ColorMode): ThemeConfig => {
  const isDark = mode === 'dark'
  return {
    algorithm: isDark ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
    token: isDark ? darkTokens : lightTokens,
  }
}
