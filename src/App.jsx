import { useState } from 'react'
import Ai_predector from './components/Ai_predector'
import { createTheme , ThemeProvider } from '@mui/material'


const theme = createTheme({
  palette: {
    primary: {
      main: '#4caf50',
      light: '#66bb6a',
      dark:"#43a047"
    },
    secondary: {
      main: '#607d8b',
      light:"#cfd8dc",
      dark:"#455a64"
    },
    background: {
      default: '#fafafa',  // Light background
    },
    text: {
      primary: '#1b5e20',  // Dark text
      secondary: '#37474f',  // Muted text
    },
    error: {
      main: '#d32f2f',  // Error Red
    },
    success: {
      main: '#388e3c',  // Success Green
    },
  },
});
function App() {

  return (
    <ThemeProvider theme={theme}>
      <Ai_predector />
    </ThemeProvider>
  )
}

export default App
