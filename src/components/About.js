import React from 'react'
import './About.css'
import AboutCard from './AboutCard'
import image from '../assets/jack1.png'
import image_culturals from '../assets/pirate_singing.png'
import image_events from '../assets/commodore.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import image_comedy from '../assets/pirate_laughing-removebg-preview.png'
export default function About() {
  useEffect(() => {
    AOS.init(); // Initialize AOS
}, []);
  return (
    <div id="about_container">
        <div id="about_heading_container">
            <section id="text_section">
            <h1 data-aos="fade-right" data-aos-offset="-100">What is ARMSCON?</h1>
            <p data-aos="fade-right" data-aos-delay="100">Calling all brilliant minds in the medical world! Join us at ARMSCON 2023, the ninth edition of this incredible event, where creativity and intellect collide to create an unforgettable experience. With a legacy of 10+ years, ARMSCON is officially recognized by organizations like NAAC, HMC, various Government and Non Govt. organisations etc.</p>
            </section>
          
            
           <div data-aos="fade-right" data-aos-delay="200" data-aos-offset="-100">
          <AboutCard image={image} title="20+ Workshops" subheading={["Medical students","Nursing","Physiotherapy"]} direction={false} />
          </div>
          <div data-aos="fade-right" data-aos-delay="300" data-aos-offset="-120">
          <AboutCard image={image_culturals} title="20+ Culturals" subheading={[
            "Dancing","Singing","Battle Of Bands"
          ]}  direction={true}/>
          </div>
          <div data-aos="fade-right" data-aos-delay="350" data-aos-offset="-150">
          <AboutCard image={image_events} title="50+ Events" subheading={["Treasure hunt","Something intresting","something more interesting"]}/>
          </div>
          <div data-aos="fade-right" data-aos-delay="400" data-aos-offset="-170">
          <AboutCard image={image_comedy} title="Comedy Nights" subheading={["We just can't send you back home all tired and stressed out!!!"]} direction={true}/>
          </div>
         <br/>
         <br/>
         <h1>& How Can we forget about </h1>
        </div>
        
    </div>
  )
}

