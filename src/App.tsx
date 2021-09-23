import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { ThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider as StyProvider } from '@material-ui/styles'
import { routes } from '/@/router'
import { createAppConfig, AppThemeContext } from './hooks/app-config'
import { CssBaseline } from '@material-ui/core'

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
                {renderRoutes(routes)}
              </Switch>
            </BrowserRouter>
          </CssBaseline>
        </ThemeProvider>
      </StyProvider>
    </AppThemeContext.Provider>
  )
}

export default App
