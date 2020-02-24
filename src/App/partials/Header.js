import React from "react";
import {Link} from "react-router-dom";

const Header = (props) => {
    
    return (
        <header>
            <div className="container">
                <nav className="nav-wrapper">
                    <Link to="/" className="brand-logo">LOGO</Link>
                    <ul className="menu">
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/skills">SKILLS</Link></li>
                        <li><Link to="/static">STATIC</Link></li>
                    </ul>
                    <span className="burger">
                        <i className="fa fa-bars"></i>
                    </span>
                </nav>
            </div>
            <div className="mobile-nav">
                <ul className="menu">
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/skills">SKILLS</Link></li>
                    <li><Link to="/static">STATIC</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;