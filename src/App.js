import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import { AppRouter } from './routers/AppRouter';

const theme = createTheme({
  typography: {
    fontFamily: 'Exo',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  )
}
