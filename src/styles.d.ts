/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react'

type CoverTheme = {
  layout: {
    header: {
      bgcolor: React.CSSProperties['color']
      color: React.CSSProperties['color']
    }
    side: {
      fixed: boolean
    }
  }
}

declare module '@material-ui/core/styles' {
  interface Theme extends CoverTheme {

  }
  // allow configuration using `createTheme`
  interface ThemeOptions extends CoverTheme {

  }
}

declare module '@material-ui/styles' {
  interface Theme extends CoverTheme {

  }
}