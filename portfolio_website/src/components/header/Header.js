import React from 'react'
import './Header.css'
import Logo from '../logo/Logo'

function Header() {
    return (
        <div id="header" className=".container">
            <div className="row">
                <Logo />

                <nav className="col-sm-3 navbar">
                    <a href="#">home</a>
                    <a href="#">projects</a>
                    <a href="#">contact</a>
                </nav>
            </div>
        </div>
    )
}

export default Header
