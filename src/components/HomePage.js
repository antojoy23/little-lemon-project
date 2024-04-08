import React from 'react'
import Main from './Main'
import Heading from './Heading'

import './HomePage.css';
import Testimonials from './Testimonials';
import Specials from './Specials';
import About from './About';

export default function HomePage() {
    return (
        <Main>
            <Heading />
            <Specials />
            <Testimonials />
            <About />
        </Main>
    )
}
