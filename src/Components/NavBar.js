import React, { Component } from "react"
import 'materialize-css/dist/css/materialize.min.css'
import logo from '../logo.png'

export default class NavBar extends Component{
    render () {
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
}

const logoStyle = {
    logoImg: {
        width: 100,
    }
}