import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider as StyProvider } from '@material-ui/styles'
import { routes } from '/@/router'
import RouterView from '/@/router/RouterView'
import { createAppConfig, AppThemeContext } from './hooks/app-config'
import { CssBaseline } from '@material-ui/core'
import NotFound from '/@/page/404'
import { Switch } from 'react-router-dom'

const App: React.FC = () => {
  // global AppConfig
  const appConfig = createAppConfig()

  return (
    <AppThemeContext.Provider value={appConfig}>
      <StyProvider theme={appConfig.theme}>
        <ThemeProvider theme={appConfig.theme}>
          <CssBaseline>
            <BrowserRouter>
              <Switch>
                <RouterView notFound={<NotFound/>} routes={routes} />
              </Switch>
            </BrowserRouter>
          </CssBaseline>
        </ThemeProvider>
      </StyProvider>
    </AppThemeContext.Provider>
  )
}

export default App
