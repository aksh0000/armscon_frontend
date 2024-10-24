import React from 'react'
import Instagram from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
export default function IconsHolder() {
  return (
    <div id="icons_holder"style={{color:'rgb(150,150,150)',display:'flex',justifyContent:'space-between',width:'25%'}}>
        <Instagram/>
        <YouTubeIcon/>
        <FacebookIcon/>
    </div>
  )
}
