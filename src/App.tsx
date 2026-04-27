import { ConfigProvider } from 'antd'
import { AppLayout } from './app/layout/AppLayout'
import { AppRouter } from './app/router/AppRouter'
import { getAntdTheme } from './shared/theme/theme'
import { useColorMode } from './shared/theme/useColorMode'

const App = () => {
  const { mode, setMode, algorithm } = useColorMode()

  return (
    <ConfigProvider theme={getAntdTheme(algorithm)}>
      <AppLayout
        mode={mode}
        onSetMode={(next) => setMode(next)}
      >
        <AppRouter />
      </AppLayout>
    </ConfigProvider>
  )
}

export default App
