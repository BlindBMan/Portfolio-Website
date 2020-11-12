import React from 'react'
import "./Introduction.css"
import {ReactComponent as ScrollHint} from "./ScrollHint.svg";

function Introduction() {
    return (
        <div id="introduction" className=".container d-flex justify-content-center">
            <div className="d-flex align-self-center">
                <div className="d-flex flex-column">

                    <h5 style={{textAlign: "center"}}>Welcome!</h5>
                    <h1 className="main-sentence">I am <b>Samuel Gustin</b> </h1>
                    <ul className="list-inline d-flex align-self-center"
                        style={{listStyle: "disc"}}
                    >
                        <li className="list-inline-item">Developer</li>
                        <li className="list-inline-item">IOT</li>
                        <li className="list-inline-item">Thinker</li>
                    </ul>
                </div>
            </div>
            <ScrollHint className="scroll-hint" />
        </div>
    )
}

export default Introduction