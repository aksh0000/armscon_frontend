import { Button } from '@mui/material'
import React from 'react'
import RegisterBtn from './RegisterBtn'
import './Register.css';
import DownloadButton from './DownloadBro';
export default function Register() {
  return (
    <div id="register_sec_container">
        <section>
        <h2>So What are you waiting for , join the SAIL!!!</h2>
        <p>BR Starts from Rs 599/-</p>
        <br/>
       <DownloadButton/>
        <RegisterBtn/>
        </section>
    </div>
  )
}
