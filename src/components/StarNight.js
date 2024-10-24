import React from 'react'
import './StarNight.css'
import video from '../assets/backvdo.mp4'
export default function StarNight() {
  return (
    <div id="starnight_container">
      <video autoPlay={true} muted={true} loop={true}>
        <source src={video} />
      </video>
      <h1><br/><br/><br/>THE <br/>STAR<br/>NIGHT</h1>
    </div>
  )
}
