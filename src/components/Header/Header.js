import React from "react";
import VenturusLogo from '../../LogoVenturus.svg';
import './Header.scss';

const Header = () => {
    return (
        <header className="Header">
            <a href="http://localhost:3000/" title="Home Page">
                <img className="venturus-logo" src={VenturusLogo} alt="Venturus"></img>
                <span className="product-name">Squad Management Tool</span>
            </a>

            <div className="user-info">
                <span className="user-name">John Doe</span>
                <span className="user-icon" title="John Doe">JD</span>
            </div>
        </header>
    )
};

export default Header;