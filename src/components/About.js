import React from 'react'

import MAImage1 from '../assets/Mario and Adrian A.jpg';
import MAImage2 from '../assets/Mario and Adrian b.jpg';

import './About.css'

export default function About() {
    return (
        <article id="about-article">
            <section id="about-content-wrapper">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago, and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers continue to oversee the Little Lemon restaurant, nearly thirty years later.</p>
            </section>
            <section id="about-images-wrapper">
                <div>
                    <img src={MAImage1} alt="Mario and Adrian 1" />
                    <img src={MAImage2} alt="Mario and Adrian 2" />
                </div>
            </section>
        </article>
    )
}
