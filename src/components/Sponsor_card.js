import React from 'react'
import './Sponsor_card.css';
import image from '../assets/Dell-removebg-preview.png'
export default function Sponsor_card(props) {
  return (
    <div id="Sponsor_card">
        <img src={
            props.image
        }></img>
        <h1>{props.title}</h1>
    </div>
  )
}
