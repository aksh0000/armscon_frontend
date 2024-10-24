import React from 'react'
import Menu from './Menu'
import { Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
export default function MenuBtn() {
const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
    console.log(isMenuOpen)
    if(localStorage.getItem('token')){
      localStorage.setItem('loggedin',true);
    }
    else{
      localStorage.setItem('loggedin',false);
    }
  };
  return (
    <>
        <Menu isOpen={isMenuOpen} />
        <Button
          color="secondary"
          variant='contained'
          sx={{
            borderRadius: '500px',
            height: '10vw',
            width: '10vw',
            padding: "5%",
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 100
          }}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <MenuIcon />
        </Button>
        </>
  )
}
