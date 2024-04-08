import React from 'react'

import FooterLogo from '../assets/footer-logo.png';

import './Footer.css'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer id='footer'>
            <section>
                <img id="footer-logo" src={FooterLogo} alt="restaurant footer logo" />
            </section>
            <section>
                <h2>Navigation</h2>
                <ul id="footer-nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/">Menu</Link></li>
                    <li><Link to="/">Reservations</Link></li>
                    <li><Link to="/">Order Online</Link></li>
                    <li><Link to="/">Login</Link></li>
                </ul>
            </section>
            <section>
                <h2>Contact</h2>
                <p>2395 Maldove Way,
                    Chicago Illinois</p>
                <p>(629)-243-6827</p>
                <p><a href="mailto:info@littlelemon.com">info@littlelemon.com</a></p>
            </section>
            <section>
                <h2>Connect</h2>
                <p><a href="www.facebook.com" target="_blank">Facebook</a></p>
                <p><a href="www.instagram.com" target="_blank">Instagram</a></p>
            </section>
        </footer>
    )
}
