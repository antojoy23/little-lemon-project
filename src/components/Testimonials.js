import React from 'react'

import QuotesIcon from '../assets/quotes_icon.svg';

import './Testimonials.css';

const testimonialsData = [
    {
        id: 1,
        quote: "This is the best Mediterranean food that I've ever had!",
        author: "Micheal Caldwell"
    },
    {
        id: 2,
        quote: "My Shiba Inu, Mugi, really loved the cozy vibes and delicious food here.",
        author: "Alan Chen"
    },
    {
        id: 3,
        quote: "I've had some great Mediterranean food before, but none of them beats Little Lemon in flavor and texture.",
        author: "Casey Lau"
    },
    {
        id: 4,
        quote: "Great food, welcoming staff, cozy atmosphere. A great place to treat your kids to.",
        author: "John Rosenblum"
    },
    {
        id: 5,
        quote: "The food here really refreshed me after a late night shift at the local supply depot.",
        author: "Jim Reynor"
    },
    {
        id: 6,
        quote: "I came to Little Lemon after a 5 hour flight from the East Coast. The food here tasted so delicious after the trip here.",
        author: "Brian Dean"
    },
    {
        id: 7,
        quote: "The food here was fire!! Everyone should try this place out at least once if they live in Chicago.",
        author: "Tyler Tohmine"
    },
    {
        id: 8,
        quote: "This restaurant served as a perfect dinner for me after a long night of studying. I would definitely order from here again!",
        author: "Jack Hu"
    },
]

export default function Testimonials() {
    return (
        <div id='testimonial-wrapper'>
            <h2 id="testimonial-heading">Testimonials</h2>
            <section id="testimonial-section">
                {testimonialsData.map(testimonial => {
                    return (
                        <article className='testimonial-card' key={testimonial.id}>
                            <img src={QuotesIcon} width={20} />
                            <p>{testimonial.quote}</p>
                            <p> - {testimonial.author}</p>
                        </article>
                    )
                })}
            </section>
        </div>
    )
}
