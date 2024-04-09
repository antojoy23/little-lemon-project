import React from 'react'

import BruschettaImg from '../assets/bruchetta.svg';
import GreekSaladImg from '../assets/greek salad.jpg';
import LemonDessertImg from '../assets/lemon dessert.jpg';

import './Specials.css';

export default function Specials() {
    return (
        <><h2 id="specials-heading">This weeks specials!</h2>
            <section id='specials-section'>
                <article>
                    <img src={BruschettaImg} alt="Bruschetta" width="200" />
                    <div className='specials-content'>
                        <h3>Bruschetta</h3>
                        <h4>$16.99</h4>
                        <p>Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with salt and olive oil.</p>
                        <div className='out-for-delivery-btn'><a href="/#">Order for delivery</a></div>
                    </div>
                </article>
                <article>
                    <img src={GreekSaladImg} alt="Greek salad" width="200" />
                    <div className='specials-content'>
                        <h3>Greek Salad</h3>
                        <h4>$12.99</h4>
                        <p>Refreshing salad, made with tomato, lettuce, feta cheese, and olives. Dressed with salt, hot pepper and olive oil.</p>
                        <div className='out-for-delivery-btn'><a href="/#">Order for delivery</a></div>
                    </div>
                </article>
                <article>
                    <img src={LemonDessertImg} alt="Lemon dessert" width="200" />
                    <div className='specials-content'>
                        <h3>Lemon Dessert</h3>
                        <h4>$8.50</h4>
                        <p>Fresh baked lemon bread coated in salt and sugar. Powdered in citrus and lemon zest.</p>
                        <div className='out-for-delivery-btn'><a href="/#">Order for delivery</a></div>
                    </div>
                </article>
            </section></>
    )
}
