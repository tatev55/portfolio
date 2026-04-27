import type { ThemeConfig } from 'antd'

export const getAntdTheme = (algorithm: ThemeConfig['algorithm']): ThemeConfig => {
  return {
    algorithm,
    token: {
      colorPrimary: '#1677ff',
      borderRadius: 10,
    },
  }
}

