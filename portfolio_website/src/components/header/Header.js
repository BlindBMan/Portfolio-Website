import React from 'react'
import './Header.css'
import {ReactComponent as Logo} from "./logo.svg";

function Header() {
    return (
        <div id="header" className=".container">
            <div className="row">
                <div className="col-sm main-name">
                    Samuel Gustin
                    <Logo className="logo" />
                </div>

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
