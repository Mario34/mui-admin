import React from 'react'
import { createTheme } from '@material-ui/core/styles'
import { blue, grey } from '@material-ui/core/colors'

import type { Theme } from '@material-ui/core/styles'

export type ThemeMode = 'light' | 'dark'

export interface AppConfigType {
  theme: Theme
  setDark: () => void
  setLight: () => void
  toggleMode: () => void
}

export const AppThemeContext = React.createContext<AppConfigType>({} as AppConfigType)

export const modeColor = {
  light: {
    header: {
      bgcolor: blue[700],
      color: grey[50],
    },
    side: {
      fixed: true,
    },
  },
  dark: {
    header: {
      bgcolor: grey[900],
      color: grey[50],
    },
    side: {
      fixed: true,
    },
  },
}

export const AppConfigProvider = AppThemeContext.Provider

export const useAppConfig = () => {
  return React.useContext(AppThemeContext)
}

export const createAppConfig = () => {
  const [mode, setMode] = React.useState<ThemeMode>('light')

  const setDark = () => {
    setMode('dark')
  }

  const setLight = () => {
    setMode('light')
  }

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light')
    } else {
      setMode('dark')
    }
  }

  /**
   * 主题色配置
  */
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
        layout: modeColor[mode],
      }),
    [mode],
  )

  return { theme, setDark, setLight, toggleMode }
}