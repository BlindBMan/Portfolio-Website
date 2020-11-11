import React from 'react'
import './Logo.css'
import {ReactComponent as LogoSVG} from "./logo.svg";

export default function Logo() {
    return (
        <div className="col-sm main-name">
            Samuel Gustin
            <LogoSVG className="logo" />
        </div>
    )
}