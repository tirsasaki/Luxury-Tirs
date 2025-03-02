'use client'

import { ThemeProvider as StyledThemeProvider } from 'styled-components'

export const theme = {
  colors: {
    darkGray: '#1a1a1a',
    white: '#ffffff',
    red: '#ff0000',
  },
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <StyledThemeProvider theme={theme}>
      {children}
    </StyledThemeProvider>
  )
}
