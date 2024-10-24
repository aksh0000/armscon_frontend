import React from 'react'
import { createTheme,ThemeProvider } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            width:'40%',
            fontSize: '16px',
            padding: '2% 5%',
            background:'transparent',
            border:'1px solid white',
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
export default function LoginBtn() {
  return (
    <div><ThemeProvider theme={theme}>
    <Link to="/login"><Button>Login</Button></Link>
  </ThemeProvider></div>
  )
}
