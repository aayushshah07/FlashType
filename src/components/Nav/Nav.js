import React from 'react';
import logo from './../../assets/logo.png'
import "./Nav.css"
const Nav = () =>{
    return(
        <div className="nav-container">
            <div className='nav-left'>
                <img className="flash-logo"  src={logo}  alt="logo_IMAGE"></img>
                <p className="flash-logo-text">Flashtype</p>
            </div>
            <div className="nav-right">
                <a
                    target="_blank"
                    href=""
                    className="nav-link"
                >Aayush</a>
            </div>
        </div>
    );
}

export default Nav;