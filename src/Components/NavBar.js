import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import logo from '../logo.png'

const NavBar = () => {
	return (
        <nav>
            <div class="nav-wrapper">
            <a href="#" class="brand-logo"><img src={logo} style={logoStyle.logoImg}/>Tienda Pablo</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Artículos</a></li>
                <li><a href="#">Carrito</a></li>
            </ul>
            </div>
        </nav>
    )
}

const logoStyle = {
    logoImg: {
        width: 100,
    }
}

export default NavBar