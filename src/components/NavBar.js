import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Logo from '../assets/Logo.svg';
import HamburgerIcon from '../assets/icon_hamburger_menu.svg';
import CloseIcon from '../assets/close-icon.svg';

import './NavBar.css';

const NavItems = (props) => {
    return (
        <nav className={props.type}>
            <ul className='nav-items'>
                <Link onClick={props.onClick} to="/">Home</Link>
                <Link onClick={props.onClick} to="/about">About</Link>
                <Link onClick={props.onClick} to="/menu">Menu</Link>
                <Link onClick={props.onClick} to="/reserve">Reservations</Link>
                <Link onClick={props.onClick} to="/">Order Online</Link>
                <Link onClick={props.onClick} to="/">Login</Link>
            </ul>
        </nav>
    )
}

export default function NavBar() {

    const [showMenu, setShowMenu] = useState(false);

    const handleMobileMenuClick = () => {
        setShowMenu(!showMenu);
    }

    return (
        <div id='navigation'>
            <img id='logo' src={Logo} alt="Little Lemon Logo" />
            {!showMenu && <img id="hamburger" onClick={handleMobileMenuClick} src={HamburgerIcon} alt="Hambuger Menu" />}
            {showMenu && <img id="close" onClick={handleMobileMenuClick} src={CloseIcon} alt="Hambuger Menu Close" />}
            <NavItems onClick={handleMobileMenuClick} type='desktop' />
            {showMenu && <NavItems onClick={handleMobileMenuClick} type='mobile' />}

        </div>
    )
}
