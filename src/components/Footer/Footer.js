import React from "react";

import './Footer.scss';

const Footer = () => {
    let year = new Date();
    year = year.getFullYear();

    return (
        <footer className="Footer">
            <span>{year} - All rigths reserved</span>
        </footer>
    );
}

export default Footer;