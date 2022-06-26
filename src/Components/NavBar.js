import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import logo from '../logo.png'
import Cart from './CardWidget'


const NavBar = () => {
	return (
        <nav>
            <div class="nav-wrapper">
            <a href="#" class="brand-logo"><img src={logo} style={NavBarStyle.logoImg}/>Tienda Pablo</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Artículos</a></li>
                <li><a href="#" style={NavBarStyle.cartIcon}><Cart/>0</a></li>
            </ul>
            </div>
        </nav>
    )
}

const NavBarStyle = {
    logoImg: {
        width: 100,
    },
    cartIcon: {
        fontSize: '2rem'
    }
}

export default NavBar