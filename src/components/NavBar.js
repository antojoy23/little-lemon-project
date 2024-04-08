import React from 'react'
import { Link } from 'react-router-dom'

import './NavBar.css';


export default function NavBar() {
    return (
        <div id='navigation'>
            <img src="/Logo.svg" alt="Little Lemon Logo" />
            <nav>
                <ul className='nav-items'>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/reserve">Reservations</Link>
                    <Link to="/">Order Online</Link>
                    <Link to="/">Login</Link>
                </ul>
            </nav>
        </div>
    )
}
