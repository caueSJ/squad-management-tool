import React from "react";

import './Footer.scss';

const Footer = () => {
    let year = new Date();
    year = year.getFullYear();

    return (
        <footer className="Footer">
            <small>{year} - All rigths reserved</small>
        </footer>
    );
}

export default Footer;