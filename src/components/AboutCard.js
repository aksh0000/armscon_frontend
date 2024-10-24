import React from 'react'

import './AboutCard.css'
export default function AboutCard(props) {
    return (
        <div id="outer_container">
        <div id="about_card_container" style={{flexDirection:props.direction ? "row-reverse" : "row"}}>
            <section id="image_holder">
                <img src={props.image} />
            </section>
            <section id="text_container">
                <h1>
                    {props.title}
                </h1>
                <hr/>
                <ul>
                    {props.subheading && props.subheading.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </section>
        </div>
        </div>
    )
}

