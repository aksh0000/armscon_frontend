import React from 'react'
import './Testimonials_container.css'
import Testimonial_card from './Testimonial_card'
import Sponsors from './Sponsors'
import Hr from './Hr'
import testimonials_data from '../data/testimonials'
export default function Testimonials_container() {
  return (
    <div id="Testimonials_container">
        <header id="heading_container">
            <h1>Testimonials</h1>
            <p>Lorem Ipsum is a placeholder text used in publishing, graphic design, and digital media. It originated from a Latin text written by Cicero in 45 BC, “De Finibus Bonorum et Malorum” </p>
        </header>
        <div id="mmmm_container">
        <section id="main_cards_holder">

          {
            testimonials_data && testimonials_data.map(item=><Testimonial_card name={item.name} position={item.position} short_testicle= {item.shortdata} long_testicle={item.longdata} image={item.dp} />)
          }
            
            
        </section>
        </div>
        <br/>
        <br/>
        <br/>
        <Hr/>
        <Sponsors/>
    </div>
  )
}
