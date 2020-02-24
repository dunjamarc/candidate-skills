import React, { Component } from "react";
import {Link} from "react-router-dom";

class Header extends Component {

    constructor (props){
        super(props);
        this.state = {
            active: false
        }
    }

    addClass = () => {
        let className = this.state.active;
        this.setState({
            active: !className
        })
    }
    
    render () {
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
                        <span className="burger" onClick={this.addClass}>
                            <i className="fa fa-bars"></i>
                        </span>
                    </nav>
                </div>
                <div className={`mobile-nav ${this.state.active ? "show" : ""}`}>
                    <ul className="menu">
                        <li><Link to="/" onClick={this.addClass}>HOME</Link></li>
                        <li><Link to="/skills" onClick={this.addClass}>SKILLS</Link></li>
                        <li><Link to="/static" onClick={this.addClass}>STATIC</Link></li>
                    </ul>
                </div>
            </header>
        )
    }
}

export default Header;