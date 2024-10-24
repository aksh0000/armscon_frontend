import React from 'react'
import { createTheme,ThemeProvider } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            width:'70%',
            fontSize: '16px',
            padding: '2% 5%',
            background:'rgb(136,50,153)',
            marginTop:'30px',
            color:'white',
            '&:hover': {
              backgroundColor: '',
            },
          },
        },
      },
    },
  });
export default function RegisterBtn() {
  return (
    <div><ThemeProvider theme={theme}>
    <Link to="/register"><Button>Register</Button></Link>
  </ThemeProvider></div>
  )
}
