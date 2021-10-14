import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import { AppRouter } from './routers/AppRouter';

const theme = createTheme();

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  )
}
