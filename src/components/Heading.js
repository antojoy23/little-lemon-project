import React from 'react'

import RestaurantFoodImg from '../assets/restauranfood.jpg'

import './Heading.css';
import { Link } from 'react-router-dom';

export default function Heading() {
    return (
        <header id='main-heading'>
            <article>
                <section>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, located on  Maldove Street in Chicago, Illionis. We focus on traditional recipes served with a modern twist.</p>
                    <div className='reserve-table-button'><Link to="/reserve">Reserve a table</Link></div>
                </section>
                <section>
                    <img src={RestaurantFoodImg} alt="Restaurant food banner" />
                </section>
            </article>

        </header>
    )
}
