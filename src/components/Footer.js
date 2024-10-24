import React from 'react'
import './Footer.css'
import IconsHolder from './IconsHolder';
import Instagram from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Footer() {
  return (
    <article id="footer_titles_content">
        <p>
            The following site is developed and maintained by the team of armscon.<br/>
            <br/>
            &copy; ARMSCON 2024
        </p>
    <div id="footer_container">
        
        <section id="follow_us_holder">
            <h2>Follow us on:</h2>
            <ul>
                <li>
                <Instagram/> Instagram
                </li>
                <li><YouTubeIcon/> YouTube</li>
                <li><FacebookIcon/> Facebook</li>
            </ul>
        </section>
        <section id="contact_details_holder">
            <h2>Contact Us:</h2>
            <ul>
                <li>6396233297</li>
                <li>9869141685</li>
            </ul>
        </section>
    </div>
    </article>
  )
}

